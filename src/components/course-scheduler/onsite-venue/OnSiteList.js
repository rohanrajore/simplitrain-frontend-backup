import React, {useState, useEffect} from 'react';
import OnSiteListItem from './OnSiteListItem';
import Pagination from './Pagination';

function OnSiteList({ data = [], showDetails = () => {}, perPage = 3, fieldValues }) {
	const pages = Math.ceil(data.length/perPage);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataFiltered, setDataFiltered] = useState([]);

	useEffect(() => {
		const d = data.filter((v, i) => i + 1 > (currentPage*perPage - perPage) && i + 1 <= (perPage*currentPage));
		setDataFiltered(d);
	}, [currentPage]);

	useEffect(() => {
		setDataFiltered(data);
	}, [data]);
 console.log(fieldValues)
	return (
		<React.Fragment>
			<div className="onsite-list">
				{
					dataFiltered.map((item, i) =>
						<OnSiteListItem
							key={i}
							index={i}
							data={item}
							onSelected={showDetails}
							fieldValues={fieldValues}
						/>
					)
				}
			</div>
			<Pagination
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</React.Fragment>
	)
}

export default OnSiteList
