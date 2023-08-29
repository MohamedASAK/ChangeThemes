let button = document.querySelector("button");
let body = document.querySelector("body");
let bulb = document.querySelector("i");
let bulbText = document.querySelector('.bulb label')

bulb.addEventListener("click",()=>{
    if(!body.classList.contains("dark")) {
        bulb.classList.replace("fa-solid","fa-regular");
        body.classList = ("dark"); 
        bulbText.innerText = 'Light Mode';
        body.style = '.dark';
    }
    else{
        bulb.classList.replace("fa-regular","fa-solid");
        body.classList = ("light");
        bulbText.innerText = 'Dark Mode';
        body.style = '.light';
    }
}
);

let input = document.querySelectorAll("input");    
button.addEventListener('click',()=>{
    let FontColor = input[0].value;
    let BackgroundColor = input[1].value;
    body.style.backgroundColor = BackgroundColor;
    body.style.color = FontColor;
}
);