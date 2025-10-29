const text = document.getElementById("text");
const button = document.getElementById("myButton");


// adding event listner for click
button.addEventListener("click", function() {
    text.textContent= "this is the result";});


    // creating example
   const createbutton = document.getElementById("createButton");
   const container = document.getElementById("container");

    createbutton.addEventListener("click", function() {
        const newparagraph = document.createElement("p");
        newparagraph.textContent = "this is a new paragraph i just created";
        container.appendChild(newparagraph);
    });

// changing image on button click
function changeImage() {
    const img = document.getElementById("image");
    img.setAttribute("src", "images/qodbyte.jpg");
    img.setAttribute("width", "200");
}


const changeImageBtn = document.getElementById("changeImageBtn");
changeImageBtn.addEventListener("click", changeImage);
