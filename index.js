function toggleMenu() {
    let menu = document.getElementById("mobile-menu");

    if (menu.style.display == "flex") {
        document.getElementById("mobile-menu").style.display = "none";
        return;
    }
    document.getElementById("mobile-menu").style.display = "flex";
}

document.getElementById("mobile-menu").style.display = "none";

document
    .getElementById("mobile-menu-btn")
    .addEventListener("click", toggleMenu);

// ######################################
const emailServiceID = "service_wrah3aq";
const emailTemplateID = "template_i31zycr";

emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });

window.onload = function() {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm(emailServiceID, emailTemplateID, this).then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error);
                },
            );
        });
};
