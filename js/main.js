const roles = [
    "Python Developer",
    "Aspiring Data Analyst",
    "AI-ML Enthusiast",
    "Problem Solver"
];

let index = 0;
const typingText = document.getElementById("typing-text");
function changeRole(){
    typingText.textContent = roles[index];
    index++;
    if(index >= roles.length){
        index = 0;
    }
}

changeRole();

setInterval(changeRole,2000);


// Scroll to top button
const scrollBtn = document.getElementById(
    "scrollTopBtn"
);

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 300){

        scrollBtn.style.display =
        "block";

    }
    else{

        scrollBtn.style.display =
        "none";
    }

});

scrollBtn.addEventListener(
"click",
() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
