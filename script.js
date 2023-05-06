var queryNo = 1;

var type = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Programmer", "Software Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// const image = document.querySelector(".image");

// if (window.screen.width < 900) {
//     image.style.display = "none";
// } else {
//     image.style.display = "";
// }

const form = document.querySelector('.needs-validation');
// const contact = document.querySelector('#pills-contact');
// const home = document.querySelector('#pills-home');

// Loop over them and prevent submission
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        alert("invalid form!");
        return;
    }
    
    alert("successfully send");
    sendMail(event,queryNo);
    queryNo++;

}, false);

const sendMail = (e, queryNo) => {
    // using localStorage for saving queries
    const name = e.target[0].value,
          email = e.target[1].value,
          subject = e.target[2].value,
          message = e.target[3].value;
    // e.preventDefault();

    // setting keys
    let nameKey = `name${queryNo}`;
    let emailKey = `email${queryNo}`;
    let subjectKey = `subject${queryNo}`;
    let messageKey = `message${queryNo}`;

    // saving to localStroage
    localStorage.setItem(nameKey,name);
    localStorage.setItem(emailKey,email);
    localStorage.setItem(subjectKey,subject);
    localStorage.setItem(messageKey,message);
}