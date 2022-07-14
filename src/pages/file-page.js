import { useState } from "react";

const FilePage = () => {
	const [photos, setPhotos] = useState(null);

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
		for (let i = 0; i < photos.length; i++) {
			formData.append("property[photo][]", photos[i])
		}
		
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
	return (
		<div>
		<form onSubmit={handleSubmit}>
			<input name="photo" multiple type="file" accept="image/*" onChange={(e)=>setPhotos(e.target.files)}/>
			
			<button type="submit">Submit</button>
		</form>
	</div>
	
	)
	}

export default FilePage;