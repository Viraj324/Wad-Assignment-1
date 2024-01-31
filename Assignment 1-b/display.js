document.addEventListener("DOMContentLoaded", function () {
    displayUserData();
});

function displayUserData() {
    const userDataList = document.getElementById("userDataList");

    // Retrieve stored data from local storage
    const storedData = JSON.parse(localStorage.getItem("registrationData")) || [];

    console.log("Stored Data:", storedData); // Add this line for debugging

    if (storedData.length === 0) {
        userDataList.innerHTML = "<li>No registered users</li>";
        return;
    }

    // Display each user's data
    storedData.forEach(user => {
        console.log("User:", user); // Add this line for debugging

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>ID:</strong> ${user.id}<br>
            <strong>Name:</strong> ${user.name}<br>
            <strong>Username:</strong> ${user.username}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Gender:</strong> ${user.gender}<br>
            <strong>State:</strong> ${user.state}<br>
            <strong>City:</strong> ${user.city}<br>
            <strong>Hobbies:</strong> ${user.hobbies}<br>
            <hr>
        `;
        userDataList.appendChild(listItem);
    });
}
