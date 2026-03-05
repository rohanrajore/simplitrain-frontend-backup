import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function PhotoGallery({ photos, name="" }) {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const more = photos.length - 4;

	if (photos.length === 0) {
		return (
			<div className="photos">
				<img src="https://via.placeholder.com/150" alt={name} />
			</div>
		)
	}

	let thumbs = [];
	for (let i = 1; i < 4; i++) {
		if (i + 1 <= photos.length)
			thumbs.push(<img key={i} src={photos[i]} alt={name} />)
	}

	return (
		<React.Fragment>
			<div className="photos" data-more={more}>
				<img src={photos[0]} alt={name} />
				<div className="thumbs">
					{thumbs}
					{more > 0 && <div className="p-more" onClick={() => setIsOpen(true)} >+{more}</div>}
				</div>
			</div>
			{isOpen && (
				<Lightbox
					mainSrc={photos[photoIndex]}
					nextSrc={photos[(photoIndex + 1) % photos.length]}
					prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setPhotoIndex(i => (i + photos.length - 1) % photos.length)}
					onMoveNextRequest={() => setPhotoIndex(i => (i + 1) % photos.length)}
				/>
      )}
		</React.Fragment>
	)
}

export default PhotoGallery
