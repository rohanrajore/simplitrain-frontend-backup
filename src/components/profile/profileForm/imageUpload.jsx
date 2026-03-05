import React, {useState, useEffect, useMemo} from 'react';
import useS3Upload from "../../../common/s3Upload/useS3Upload";
import Axios from "axios";
import ImageUploader from 'react-images-upload';
import "./profileForm.css";
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageUpload = props => {

  const [fileList, setFileList] = useState([])
  const [showDelete, setShowDelete] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const PDFonDocumentLoadSuccess = ({ numPages })=> {
      setNumPages(numPages)
    }

  const  PDFhandlePrevPage = () =>{
      if(pageNumber>1){
          let currentPage = pageNumber
           setPageNumber(currentPage-1)
        }
    }
  const  PDFhandleNextPage = () =>{
      if(pageNumber<numPages){
          let currentPage = pageNumber
          setPageNumber(currentPage+1)
        }
    }

  const baseStyle = {
    flex: 1,
    display: "flex",
    width:"100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    border: "none",
    backgroundColor: "rgb(208 208 208)",
    color: "#fff",
    outline: "none",
    height: "auto"
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
      console.log('ready', result)
      props.addUploadedPhoto(result.data.s3File.id); // store pdf name in app's state

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
  })

  const handleDeleteFile = (evt) => {
    evt.stopPropagation();
    const filename = evt.currentTarget.getAttribute("data-filename");
    const file = fileList.find((f) => f.name === filename); // check file was uploaded in this session

    const confirm = window.confirm("Do you want to delete this file?");
    if (confirm && file) {
      let deleteURL = process.env.REACT_APP_API_URL + "/file/s3/" + props.fileID;
      Axios.delete(deleteURL)
        .then((response) => {
          props.addUploadedPhoto("");
          setFileList((files) => {
            const copy = files.filter((f) => f.name !== filename);
            return copy;
          });
        })
        .catch((err) => console.log("Deleting file from S3 error: ", err));
    }
  }


  useEffect(() => {
    const files = acceptedFiles.map((file) => ({
      preview: URL.createObjectURL(file),
      name: file.path,
      status: "pending",
      progress: 0,
    }));

    setFileList((list) => [...files, ...list]);
  }, [acceptedFiles])

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return(
    <div className="profile-userImg">

    {props.fileID==="" || (props.fileID!=="" && fileList.length===1)?

      fileList.length < 1 ? (
      <div {...getRootProps({ style })} className="uploadHover">

        <input {...getInputProps()} />
        <p style={{margin:"auto"}}>{props.title}</p>

      </div>
        ) : (

          <div className="relative-container"
                onMouseOver={()=>setShowDelete(true)}
                onMouseOut={()=>setShowDelete(false)}>


                {fileList.map(file =>(
                  <React.Fragment key={file.name}>
                    <div  style={{display:file.name.includes("pdf")? "none": ""}}>
                          <img  className="file-preview"
                                src={file.preview}
                                onMouseOut={()=>setShowDelete(false)}
                                onMouseOver={()=>setShowDelete(true)}
                                style={{height:"197.75px"}}
                               />
                          <button
                            style={{display:showDelete?"":"none"}}
                            className="delete-btn absolute-centered"
                            data-filename={file.name}
                            onClick={handleDeleteFile}
                          >
                            Delete
                          </button>

                          <div className="file-progress" style={{display:file.progress===100?"none":""}}>
                            <div style={{ width: `${file.progress}%` }}></div>
                            <span>
                              {file.status} {file.progress}%
                            </span>
                          </div>

                    </div>

                    <div  className="pdf-container" style={{display:file.name.includes("pdf")? "": "none"}}>
                        <Document
                          file={file.preview}
                          onLoadSuccess={PDFonDocumentLoadSuccess}
                        >
                          <Page height={250} scale={4} pageNumber={pageNumber} />
                        </Document>
                        <div className="pdf-page-container">
                              <FontAwesomeIcon icon="chevron-left" className="pdf-icon-hover"
                                               onClick={PDFhandlePrevPage}>Prev</FontAwesomeIcon>
                              <div className="pdf-page-text">Page {pageNumber} of {numPages}</div>
                              <FontAwesomeIcon icon="chevron-right" className="pdf-icon-hover"
                                               onClick={PDFhandleNextPage}>Next</FontAwesomeIcon>
                        </div>

                        <button
                          style={{display:showDelete?"":"none"}}
                          className="delete-btn absolute-centered"
                          data-filename={file.name}
                          onClick={handleDeleteFile}
                        >
                          Delete
                        </button>
                    </div>
                  </React.Fragment>
                ))}

          </div>

        )
    : <React.Fragment>
            <div className="relative-container"
                 style={{display:props.pdfURL===("" || null)? "": "none"}}
                  onMouseOver={()=>setShowDelete(true)}
                  onMouseOut={()=>setShowDelete(false)}>
                <img className="file-preview"
                     src={props.imageURL}
                     style={{height:"197.75px"}}
                     />
                <button
                  style={{display:showDelete?"":"none"}}
                  className="delete-btn absolute-centered"
                  onClick={()=>props.addUploadedPhoto("")}
                >
                  Delete
                </button>
            </div>

            <div className="pdf-container" style={{display:props.pdfURL===("" || null)? "none": "",position:"relative"}}
                  onMouseOver={()=>setShowDelete(true)}
                  onMouseOut={()=>setShowDelete(false)}>

                <Document
                  file={props.pdfURL}
                  onLoadSuccess={PDFonDocumentLoadSuccess}
                >
                  <Page height={250} scale={4} pageNumber={pageNumber} />
                </Document>
                <div className="pdf-page-container">
                      <FontAwesomeIcon icon="chevron-left" className="pdf-icon-hover"
                                       onClick={PDFhandlePrevPage}>Prev</FontAwesomeIcon>
                      <div className="pdf-page-text">Page {pageNumber} of {numPages}</div>
                      <FontAwesomeIcon icon="chevron-right" className="pdf-icon-hover"
                                       onClick={PDFhandleNextPage}>Next</FontAwesomeIcon>
                </div>
                <button
                  style={{display:showDelete?"":"none"}}
                  className="delete-btn absolute-centered"
                  onClick={()=>props.addUploadedPhoto("")}
                >
                  Delete
                </button>
            </div>
        </React.Fragment>
  }
    </div>
       );}

export default ImageUpload;
