//  // Execute when the page content is fully loaded

//  window.addEventListener('DOMContentLoaded', function() {
//     const usernameField = document.getElementById('username');
//     const passwordField = document.getElementById('password');
//     const rememberMeCheckbox = document.getElementById('checkbox');
//     const submitBtn = document.getElementById('submit');
//     const existingUserBtn = document.getElementById('existing');
//     // Check if credentials are already in localStorage
//     function checkStoredCredentials() {
//       const storedUsername = localStorage.getItem('username');
//       const storedPassword = localStorage.getItem('password');
//       // If both exist, show the "Login as existing user" button
//       if (storedUsername && storedPassword) {
//         existingUserBtn.style.display = 'inline-block';
//       } else {
//         existingUserBtn.style.display = 'none';
//       }
//     }

//     // Check on page load
//     checkStoredCredentials();

//     // On submit button click
//     submitBtn.addEventListener('click', function(event) {
//       // Prevent form submission from reloading the page
//       event.preventDefault();

//       const usernameValue = usernameField.value;
//       const passwordValue = passwordField.value;
//       const rememberMe = rememberMeCheckbox.checked;

//       if (rememberMe) {
//         // Save credentials in localStorage
//         localStorage.setItem('username', usernameValue);
//         localStorage.setItem('password', passwordValue);
//       } else {
//         // Remove credentials from localStorage
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//       }

//       // Alert message
//       alert("Logged in as " + usernameValue);

//       // Re-check if we should show the "existing user" button
//       checkStoredCredentials();
//     });

//     // On "Login as existing user" button click
//     existingUserBtn.addEventListener('click', function() {
//       const storedUsername = localStorage.getItem('username');
//       if (storedUsername) {
//         alert("Logged in as " + storedUsername);
//       }
//     });
//   });




window.addEventListener('DOMContentLoaded' , function() {

	const userField = document.getElementById("username");
	const passwordField = document.getElementById("password");
	const checkBox = document.getElementById("checkbox");
	const sumbitBtn = document.getElementById("submit");
	const ExistingUser = document.getElementById("existing");

	function credentials() {
		const localName = localStorage.getItem("username");
		const localpassword = localStorage.getItem("password");

		if(localName && localpassword) {
			ExistingUser.style.display = 'inline-block'
		}else {
			ExistingUser.style.display = 'none';
		}
		
		
	}
	credentials();

	sumbitBtn.addEventListener('click' , function(event) {
        event.preventDefault();

		const usernameValue = userField.value;
		const passwordValue = passwordField.value;
		const CheckField = checkBox.checked;

		if(CheckField) {
			localStorage.setItem('username' , usernameValue);
			localStorage.setItem('password' , passwordValue);
		}else {
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}

		alert("is logged of" + usernameValue);

		credentials();
	})

	
    ExistingUser.addEventListener("click" , function()  {
		
		const localStorageName = localStorage.getItem('username');

		if(localStorageName) {
			alert("this is Existing User" + localStorageName)
		}
	})
	
	
}