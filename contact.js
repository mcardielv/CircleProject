//detect submit button from dom html
document.querySelector("#web-form").addEventListener("button-submit", addPost);

//get api array
const url = "http://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
  preventForm.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  //promises secuence -  fetch().then().then().then().catch;
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
  }) //response can change name to anything we want
    .then((response) => response.json())
    .then((dataForm) => {
      console.log(dataForm);
    })
    .then(() => {
      let message = "";
      message += `
        <div> Thank you! Your submission has been received </div>`;
      message = document.querySelector("form-done").innerHTML;
      console.log(message);
    })

    .catch(() => {
      let message = "";
      message += `
        <div> Oops! Something went wrong when submitting the form </div>`;
      message = document.querySelector("form-wrong").innerHTML;
      console.log(message);
    });
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#message").value = "";
}
