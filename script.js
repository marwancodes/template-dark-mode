const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//light and dark mode images
function imageMode(color){   //this is another and short way to change images, and you can write what you want : imageMode('blabla');
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function test(num1,num2){
    nav.style.backgroundColor = `rgb(${num1} /50%)`;
    textBox.style.backgroundColor = `rgb(${num2} /50%)`;
}

// Dark Mode Style
function darkMode(){
    test('0 0 0','255 255 255');
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageMode('dark');
    
}

// Light Mode Style
function lightMode(){
    test('255 255 255','0 0 0');
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun'); //had replace bhal (add et remove)
    
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme' , 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme' , 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme (bach nkhaliw dark mode fi local storage)
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}