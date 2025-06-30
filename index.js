function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name, email })
  })
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById("output");
      output.textContent = data.id;
      return data;
    })
    .catch(error => {
      const output = document.getElementById("output");
      output.textContent = error.message;
    });
}

// Optional: Connect the form to submitData
document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  submitData(name, email);
});
