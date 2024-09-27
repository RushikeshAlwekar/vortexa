// student.js

// Function to fetch and display student attendance and schedule (simulate)
function loadStudentData() {
  const studentAttendance = 85; // Example percentage
  const scheduleData = [
    { day: "Monday", time: "10:00 AM - 11:30 AM", subject: "Math" },
    { day: "Tuesday", time: "9:00 AM - 10:30 AM", subject: "Physics" },
    {
      day: "Wednesday",
      time: "11:00 AM - 12:30 PM",
      subject: "Computer Science",
    },
  ];

  // Display attendance
  document.querySelector(
    ".attendance-block"
  ).textContent = `${studentAttendance}% Attendance`;

  // Display schedule
  const scheduleTableBody = document.querySelector(".schedule-table tbody");
  scheduleData.forEach((schedule) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${schedule.day}</td>
        <td>${schedule.time}</td>
        <td>${schedule.subject}</td>
      `;
    scheduleTableBody.appendChild(newRow);
  });
}

// Call load function when page loads
window.onload = loadStudentData;
