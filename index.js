const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstname");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

console.log(profileImage);

const isWizard = confirm("Are you a wizard?");
console.log(isWizard);

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
}
else {

    console.log("Access to Hogwarts denied!")
    profileImage.src = "images/image2.jpg"
    firstNameSpan.innerHTML = "Dudley Dursley"
    ageSpan.innerHTML = "12"
    statusSpan.innerHTML = "Muggle"

}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg"; 
    firstNameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = 25;
    statusSpan.innerHTML = "Tomb Raider";
});