function getFormValue(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Access the form
    const form = document.getElementById('nameForm');

    // Retrieve values from the form inputs
    const firstName = form.fname.value.trim(); // Using trim() to remove extra spaces
    const lastName = form.lname.value.trim();

    // Check for empty fields
    if (firstName === "" || lastName === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Display the full name using alert
    alert(`${firstName} ${lastName}`);
}