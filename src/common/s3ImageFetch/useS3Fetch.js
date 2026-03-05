export default function useS3Fetch(url, filename) {
    fetch(url)
    .then(res => res.blob())
    .then(blob => {
        return new File([blob], filename, {type:"image/png", lastModified:new Date()});
    })
}