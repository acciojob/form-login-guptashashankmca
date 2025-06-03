function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1');

	let firstName = form.elements['fname'].value;
	let lastName = form.elements['lname'].value;

	alert(${firstName} ${lastName})
}