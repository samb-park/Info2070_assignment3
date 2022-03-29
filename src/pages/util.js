const getData = (id) => {
    let dataJson = localStorage.getItem(id);
    let data = [];

    if (dataJson !== null) {
        data = JSON.parse(dataJson);
    }

    return data;
};

const setData = (id, newData) => {
    const data = getData(id);

    localStorage.setItem(id, JSON.stringify([...data, newData]));

    return data.length;
};

const validInput = (data) => {
    let errorMessage = "";

    if (data.firstName === "") {
        errorMessage += "First name is required<br>";
    }
    if (data.lastName === "") {
        errorMessage += "Last name is required<br>";
    }
    if (data.address === "") {
        errorMessage += "Address is required<br>";
    }
    if (data.city === "") {
        errorMessage += "City is required<br>";
    }
    if (data.email === "") {
        errorMessage += "Email address is required<br>";
    }

    const postalCodeRegex = new RegExp(
        /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i
    );
    if (data.postal === "") {
        errorMessage += "Postal code is required<br>";
    } else if (!postalCodeRegex.test(data.postal.toUpperCase())) {
        errorMessage += "Postal code is not valid<br>";
    }
    const phoneCodeRegex = new RegExp(
        /^([(]\d{3}[)](\d{3})-(\d{4}))|((\d{3})-(\d{3})-(\d{4}))$/i
    );
    if (data.phone === "") {
        errorMessage += "Phone is required<br>";
    } else if (!phoneCodeRegex.test(data.phone)) {
        errorMessage += "Phone is not valid<br>";
    }

    if (data.make === "") {
        errorMessage += "Make is required<br>";
    }
    const yearCodeRegex = new RegExp(/^([0-9]{4})$/);
    if (data.year === "") {
        errorMessage += "Year is required<br>";
    } else if (!yearCodeRegex.test(data.year)) {
        errorMessage += "Year is not valid<br>";
    }
    if (data.model === "") {
        errorMessage += "Model is required<br>";
    }

    return errorMessage;
};

export { getData, setData, validInput };
