function loadCities() {
  // This function should populate the city dropdown based on the selected state
  // You can add your logic here or fetch cities from a server
}

function submitForm() {
  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);

  // Convert FormData to JSON
  const jsonData = {};
  formData.forEach((value, key) => {
      jsonData[key] = value;
  });

  // Save data to local storage
  const storedData = JSON.parse(localStorage.getItem("registrationData")) || [];
  storedData.push(jsonData);
  localStorage.setItem("registrationData", JSON.stringify(storedData));

  // Display the submitted data on the same page
  displayUserData(jsonData);
}

function displayUserData(user) {
  const userDataContainer = document.getElementById("userDataContainer");

  const userDataDiv = document.createElement("div");
  userDataDiv.innerHTML = `
      <h2>Submitted Data</h2>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Gender:</strong> ${user.gender}</p>
      <p><strong>DOB:</strong> ${user.dob}</p>
      <p><strong>Address:</strong> ${user.address}</p>
      <p><strong>State:</strong> ${user.state}</p>
      <p><strong>City:</strong> ${user.city}</p>
      <p><strong>Hobbies:</strong> ${user.hobbies}</p>
  `;

  userDataContainer.innerHTML = ''; // Clear previous data
  userDataContainer.appendChild(userDataDiv);
}
