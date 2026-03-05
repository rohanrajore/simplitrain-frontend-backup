import React, { useMemo, useState, useEffect } from "react";
import useS3Upload from "./useS3Upload";
import Axios from "axios";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function ImageUpload({ addUploadedPhoto, deleteUploadedPhoto }) {
  const [fileList, setFileList] = useState([]);
  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
  } = useS3Upload({
    // callbacks here
    onProgress: (file, progress) => {
      //console.log(file, progress)
      setFileList((files) => {
        const copy = [...files];
        const index = copy.findIndex((f) => f.name === file);
        copy[index].progress = parseInt(progress);
        return copy;
      });
    },
    onUploadReady: (result) => {
      //console.log('ready', result)
      setFileList((files) => {
        const copy = [...files];
        const index = copy.findIndex(
          (f) => f.name === result.data.s3File.originalFileName
        );
        copy[index].fileS3Id = result.data.s3File.id;
        copy[index].status = "ready";
        addUploadedPhoto(result.data.s3File.id, files.length); // store photo name in app's state
        return copy;
      });
    },
    onUploadStart: () => {
      console.log("start");
    },
    onError: () => {
      console.log("error");
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const handleDeleteFile = (evt) => {
    evt.stopPropagation();
    const filename = evt.currentTarget.getAttribute("data-filename");
    const fileS3Id = evt.currentTarget.getAttribute("data-fileId");
    const file = fileList.find((f) => f.name === filename); // check file was uploaded in this session

    const confirm = window.confirm("Do you want to delete this file?");
    if (confirm && file) {
      let deleteURL = process.env.REACT_APP_API_URL + "/file/s3/" + fileS3Id;
      Axios.delete(deleteURL)
        .then((response) => {
          deleteUploadedPhoto(fileS3Id);
          // setImageId("");
          console.log("Deleted file from S3", filename);
          setFileList((files) => {
            const copy = files.filter((f) => f.name !== filename);
            return copy;
          });
        })
        .catch((err) => {
          console.log("Deleting file from S3 error: ", err);
        });
    }
  };

  useEffect(() => {
    const files = acceptedFiles.map((file) => ({
      preview: URL.createObjectURL(file),
      name: file.path,
      status: "pending",
      progress: 0,
    }));

    setFileList((list) => [...files, ...list]);
  }, [acceptedFiles]);

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {fileList.length < 1 ? (
          <React.Fragment>
            <p>
              <span className="btn blue">Upload</span>
            </p>
            <div>or drag them in</div>
          </React.Fragment>
        ) : (
          <ul className="file-list">
            {fileList.map((file) => (
              <li key={file.name}>
                <div
                  className="file-preview"
                  style={{ backgroundImage: `url(${file.preview})` }}
                ></div>
                <div className="file-progress">
                  <div style={{ width: `${file.progress}%` }}></div>
                  <span>
                    {file.status} {file.progress}%
                  </span>
                </div>
                <div className="file-name">{file.name}</div>
                {file.status === "ready" && (
                  <button
                    className="file-delete"
                    data-filename={file.name}
                    data-fileid={file.fileS3Id}
                    onClick={handleDeleteFile}
                  >
                    X
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
