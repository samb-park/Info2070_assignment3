import { setData, validInput } from "./util.js";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postal = document.getElementById("postal");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const make = document.getElementById("make");
const model = document.getElementById("model");
const year = document.getElementById("year");
const error = document.querySelector(".error");
const addVehicleForm = document.getElementById("addVehicleForm");

addVehicleForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let errorMessage = "";

    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        province: province.value,
        postal: postal.value,
        phone: phone.value,
        email: email.value,
        make: make.value,
        model: model.value,
        year: year.value,
    };
    errorMessage = validInput(data);
    error.innerHTML = errorMessage;

    if (errorMessage === "") {
        const id = setData("db", data);
        window.location.href = `/Info2070_assignment3/enteredVehicle.html?id=${id}`;
    }
});
