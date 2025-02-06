function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	if (number === '1234123412341234') {
        return true;
    }
    else {
        return false;
    }
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
    // check date
    if (this.expirationMonth.value > 12) {
        errorMsg += 'Month is not valid\n'
    } else if (!checkDate(this.expirationYear.value, this.expirationMonth.value)) {
        errorMsg += 'Date is invalid\n'        
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

function checkDate(year, month){
    const currentDate = new Date();
    const enteredYear = parseInt(year);
    const currentYear = currentDate.getFullYear();
    const enteredMonth = parseInt(month, 10);
    const currentMonth = (currentDate.getMonth() + 1);

    if ((enteredYear < currentYear) || (enteredYear === currentYear && enteredMonth < currentMonth)){
        return false;
    } else {
        return true;
    }
}

document.querySelector('#creditCardForm').addEventListener('submit', submitHandler);