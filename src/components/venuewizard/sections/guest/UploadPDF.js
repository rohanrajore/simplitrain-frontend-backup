import React, {useState, useEffect} from 'react';
import useS3Upload, { getAwsStorage } from '../photos/useS3Upload';

function UploadPDF({onUploadReady}) {
  const [fileList, setFileList] = useState([]);
  const { 
		acceptedFiles,
		getRootProps, 
		getInputProps 
	} = useS3Upload({
		fileType: 'application/pdf',
		multiple: false,
		// callbacks here
		onProgress: (file, progress) => { 
			setFileList(files => {
				const copy = [...files];
				const index = copy.findIndex(f => f.name === file);
				copy[index].progress = parseInt(progress);
				return copy;
			}) 
		},
		onUploadReady: (result) => { 
			onUploadReady(result.key); // store photo name in app's state
			setFileList(files => {
				const copy = [...files];
				const index = copy.findIndex(f => f.name === result.key);
				copy[index].status = 'ready';
				return copy;
			}) 
		},
		onUploadStart: () => { 
			console.log('start');
		},
		onError: () => { console.log('error')}
	});

	const handleDeleteFile = (filename) => {
		const confirm = window.confirm('Do you want to delete this file?');
		if (confirm) {
			const Storage = getAwsStorage();
			Storage.remove(filename)  
				.then(result => {
					console.log('Deleted file from S3', filename);
					setFileList(files => {
						const copy = files.filter(f => f.name !== filename);
						return copy;
					})
				})
				.catch(err => console.log('Deleting file from S3 error: ', err));
		}
	}

	useEffect(() => {
		const files = acceptedFiles.map(file => ({
			name: file.path,
			status: 'pending',
			progress: 0
		}))
		
		setFileList( list => [...files] );
	}, [acceptedFiles])
  
  const files = fileList.map(file => (
    <div className="p" key={file.name} style={{ display: 'flex', alignItems: 'center' }}>
			<div className="file-name">{file.name}</div> 
			<div className="file-progress">
				<div style={{width: `${file.progress}%`}}></div>
				<span>{file.status} {file.progress}%</span>
			</div>
			{
				file.status === 'ready' && (
					<button 
						className="file-delete" 
						onClick={() => handleDeleteFile(file.name)}
					>
						X
					</button>
				)
			}
		</div>
  ));

  return (
    <section className="p">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
				<span>
					Specify the Venue Guidelines & Rules or &nbsp;
				</span>
        <button className="btn p-0 m-0">
          + upload document (only PDF)
        </button>
      </div>
      <aside>
        {files}
      </aside>
    </section>
  );
}

export default UploadPDF;