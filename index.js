// function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      const p = document.createElement("p");
      p.textContent = `User ID: ${object.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
Add your code here
