import { getData } from "./util.js";

const viewVehicleSection = document.getElementById("viewVehicleSection");

const init = async () => {
    const data = getData("db");
    const container = viewVehicleSection.childNodes[1];

    for (let i = 0; i < data.length; i++) {
        const viewContent = document.createElement("div");
        const input = data[i];
        viewContent.className = "viewContent";
        viewContent.innerHTML = `
    
        <h4 class="title">Seller's Information</h4>
        <h4 class="title">Vehicle's Information</h4>
        <div class="information">
            <div><span>First Name: </span>${input.firstName}</div>
            <div><span>Last Name: </span>${input.lastName}</div>
            <div><span>Address: </span>${input.address}</div>
            <div><span>City: </span>${input.city}</div>
            <div><span>Province: </span>${input.province.toUpperCase()}</div>
            <div><span>Postal Code: </span>${input.postal}</div>
            <div><span>Phone Number: </span>${input.phone}</div>
            <div><span>Email: </span>${input.email}</div>
        </div>
    
        <div class="information">
            <div><span>Make: </span>${input.make}</div>
            <div><span>Model: </span>${input.model}</div>
            <div><span>Year: </span>${input.year}</div>
            <div><span>JD Power: </span><a href="http://www.jdpower.com/cars/${
                input.year
            }/${input.make}/${input.model}">http://www.jdpower.com/cars/${
            input.year
        }/${input.make}/${input.model}</a></div>
        </div>`;
        container.append(viewContent);
    }
};

window.addEventListener("DOMContentLoaded", init);
