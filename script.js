// FAQs.html - toggle answer
function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    
    if (window.getComputedStyle(answer).display === "none") {
        // Set max-height to trigger the transition
        answer.style.maxHeight = answer.scrollHeight + "px";
        // Set display to block to show the element
        answer.style.display = "block";

        // After a short delay, transition the max-height
        setTimeout(function() {
            answer.style.maxHeight = "2000px"; // Adjust the value as needed
        }, 10);
    } else {
        // Reverse the process to hide the element
        answer.style.maxHeight = answer.scrollHeight + "px";
        setTimeout(function() {
            answer.style.maxHeight = "0";
        }, 10);
        setTimeout(function() {
            answer.style.display = "none";
        }, 310); // Match the transition duration in CSS
    }
}

// SignIn preview
function checkCredentials(event) {
    event.preventDefault();

    // Hardcoded username and password
    const hardcodedUsername = "Anu";
    const hardcodedPassword = "root";

    // Get values entered by the user
    const enteredUsername = document.getElementById("SignIn-uname-input").value;
    const enteredPassword = document.getElementById("SignIn-pwd-input").value;

    // Check if entered credentials match the hardcoded values
    if (enteredUsername === hardcodedUsername && enteredPassword === hardcodedPassword) {
      // Redirect to HomePage.html if credentials are correct
      window.location.href = "HomePage.html";
    } else {
      // Show an alert if credentials are incorrect
      alert("Invalid credentials. Please try again.");
    }
  }




