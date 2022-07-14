import { useState } from "react";

const FilePage = () => {
	const [photos, setPhotos] = useState(null);
	const [error, setError] = useState(false)

	function handleChange(event) {
		setPhotos(event.target.files)
	}
	function ImgPreview({photos}) {
		return (
			photos? Array.from(photos).map(function (photo, idx) {
        return <img key={idx} width={250} src={URL.createObjectURL(photo)} alt={photo.name} />;
    	}) : ""
		)
	}
	function handleSubmit(event) {
    event.preventDefault();

		const formData = new FormData()

		formData.append("property[about]", "short description")
		formData.append("property[address]", "some rare 342 addresss")
		formData.append("property[price]", 4000)
		formData.append("property[operation]", "sale")
		formData.append("property[property_type]", "apartment")
		formData.append("property[area]", 100)
		formData.append("property[bedrooms]", 2)
		formData.append("property[bathrooms]", 2)

		if (photos.length > 3 ) {
			setError(true)
		} else {
			for (let i = 0; i < photos.length; i++) {
				if (Math.round((photos[i].size / 1024)) > 5) {
					formData.append("property[photo][]", photos[i])
					setError(true)
				}
			}
		}

		if (error === false) {
			fetch('https://homeable-api.herokuapp.com/properties', {
				method: 'POST',
				body: formData,
				headers: {
					Authorization: "Token token=k68KKaXhq2295VDZVAzVxxa3"
				},
			}).then((response) => response.json())
			.then((result) => console.log(result))
			.catch(error=>console.log(error));
		} 
	}

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<input name="photo" multiple type="file" accept="image/*" onChange={handleChange}/>
			
			<button type="submit">Submit</button>
		</form>
		<ImgPreview photos={photos}/>
		<p>{error === true ? "Only 3 files of up to 5MB are allowed" : ""}</p>
	
	</div>
	
	)
	}

export default FilePage;