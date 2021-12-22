/* ----------------------------------------------------------------------------------------------------------------------- */
const div = document.querySelector(".area");
const textarea = document.querySelector(".textar");

function getAll () {
    function getStyle() {
        let selectstyle = document.getElementById("selectstyle");
        let value = selectstyle.value;
        textarea.style.borderStyle = value;
    }
    
    function getColor() {
        let selectcolor = document.getElementById("selectcolor");
        let value = selectcolor.value;
        textarea.style.borderColor = value;
    }
    
    function getWidth() {
        let selectwidth= document.getElementById("selectwidth");
        let value = selectwidth.value;
        textarea.style.borderWidth = value;
    }
    return getStyle(), getColor(), getWidth()
}

/* ------------------------------------------------------------------------------------------------------------------------ */
function plusFontSize() {
    textarea.style.fontSize = parseInt(textarea.style.fontSize) + 1 + 'px';
    } 
function minusFontSize() {
    textarea.style.fontSize = parseInt(textarea.style.fontSize) - 1 + 'px';
    } 
    
/* ------------------------------------------------------------------------------------------------------------------------ */

function plusRadius() {
    textarea.style.borderRadius = parseInt(textarea.style.borderRadius) + 3 + 'px';
    } 
function minusRadius() {
    textarea.style.borderRadius = parseInt(textarea.style.borderRadius) - 3 + 'px';
    } 

    /* ------------------------------------------------------------------------------------------------------------------------ */
const inputColor = document.querySelector(".inCol");
function colorPicker () {
    inputColor.addEventListener("input", updateFirst);
}
colorPicker();

function updateFirst(event) {
    textarea.style.backgroundColor = event.target.value;
}

/* ------------------------------------------------------------------------------------------- */


/* ------------------------------------------------------------------------------------------------------------------------ */
let btnColors = document.querySelectorAll(".grid-item");
function colorP (a) {
    textarea.style.backgroundColor = btnColors[a].value;
}

/* ------------------------------------------------------------------------------------------------------------------------ */

let colorsText = ['rebeccapurple', 'green', '#605326', 'red', '#fe12fe', 'orange', '#5951D2', '#68991E', 'black', 'white', '#58284F', '#5EFF1A', '#FE4646', '#4D4D4D', '#58DDFE', '#EDF2CA', '#B62525', '#E0CCFF', '#D95959', '#D4E1F3'];

function colorsT (a) {
    textarea.style.color = colorsText[a];
}

/* ---------------------------------------------------------------------------------------------------------------------------- */

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function generateHex() {
    let hexColor = '#';
    for (let i=0; i <6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor;
}

function HexText () {
    let hexColor = generateHex();
    textarea.style.color =  hexColor;
}


function HexBackg () {
    let hexColor = generateHex();
    textarea.style.backgroundColor =  hexColor;
}

