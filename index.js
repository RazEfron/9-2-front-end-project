const urlToFetch = "https://fedeperin-harry-potter-api-en.herokuapp.com/db"

fetch(urlToFetch)
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
	})
	.catch((e) => console.log(e));