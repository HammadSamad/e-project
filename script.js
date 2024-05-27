// java script for responsive navbar start //

// let menuBtn = document.querySelector(".menu-btn");
// let navbigation = document.querySelector(".navbar");

// menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navbigation.classList.toggle("navbar");
// });

// java script for responsive navbar end //

// java script for responsive slider start //

const img_slider_elements = document.querySelectorAll(".img-caroussel");
const arrows_elts = document.querySelectorAll(".arrows i");
const round_elts = document.querySelectorAll(".round");

let current_img = 1;

round_elts.forEach((round_elt) => {
  round_elt.addEventListener("click", change_img_slider);
});

arrows_elts.forEach((arrow) => {
  arrow.addEventListener("click", change_img_slider);
});

function change_img_slider(e) {
  let index_img_to_show = null;

  if (e.currentTarget.id === "previous") {
    index_img_to_show =
      parseInt(current_img) - 1 < 1
        ? img_slider_elements.length
        : parseInt(current_img) - 1;
  } else if (e.currentTarget.classList.contains("round")) {
    index_img_to_show = e.currentTarget.getAttribute("data-img");
  } else {
    index_img_to_show =
      parseInt(current_img) + 1 > img_slider_elements.length
        ? 1
        : parseInt(current_img) + 1;
  }

  img_slider_elements.forEach((img) => {
    img.classList.remove("active");

    if (img.getAttribute("data-img") == index_img_to_show) {
      current_img = img.getAttribute("data-img");

      img.classList.add("active");
    }
  });

  round_elts.forEach((round_elt) => {
    round_elt.classList.remove("active");

    if (round_elt.getAttribute("data-img") == index_img_to_show) {
      round_elt.classList.add("active");
    }
  });
}

// java script for responsive slider end //

// Contact Us Regex start

let cBtn = document.getElementById("cBtn");

cBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let cName = document.getElementById("cName").value;
  let cEmail = document.getElementById("cEmail").value;
  let cSubject = document.getElementById("cSubject").value;
  let cMessage = document.getElementById("cMessage").value;

  //  Error Messages
  let cNameError = document.getElementById("cNameError");
  let cEmailError = document.getElementById("cEmailError");
  let cSubjectError = document.getElementById("cSubjectError");

  // Regex
  let regName = /^[A-z]+$/;
  let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //Validation Variables

  let nameValid = true;
  let emailValid = true;
  let subjectValid = true;

  //For Name

  if (cName == "") {
    cNameError.innerHTML = "Name is required";
    nameValid = false;
  } else if (!regName.test(cName)) {
    cNameError.innerHTML = "Only Alphabets are allowed in Name Field";
    nameValid = false;
  } else {
    cNameError.innerHTML = "";
    nameValid = true;
  }

  //For Email

  if (cEmail == "") {
    cEmailError.innerHTML = "Email is required";
    emailValid = false;
  } else if (!regEmail.test(cEmail)) {
    cEmailError.innerHTML = "Email is not Valid! Please provide valid Email";
    emailValid = false;
  } else {
    cEmailError.innerHTML = "";
    emailValid = true;
  }

  //For Subject

  if (cSubject == "") {
    cSubjectError.innerHTML = "Subject is required";
    subjectValid = false;
  } else {
    cSubjectError.innerHTML = "";
    subjectValid = true;
  }

  if (nameValid && emailValid && subjectValid) {
    let successMessage = document.getElementById("successMessage");

    successMessage.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Thank you for your submission!</strong> We have recieved your data we will contact you soon.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;

    document.getElementById("cMessage").value = "";
    document.getElementById("cName").value = "";
    document.getElementById("cEmail").value = "";
    document.getElementById("cSubject").value = "";
  }

});

// Contact Us Regex end
