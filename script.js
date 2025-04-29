// function getFormvalue(e) {
//       // 1) Prevent the real form submission
//       e.preventDefault();

//       // 2) Grab & trim values
//       const firstName = document.querySelector('input[name="fname"]').value.trim();
//       const lastName  = document.querySelector('input[name="lname"]').value.trim();

//       // 3) Build the full name (handles empty, extra spaces, special chars)
//       //    If either is empty, you still get just the other name or blank.
//       const fullName = [ firstName, lastName ].filter(Boolean).join(' ');

//       // 4) Display
//       alert(fullName);

//       // Return false to be extra-sure no navigation happens
//       return false;
//     }


// grab the form once the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', getFormvalue);
});

function getFormvalue(e) {
  // 1) prevent the browser from navigating away
  e.preventDefault();

  // 2) grab & trim the two inputs
  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName  = document.querySelector('input[name="lname"]').value.trim();

  // 3) build the full name (handles empty strings too)
  const fullName = [firstName, lastName].filter(Boolean).join(' ');

  // 4) fire the alert (Cypress listens to `window:alert`)
  alert(fullName);
}



