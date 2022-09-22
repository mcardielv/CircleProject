document.querySelector("#web-form").addEventListener("submit",addPost);

const url = "http://jsonplaceholder.typicode.com/comments"

function addPost (preventForm){
    preventForm.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json, text/plain",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            body: message,
        }),
    })

    .then((response)) => response.json())
    .then((dataForm)) => console.log(dataForm))
    .then(() => {})
    .cath(() => {});
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#message").value = "";
}