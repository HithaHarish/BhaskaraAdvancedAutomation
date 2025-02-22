document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#main_container");
    const submitButton = document.querySelector(".submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect input values
        let requirement = document.querySelector("input[name='requirement']:checked");
        let requirementsText = document.querySelector("textarea").value.trim();
        let firstName = document.getElementById("first-name").value.trim();
        let lastName = document.getElementById("last-name").value.trim();
        let countryCode = document.getElementById("country-code").value;
        let phoneNumber = document.getElementById("phone-no").value.trim();
        let email = document.getElementById("email").value.trim();
        let addressLine1 = document.getElementById("address-line1").value.trim();
        let addressLine2 = document.getElementById("address-line2").value.trim();
        let city = document.getElementById("city").value.trim();
        let state = document.getElementById("state").value.trim();
        let country = document.getElementById("country").value.trim();

        // Combine country code with phone number
        let fullPhoneNumber = countryCode + phoneNumber;

        // Validation
        if (!requirement) {
            alert("Select your Requirements");
            return;
        }
        if (firstName === "") {
            alert("Enter your first name.");
            return;
        }
        if (!/^[A-Za-z ]+$/.test(firstName) || !/^[A-Za-z ]*$/.test(lastName)) {
            alert("Name should contain only alphabets and spaces.");
            return;
        }
        if (!/^[1-9]\d{9}$/.test(phoneNumber)) {
            alert("Phone number must be exactly 10 digits and cannot start with 0.");
            return;
        }        
        if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (addressLine1 === "" || city === "" || state === "" || country === "") {
            alert("Complete all address fields.");
            return;
        }

        // Store form data (for further processing or API submission)
        let formData = {
            requirement: requirement.nextElementSibling.innerText,
            requirementsText: requirementsText,
            name: firstName + " " + lastName,
            phone: fullPhoneNumber,
            email: email,
            address: {
                line1: addressLine1,
                line2: addressLine2,
                city: city,
                state: state,
                country: country
            }
        };

        console.log("Form Data:", formData);

        // Simulate form submission
        alert("Form submitted successfully!");

    });
});
