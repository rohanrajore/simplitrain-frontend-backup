import Amplify, { Storage } from 'aws-amplify';
import { useDropzone } from 'react-dropzone';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-2:988b76ee-ee0a-4fa9-afc1-a2f9f934f66e', //REQUIRED - Amazon Cognito Identity Pool ID
    region: 'us-east-2', // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: 'demovenuewizard', //REQUIRED -  Amazon S3 bucket
      region: 'us-east-2', //OPTIONAL -  Amazon service region
    }
  }
});

export const getAwsStorage = () => Storage;

export default function useS3Upload({
	onProgress,
  onUploadStart,
  onUploadReady,
  onError,
  fileType = 'image/*',
  multiple = true
}) {
  async function onDrop(acceptedFiles) {
    // Let the caller know that a file has been selected and a fetch is beginning.
		onUploadStart(acceptedFiles.map(f => f.name));

		acceptedFiles.forEach(file => {
      // maybe you should change the name here with UUID
			Storage.put(file.name, file, {
				contentType: fileType,
				progressCallback(progress) {
					onProgress(file.name, (progress.loaded*100/progress.total))
				}
			})
			.then (result => {
				onUploadReady(result);
			})
			.catch(err => {
				onError(err);
				return;
			});
		})
  }

  return useDropzone({
    accept: fileType,
    disabled: false,
    multiple,
    onDrop,
  });
}