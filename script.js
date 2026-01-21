
const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");




const storyObj = Object();

storyObj.scary = {}
storyObj.scary.story = "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.";
storyObj.scary.borderColor = "#ee4b2b";

storyObj.funny = {}
storyObj.funny.story = "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.";
storyObj.funny.borderColor = "#f1be32";

storyObj.adventure = {}
storyObj.adventure.story = "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.";
storyObj.adventure.borderColor = "#acd157";



const displayStory = (genre) => {
    if(storyObj.hasOwnProperty(genre)){
        resultParagraph.textContent = storyObj[genre]["story"];
        storyContainer.style.borderColor = storyObj[genre]["borderColor"];
        storyContainer.style.borderStyle = "solid";
        storyContainer.style.borderWidth = "5px"
   
    } 
}

displayStory("adventure");


scaryStoryBtn.addEventListener("click", () => displayStory());
