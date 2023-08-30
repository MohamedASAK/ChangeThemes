let bulbText = document.querySelector('.bulb label')
let input = document.querySelectorAll("input");  
let content = document.querySelectorAll("div");
let button = document.querySelector("button");
let body = document.querySelector("body");
let bulb = document.querySelector("i");

bulb.addEventListener("click",()=>{
    if(!body.classList.contains("dark")) {
        bulb.classList.replace("fa-solid","fa-regular");
        body.classList = ("dark"); 
        bulbText.innerText = 'Light Mode';
        body.style = '.dark';
        for (let i = 0; i < content.length; i++) {
            content[i].style = ".dark";
        }
    }
    else{
        bulb.classList.replace("fa-regular","fa-solid");
        body.classList = ("light");
        bulbText.innerText = 'Dark Mode';
        body.style = '.light';
        for (let i = 0; i < content.length; i++) {
            content[i].style = ".dark";
        }
    }
}
);

button.addEventListener('click',()=>{
    let FontColor = input[0].value;
    let BackgroundColor = input[1].value;
    let ContentBackgroundColor = input[2].value;
    body.style.color = FontColor;
    body.style.backgroundColor = BackgroundColor;
    for (let i = 0; i < content.length; i++) {
        content[i].style.backgroundColor = ContentBackgroundColor;
    }
}
);