// administrator.js

// Function to handle adding a user
document
  .querySelector(".user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userType = document.getElementById("user-type").value;
    const userName = document.getElementById("user-name").value;
    const userEmail = document.getElementById("user-email").value;

    if (userName && userEmail) {
      alert(
        `${userType} ${userName} added successfully with email: ${userEmail}`
      );
      // Reset form
      document.querySelector(".user-form").reset();
    } else {
      alert("Please enter all fields");
    }
  });

// Function to handle removing a user
document
  .querySelector(".user-remove-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userId = document.getElementById("remove-user-id").value;

    if (userId) {
      alert(`User with ID: ${userId} removed successfully`);
      // Reset form
      document.querySelector(".user-remove-form").reset();
    } else {
      alert("Please enter a User ID to remove");
    }
  });

// Function to handle creating a schedule
document
  .querySelector(".schedule-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const scheduleDay = document.getElementById("schedule-day").value;
    const scheduleTime = document.getElementById("schedule-time").value;
    const scheduleSubject = document.getElementById("schedule-subject").value;
    const scheduleLocation = document.getElementById("schedule-location").value;

    if (scheduleDay && scheduleTime && scheduleSubject && scheduleLocation) {
      // Create new schedule row
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${scheduleDay}</td>
        <td>${scheduleTime}</td>
        <td>${scheduleSubject}</td>
        <td>${scheduleLocation}</td>
      `;
      document.querySelector(".schedule-table tbody").appendChild(newRow);

      alert("Schedule added successfully!");
      // Reset form
      document.querySelector(".schedule-form").reset();
    } else {
      alert("Please enter all fields to create a schedule");
    }
  });
