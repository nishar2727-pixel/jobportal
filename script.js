let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
    let job = searchInput.value.toLowerCase().trim();

    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function (card) {
        let jobText = card.innerText.toLowerCase();

        if (jobText.includes(job)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

let buttons = document.querySelectorAll(".viewBtn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let job = button.getAttribute("data-job");

        alert("You selected: " + job);

    });

});
let applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
    applicationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let qualification = document.getElementById("qualification").value;

        let application = {
            name: name,
            email: email,
            phone: phone,
            qualification: qualification
        };

        localStorage.setItem("application", JSON.stringify(application));

        alert("Application submitted successfully!");

        window.location.href = "My application.html";
    });
}

