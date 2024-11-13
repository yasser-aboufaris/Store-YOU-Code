// const submit = document.getElementById('submitButton');
// const successMessage = document.getElementById('successMessage');
// const errorMessage = document.getElementById('errorMessage');

// submit.addEventListener('click', async function(event) {
//     event.preventDefault();

//     const nameInput = document.getElementById('userInput');
//     const lastNameInput = document.getElementById('lastInput');
//     const subjectInput = document.getElementById('subjectInput');
//     const textInput = document.getElementById('textInput');
// })

document.getElementById('fillForm').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/', true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState ==  4)  {
            if(xhr.status == 200) {
              //console.log(JSON.parse(xhr.responseText))
                parseResponse(xhr.responseText);
            } else {
                console.error('Error!');
            }
        }

    }

    xhr.send();
});
