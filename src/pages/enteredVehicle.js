import { getData } from "./util.js";

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
const jdPower = document.getElementById("jdPower");

const init = async () => {
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let id = param.get("id");
    let data = getData("db")[id];

    firstName.value = data.firstName;
    lastName.value = data.lastName;
    address.value = data.address;
    city.value = data.city;
    province.value = data.province;
    postal.value = data.postal;
    phone.value = data.phone;
    email.value = data.email;
    make.value = data.make;
    model.value = data.model;
    year.value = data.year;
    make.value = data.make;
    jdPower.textContent = `http://www.jdpower.com/cars/${year.value}/${make.value}/${model.value}`;
    jdPower.href = `http://www.jdpower.com/cars/${year.value}/${make.value}/${model.value}`;

    console.log(data);
};

window.addEventListener("DOMContentLoaded", init);
