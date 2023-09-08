const cardholderName = document.getElementById("form-cardholder-name");
const cardholderNumber = document.getElementById("form-cardholder-number");
const cardholderMonth = document.getElementById((id = "form-cardholder-month"));
const cardholderYear = document.getElementById("form-cardholder-year");
const cardholderCvc = document.getElementById("form-cvc");
const form = document.getElementById("form");

const cardInfoNumber = document.getElementById("card-info-number");
const displayName = document.querySelector(".display-name");
const cardCvc = document.querySelector(".card-cvc");

// Error element
const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const monthYearError = document.getElementById("month-year-error");
const cvcError = document.getElementById("cvc-error");

const completeState = document.querySelector(".complete-state");
const formContainer = document.querySelector("#form");

const continueButton = document.querySelector('.continue-btn')
console.log(continueButton);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// if (!validateInputs()) {
	// 	// console.log(validateInputs);
	// } else {
	// 	// console.log(validateInputs());
	// }
	validateInputs();
});

const setError = (element, message) => {
	const errorDisplay = element.nextElementSibling;
	element.style.borderColor = "red";

	errorDisplay.innerText = message;
	errorDisplay.classList.add("error");
	errorDisplay.classList.remove("success");
	// element.classList.add("error");
	// return false;
};

const setSuccess = (element) => {
	const errorDisplay = element.nextElementSibling;
	element.style.borderColor = "purple";
	// element.classList.add("error");
	// errorDisplay.innerText = message;
	element.classList.add("success");
	errorDisplay.innerText = "";

	// return true;
};

const validateInputs = () => {
	const holderName = cardholderName.value.trim();
	const holderNumber = cardholderNumber.value;
	const month = cardholderMonth.value.slice(-2);
	const year = Number(cardholderYear.value.slice(-2));
	const cvc = cardholderCvc.value.slice(-3);

	if (holderName === "") {
		setError(cardholderName, "Username is required");
	} else if (!holderName.match(/[A-za-z]*\s{1}[A-za-z]*$/)) {
		setError(cardholderName, "Write full name");
	} else {
		setSuccess(cardholderName);
	}

	if (holderNumber.length == 0) {
		setError(cardholderNumber, "Number is required");
	} else if (!holderNumber.match(/\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}/)) {
		setError(cardholderNumber, "Wrong format, numbers only");
	} else {
		setSuccess(cardholderNumber);
	}

	if (cvc.length == 0) {
		setError(cardholderCvc, "Can't be blank");
	} else {
		setSuccess(cardholderCvc);
	}

	if (!month) {
		setError(cardholderMonth, "Can't be blank");
	} else {
		setSuccess(cardholderMonth);
	}

	if (!year) {
		setError(cardholderYear, "Can't be blank");
		return;
		// console.log("confirm");
	} else {
		setSuccess(cardholderYear);
	}

	// complete state. 
	setTimeout(() => {
		formContainer.style.display='none';
		completeState.style.display = 'flex'
	}, 2000);
	// console.log("confirm");
};

cardholderName.addEventListener("keyup", function () {
	let holderName = cardholderName.value;
	displayName.textContent = holderName.toUpperCase();
	if (holderName.length == 0) {
		setError(cardholderName, "Username is required");
	}
	if (!holderName.match(/[A-za-z]*\s{1}[A-za-z]*$/)) {
		setError(cardholderName, "Write full name");
	} else {
		setSuccess(cardholderName);
	}
});

cardholderNumber.addEventListener("keyup", function () {
	let holderNumber = cardholderNumber.value;
	cardInfoNumber.textContent = holderNumber;
	if (holderNumber.length == 0) {
		setError(cardholderNumber, "Number is required");
	}
	if (!holderNumber.match(/\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}/)) {
		setError(cardholderNumber, "Wrong format, numbers only");
	} else {
		setSuccess(cardholderNumber);
	}
});

cardholderMonth.addEventListener("keyup", function () {
	const month = cardholderMonth.value.slice(-2);
	document.querySelector("#mm").textContent = month;
	if (!month) {
		setError(cardholderMonth, "Can't be blank");
	} else {
		setSuccess(cardholderMonth);
	}
});

cardholderYear.addEventListener("keyup", function () {
	const year = Number(cardholderYear.value.slice(-2));
	document.querySelector("#yy").textContent = year;
	if (!year) {
		setError(cardholderYear, "Can't be blank");
	} else {
		setSuccess(cardholderYear);
	}
});

cardholderCvc.addEventListener("keyup", function () {
	const cvc = cardholderCvc.value.slice(-3);
	cardCvc.textContent = cvc;
	if (cvc.length == 0) {
		setError(cardholderCvc, "Can't be blank");
	} else {
		setSuccess(cardholderCvc);
	}
});

continueButton.addEventListener('click', ()=>{
	cardholderName.value=''
	cardholderNumber.value=''
	cardholderMonth.value=''
	cardholderYear.value=''
	cardholderCvc.value=''

	displayName.textContent = 'Jane Appleseed'
	cardInfoNumber.textContent = "0000 0000 0000 0000"
	cardCvc.textContent="000"
	document.querySelector("#mm").textContent = "00" 
	document.querySelector("#yy").textContent ="00"

	setTimeout(() => {
		formContainer.style.display = "flex";
		completeState.style.display = "none";
	}, 2000);
	
})

// Progress:
// Stopped at figuring out how to endure a live
// ```
// [Done]	Fill in the form and see the card details update in real-time
// 		Receive error messages when the form is submitted if:
// -[Done]	Any input field is empty
// -[done] 	The card number, expiry date, or CVC fields are in the wrong format
// -[Done]	View the optimal layout depending on their device's screen size
// -[Done] See hover, active, and focus states for interactive elements on the page

// ```
