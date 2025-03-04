document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.querySelector("input[type='email']").value;
        const phone = document.querySelector("input[type='number']").value;
        const name = document.querySelector("input[type='text']").value;
        const message = document.querySelector("textarea").value;
        
        if (!email || !phone || !name || !message) {
            alert("Please fill in all the details.");
            return;
        }
        
        const whatsappMessage = `Hello, I am ${name}. Email : ${email} and Contact Number : ${phone}. Message: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=919886330317&text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, "_blank");
        
        // Show submitted message with blue tick
        const submitButton = document.querySelector(".submit-button");
        submitButton.value = "✔ Submitted";
        submitButton.style.color = "white";
        submitButton.style.backgroundColor = "#25D366"; // WhatsApp green
        submitButton.disabled = true;
    });

    // Call Button Click Event
    document.querySelector(".call").addEventListener("click", function () {
        window.location.href = "tel:+919886330317";
    });
});
