function generateSquare (){
    const square = document.createElement("article");
    square.classList.add("square-class");
    return square;
}

const mainContent = document.querySelector(".table");

const play = document.querySelector("button");

play.addEventListener("click", function(){
    for (let i = 1 ; i <= 100 ; i++){
        const squareElement = generateSquare();
        const squareContent = i;
        mainContent.appendChild(squareElement);
        squareElement.innerHTML += `<span> ${squareContent}</span>`;
        squareElement.addEventListener("click", function(){
            squareElement.classList.toggle("bg-blue")
            console.log(squareContent);
        })
    }
})




