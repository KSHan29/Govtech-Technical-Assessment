const API_ROOT_URL = "http://127.0.0.1:5000/application";

const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");

function addClick() {
  const num1Element = document.querySelector(".num1");
  const num2Element = document.querySelector(".num2");
  const num1 = num1Element.value == "" ? 0 : num1Element.value;
  const num2 = num2Element.value == "" ? 0 : num2Element.value;
  num1Element.value = "";
  num2Element.value = "";

  let data = {
    num1: num1,
    num2: num2,
    op: "+",
  };

  fetch(`${API_ROOT_URL}/x-www-form-urlencoded`, {
    method: "POST",
    body: new URLSearchParams(data),
    mode: "cors",
  })
    .then((response) => {
      res = response.json();
      return res;
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".display").textContent = `${data}`;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function subtractClick() {
  const num1Element = document.querySelector(".num1");
  const num2Element = document.querySelector(".num2");
  const num1 = num1Element.value == "" ? 0 : num1Element.value;
  const num2 = num2Element.value == "" ? 0 : num2Element.value;
  num1Element.value = "";
  num2Element.value = "";

  let data = {
    num1: num1,
    num2: num2,
    op: "-",
  };

  fetch(`${API_ROOT_URL}/x-www-form-urlencoded`, {
    method: "POST",
    body: new URLSearchParams(data),
    mode: "cors",
  })
    .then((response) => {
      res = response.json();
      return res;
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".display").textContent = `${data}`;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

addButton.addEventListener("click", addClick);
subtractButton.addEventListener("click", subtractClick);
