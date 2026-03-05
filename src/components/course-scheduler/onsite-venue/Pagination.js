import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleRight
} from '@fortawesome/free-solid-svg-icons';

function Pagination({pages, currentPage = 1, setCurrentPage = () => {}}) {
  //const [currentPage, setCurrentPage] = useState(1);
  let maxPages = pages;
  let items = [];
  let leftSide = currentPage - 2;
	if(leftSide <= 0 )
		leftSide=1;

	let rightSide = currentPage + 2;
	if(rightSide>maxPages)
		rightSide = maxPages;

	for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>,
    );
  }

	const nextPage = () => {
		if(currentPage<maxPages){
			setCurrentPage(currentPage+1)
		}
	}

	const prevPage = () => {
		if(currentPage>1){
			setCurrentPage(currentPage-1)
		}
	}

  return (
    <div className="paginate-container" id="venuePag">
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
        {items}
        <div className="round-effect" onClick={nextPage}>
					<FontAwesomeIcon icon={faAngleRight} />
				</div>
      </div>
			<div> Page {currentPage} of {maxPages} </div>
    </div>
  );
}

export default Pagination;
