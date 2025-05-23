// function getFormvalue(e){
// 	e.preventDefault();
// 	const firstName = document.querySelector('input[name="fname"]').value.trim();
// 	const secondName = document.querySelector('input[name="lname"]').value.trim();
// 	alert(firstName+" "+secondName);
// }
  
    function getFormvalue(e) {
      e.preventDefault(); // Prevent page reload

      const firstName = document.querySelector('input[name="fname"]').value.trim();
      const lastName = document.querySelector('input[name="lname"]').value.trim();

      if (firstName === "" && lastName === "") {
        alert("Please enter your name.");
        return;
      }

      alert(`${firstName} ${lastName}`);
    }