function äreFredag() {
	var date = new Date();
	var element;

	if(date.getDay() === 5) {
		// Haha aa de äre
		element = document.createElement("img");
		element.setAttribute("src","assets/img/fredagsgrodan.svg");
	} else {
		element = document.createElement("h1");
		element.innerText = "Haha nää";
	}

	return document.body.insertAdjacentElement("afterbegin",element);
}

äreFredag();