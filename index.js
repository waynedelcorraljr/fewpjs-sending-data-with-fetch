// Add your code here
function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let id = document.createElement("h1")
            id.innerHTML = object.id;
            document.body.appendChild(id);
        })
        .catch(function(error) {
            alert("Watchu talkin bout, Willis?")
            let err = document.createElement("h1")
            err.innerHTML = error.message;
            document.body.appendChild(err);
        });
}