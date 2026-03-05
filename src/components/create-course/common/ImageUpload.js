import React, { useMemo, useState, useEffect } from "react";
import useS3Upload from "../../../common/s3Upload/useS3Upload";
import Axios from "axios";
//import './imageUpload.css';
import {ImageUploadStyle} from './imageUpload.style';

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  border: "none",
  backgroundColor: "rgba(235,98,35,1)",
  background:
    "linear-gradient(90deg, rgba(235,98,35,1) 0%, rgba(221,200,70,1) 100%)",
  color: "#fff",
  outline: "none",
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

function ImageUpload({ addUploadedPhoto, ...props }) {
  const [fileList, setFileList] = useState([]);
  const [imageId, setImageId] = useState();
  const [showDelete, setShowDelete] = useState(false)

  console.log(
    props.editCourseDetails !== undefined
      ? props.editCourseDetails.courseImage
      : ""
  );
  console.log(
    props.editCourseDetails !== undefined ? props.editCourseDetails : ""
  );
  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
  } = useS3Upload({
    multiple: false,
    // callbacks here
    onProgress: (file, progress) => {
      //console.log(file, progress)
      setFileList((files) => {
        const copy = [...files];
        const index = copy.findIndex((f) => f.name === file);
        copy[index].progress = parseInt(progress);
        if (parseInt(progress) >= 100) {
          copy[index].status = "ready";
        }
        return copy;
      });
    },
    onUploadReady: (result) => {
      //console.log('ready', result)
      addUploadedPhoto(result.data.s3File.id); // store photo name in app's state
      setImageId(result.data.s3File.id);
      setFileList((files) => {
        const copy = [...files];
        const index = copy.findIndex(
          (f) => f.name === result.data.s3File.originalFileName
        );
        copy[index].status = "ready";
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
    const file = fileList.find((f) => f.name === filename); // check file was uploaded in this session

    const confirm = window.confirm("Do you want to delete this file?");
    if (confirm && file) {
      let deleteURL = process.env.REACT_APP_API_URL + "/file/s3/" + imageId;
      Axios.delete(deleteURL)
        .then((response) => {
          addUploadedPhoto("");
          setImageId("");
          setFileList((files) => {
            const copy = files.filter((f) => f.name !== filename);
            return copy;
          });
        })
        .catch((err) => console.log("Deleting file from S3 error: ", err));
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
    <ImageUploadStyle>
    <div className="">

    {props.courseImage==="" || (props.courseImage!=="" && fileList.length===1)?
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {fileList.length < 1 ? (
          <React.Fragment>
            <p>Upload Course Image</p>
            <p>
              <span className="btn btn-upload">Upload</span>
            </p>
          </React.Fragment>
        ) : (
          <ul className="file-list">
            {fileList.map((file) => (
              <li key={file.name}>
                <div
                  className="file-preview image-flex"
                  style={{ backgroundImage: `url(${file.preview})`, width: "100%" }}
                  onMouseOver={()=>setShowDelete(true)}
                  onMouseOut={()=>setShowDelete(false)}
                >
                    {file.status === "ready" && (
                      <button
                        style={{display:showDelete?"":"none"}}
                        className="delete-btn"
                        data-filename={file.name}
                        onClick={handleDeleteFile}
                      >
                        Delete
                      </button>
                    )}
                </div>
                <div className="file-progress">
                  <div style={{ width: `${file.progress}%` }}></div>
                  <span>
                    {file.status} {file.progress}%
                  </span>
                </div>
                <div className="file-name">{file.name}</div>

              </li>
            ))}
          </ul>
        )}
      </div>
    :
    <div className="relative-container"
          onMouseOver={()=>setShowDelete(true)}
          onMouseOut={()=>setShowDelete(false)}>
        <img className="file-preview"
             src={props.editCourseDetails!=undefined?props.editCourseDetails.courseImageUrl: ""}
             />
        <button
          style={{display:showDelete?"":"none"}}
          className="delete-btn absolute-centered"
          onClick={()=>addUploadedPhoto("")}
        >
          Delete
        </button>
    </div>}
    </div>
    </ImageUploadStyle>
  );
  
}

export default ImageUpload;
