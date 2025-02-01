let btn1 = document.getElementById("mybtn1");
let btn2 =  document.getElementById("mybtn2");
let copyDiv = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValues = () => {
    let myHexValue = "0123456789abcdef";
    let colors = "#"    
    for(let i=0 ; i<6; i++)
        {
            colors = colors + (myHexValue[Math.floor(Math.random() * 16)]);
        }
        return colors;
}

const handleButton1 = () => {    
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2} )`; 
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} ,${rgb2})` ;
};

const handleButton2 = () => {    
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2} )`; 
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2})` ;
};

const copy = () => {
 navigator.clipboard.writeText(copyDiv.innerText);
 
}

btn1.addEventListener('click' , handleButton1);
btn2.addEventListener('click' , handleButton2);
copyDiv.addEventListener('click', copy);
