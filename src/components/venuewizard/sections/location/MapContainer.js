import React, { Component, Fragment } from 'react';

const center = {
	lat: 40.6700,
	lng: -73.9400
}

class MapContainer extends Component {
	componentDidMount() {
		this.map = new window.google.maps.Map(this.$map, {
      zoom: 10,
			center: center,
			disableDefaultUI: true,
			zoomControl: true
		});

		this.marker = new window.google.maps.Marker({
			position: center,
			map: this.map,
			draggable: true,
			title: "You are here"
		});

		const _this = this;
		window.google.maps.event.addListener(this.marker, 'dragend', function()
		{
			//console.log(_this.marker.getPosition())
			_this.geocodePosition(_this.marker.getPosition());
		});

		// Create the autocomplete object, restricting the search predictions to
		// geographical location types.
		this.autocomplete = new window.google.maps.places.Autocomplete(this.$search, {types: ['geocode']});

		// Avoid paying for data that you don't need by restricting the set of
		// place fields that are returned to just the address components.
		this.autocomplete.setFields(['address_component', 'geometry']);

		// When the user selects an address from the drop-down, populate the
		// address fields in the form.
		this.autocomplete.addListener('place_changed', this.fillInAddress);
	}

	geocodePosition = (pos) => {
		const geocoder = new window.google.maps.Geocoder();
   	geocoder.geocode(
			{ latLng: pos },
			(result, status) => {
				const data = result[result.length - 3].address_components;
				console.log(result)
				data['latitude'] = pos.lat();
				data['longitude'] = pos.lng();
				this.props.fillForm(this.getLongNames(data));
			}
		)
	}

	fillInAddress = (evt) => {
		const place = this.autocomplete.getPlace();

		if (!place.hasOwnProperty('geometry'))
			return;

		const location = place.geometry.location;
		const pos = new window.google.maps.LatLng(location.lat(), location.lng())
		this.map.setCenter(pos);
		this.marker.setPosition(pos);
		const data = this.getLongNames(place.address_components);
		data['latitude'] = location.lat();
		data['longitude'] = location.lng();
		this.props.fillForm(data);
	}

	getLongNames = (data) => {
		console.log(data)
		const city = data.find(place => place.types[0] === 'administrative_area_level_2' || place.types[0] === 'locality');
		const state = data.find(place => place.types[0] === 'administrative_area_level_1');
		const country = data.find(place => place.types[0] === 'country');

		return {
			city: city ? city.long_name : "",
			state: state? state.long_name : "",
			country: country ? country.long_name: ""
		}
	}

  render() {
    return (
			<Fragment>
				<div
					ref={el => this.$map = el}
					className="map"
				>
				</div>
				<input
					ref={el => this.$search = el}
					name="mapSearch"
					type="text"
					className="form-control"
					placeholder="Search on Google Map"
				/>
			</Fragment>
    );
  }
}

export default MapContainer;
