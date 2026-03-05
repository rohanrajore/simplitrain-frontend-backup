import { useDropzone } from "react-dropzone";
import Axios from "axios";

export default function useS3Upload({
  onProgress,
  onUploadStart,
  onUploadReady,
  onError,
  fileType = window.location.pathname.includes("profile")?[ "image/jpeg",
                                                            "image/png",
                                                            "image/jpg",
                                                            "application/pdf",
                                                          ]
                                                            :"image/*",
  multiple = true,
}) {
  async function onDrop(acceptedFiles) {
    let uploadURL = process.env.REACT_APP_API_URL + "/file/s3";
    // Let the caller know that a file has been selected and a fetch is beginning.
    onUploadStart(acceptedFiles.map((f) => f.name));

    acceptedFiles.forEach((file) => {
      let data = new FormData();
      data.append("file", file);
      // maybe you should change the name here with UUID
      Axios.post(uploadURL, data, {
        onUploadProgress: (progress) => {
          onProgress(file.name, (progress.loaded * 100) / progress.total);
        },
      })
        .then((result) => {
          onUploadReady(result);
        })
        .catch((err) => {
          onError(err);
          return;
        });
    });
  }

  return useDropzone({
    accept: fileType,
    disabled: false,
    multiple,
    onDrop,
  });
}
