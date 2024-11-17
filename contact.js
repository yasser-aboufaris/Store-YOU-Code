document.getElementById('fillForm').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/', true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState ==  4)  {
            if(xhr.status == 200) {
                parseResponse(xhr.responseText);
            } else {
                console.error('Error!');
            }
        }

    }

    xhr.send();
});

function parseResponse(response) {
    let data = JSON.parse(response);
    let results = data.results[0];
    
    document.getElementById("userInput").value = `${results.name.first}`;
    document.getElementById("lastInput").value = `${results.name.last}`;
    document.getElementById("subjectInput").value = `${results.login.username}`;
    document.getElementById("textInput").value = `${results.login.username} - ${results.name.title} ${results.name.first} ${results.name.last} - Age: ${results.dob.age} - Registered for: ${results.registered.age} years`;
}

// document.getElementById('submitButton').addEventListener('click', function () {
//     const xhr = new XMLHttpRequest();

//     xhr.open('PUT', 'https://67353a845995834c8a923af7.mockapi.io/contactForm/put', true);

//     xhr.setRequestHeader('content-Type', 'application/json');

//     const data = {
//         firstName: document.getElementById('userInput').value,
//         lastName: document.getElementById('lastInput').value,
//         subject: document.getElementById('subjectInput').value,
//         text: document.getElementById('textInput').value
//     }
// }) 