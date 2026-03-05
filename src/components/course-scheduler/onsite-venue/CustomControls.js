import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faStar,
	faAngleDown,
	faAngleUp 
} from '@fortawesome/free-solid-svg-icons';

export const StarRating = ({count}) => {
	const arr = Array.from({length: count}, (v, i) => i);
	return (
		<small className="star-rating">{arr.map((s,i) => <FontAwesomeIcon key={i} icon={faStar} />)}</small>
	)
}

export function StarRatingActive({count}) {
	const stars = [1,2,3,4,5].map((k, i) => {
			return k <= count ? <FontAwesomeIcon key={i} icon={faStar} className="star-active" /> : <FontAwesomeIcon key={i} icon={faStar} />
	});
	return (
		<div className="rating-active">
			{stars}
		</div>
	)
}

export function SimpleSelectInput({name, options, value, onChange = () => {} }) {
  return (
    <select className="form-control" name={name} defaultValue={value} onChange={onChange}>
    {
      options.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)
    }
    </select>
  )
}

export function Accordeon({title, content}) {
	const [showFilters, setShowFilters] = React.useState(false);
	return (
		<div className="onsite-filters">
			<div className="filters-header">
				<h5>{title}</h5>
				<button type="button" onClick={() => setShowFilters(s => !s)}>
					<FontAwesomeIcon icon={faAngleDown} />
				</button>
			</div>
			<section className={`${showFilters ? 'open' : ''}`}>
				<p style={{padding: '10px'}}>
					{
						content ? content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in read moreLorem ipsum dolor sit amet`
					}
				</p>
			</section>
		</div>
	)
}