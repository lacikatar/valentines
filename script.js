const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messageBox = document.getElementById('message-box');
const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');


const wrongMessages = [
    "Wrong choice pookie!",
    "Don't make me cry babyyy",
    "Try out the other button.",
    "Don't do this to me :((",
    "Look at the other button!",
    "I'm going to cry..."
];

let yesScale = 1; 


function moveButton() {
   
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

   
    const randomX = Math.floor(Math.random() * (maxWidth - 20));
    const randomY = Math.floor(Math.random() * (maxHeight - 20));

    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    
    yesScale += 0.3; 
    yesBtn.style.transform = `scale(${yesScale})`;

  
    const randomIndex = Math.floor(Math.random() * wrongMessages.length);
    messageBox.innerText = wrongMessages[randomIndex];
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton); 


yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none'; 
    successContainer.classList.remove('hidden'); 
});