// JavaScript code to handle form submission and display the enrolled students
const enrollmentForm = document.getElementById('enrollmentForm');
const enrolledStudents = document.getElementById('enrolledStudents');

enrollmentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const website = document.getElementById('website').value;

  // Create a new row for the enrolled student
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${course}</td>
    <td>${website}</td>
  `;

  // Append the new row to the enrolledStudents table body
  enrolledStudents.appendChild(newRow);

  // Reset the form fields
  enrollmentForm.reset();
});
