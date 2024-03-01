document.getElementById("mobile-menu").style.display = "none";
document.getElementById("loading-button").style.display = "none";
document.getElementById("modal-div").style.display = "none";

// ######################################

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    let menu = document.getElementById("mobile-menu");

    if (menu.style.display == "flex") {
      document.getElementById("mobile-menu").style.display = "none";
      return;
    }
    document.getElementById("mobile-menu").style.display = "flex";
  });

document.getElementById("modal-button").addEventListener("click", function () {
  document.getElementById("modal-div").style.display = "none";
});

// ######################################
const emailServiceID = "service_1vjk51g";
const emailTemplateID = "template_uti2p5b";

emailjs.init({ publicKey: "YOx1yuXOyo7c-p5Nm" });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("send-button").style.display = "none";
    document.getElementById("loading-button").style.display = "flex";

    emailjs.sendForm(emailServiceID, emailTemplateID, this).then(
      () => {
        console.log("SUCCESS!");
        document.getElementById("loading-button").style.display = "none";
        document.getElementById("send-button").style.display = "inline-block";
        document.getElementById("modal-div").style.display = "flex";
      },
      (error) => {
        console.log("FAILED...", error);
        document.getElementById("loading-button").style.display = "none";
        document.getElementById("send-button").style.display = "inline-block";
        document.getElementById("modal-div").style.display = "flex";
      },
    );
  });
