// faculty.js

// Function to handle marking student attendance
document
  .querySelector(".attendance-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const studentId = document.getElementById("student-id").value;
    const attendanceStatus = document.querySelector(
      'input[name="attendance"]:checked'
    ).value;

    if (studentId) {
      alert(
        `Attendance for Student ID: ${studentId} marked as ${attendanceStatus}`
      );
      // Reset form
      document.querySelector(".attendance-form").reset();
    } else {
      alert("Please enter a Student ID");
    }
  });
