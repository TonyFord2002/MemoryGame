//Start game button

//List instructions or skip instructions if playing again
class Player1{
    constructor(score, turn, choice1, choice2, win){
    this.score=score
    this.turn=true
    this.choice1=choice1
    this.choice2=choice2
    this.win=ture
}
}

class Player2{
    constructor(score, turn, choice1, choice2, win){
        this.score=score
        this.turn=true
        this.choice1=choice1
        this.choice2=choice2
        this.win=true
    }
}
//Make cards
const cards=[
{
    name: 'are',
    img: 'images/Are.png'},
{    
    name: 'are',
    img: 'images/Are.png'},
{
    name: 'bad',
    img: 'images/Bad.png'},
{    
    name: 'bad',
    img: 'images/Bad.png'},
{
    name: 'did',
    img: 'images/Did.png'},
{ 
    name: 'did',
    img: 'images/Did.png'},
{
    name: 'has',
    img: 'images/Has.png'},
{    
    name: 'has',
    img: 'images/Has.png'},
{
    name: 'have',
    img: 'images/Have.png'},
{
    name: 'have',
    img: 'images/Have.png'},
{
    name: 'like',
    img: 'images/Like.png'},
{
    name: 'like',
    img: 'images/Like.png'},
{
    name: 'now',
    img: 'images/Now.png'},
{
    name: 'now',
    img: 'images/Now.png'},
{
    name: 'out',
    img: 'images/Out.png'},
{
    name: 'out',
    img: 'images/Out.png'},
]

cards.sort(() => 0.5 - Math.random())



//Flip over cards once clicked
let myImage1a = document.querySelector('.word1a');
myImage1a.onclick = function() {
  let mySrc = myImage1a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage1a.setAttribute ('src','images/Are.png');
  } else {
    myImage1a.setAttribute ('src','images/Back.png');
  }
}

let myImage1b = document.querySelector('.word1b');
myImage1b.onclick = function() {
  let mySrc = myImage1b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage1b.setAttribute ('src','images/Are.png');
  } else {
    myImage1b.setAttribute ('src','images/Back.png');
  }
}

let myImage2a = document.querySelector('.word2a');
myImage2a.onclick = function() {
  let mySrc = myImage2a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage2a.setAttribute ('src','images/Bad.png');
  } else {
    myImage2a.setAttribute ('src','images/Back.png');
  }
}

let myImage2b = document.querySelector('.word2b');
myImage2b.onclick = function() {
  let mySrc = myImage2b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage2b.setAttribute ('src','images/Bad.png');
  } else {
    myImage2b.setAttribute ('src','images/Back.png');
  }
}

let myImage3a = document.querySelector('.word3a');
myImage3a.onclick = function() {
  let mySrc = myImage3a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage3a.setAttribute ('src','images/Did.png');
  } else {
    myImage3a.setAttribute ('src','images/Back.png');
  }
}

let myImage3b = document.querySelector('.word3b');
myImage3b.onclick = function() {
  let mySrc = myImage3b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage3b.setAttribute ('src','images/Did.png');
  } else {
    myImage3b.setAttribute ('src','images/Back.png');
  }
}

let myImage4a = document.querySelector('.word4a');
myImage4a.onclick = function() {
  let mySrc = myImage4a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage4a.setAttribute ('src','images/Has.png');
  } else {
    myImage4a.setAttribute ('src','images/Back.png');
  }
}

let myImage4b = document.querySelector('.word4b');
myImage4b.onclick = function() {
  let mySrc = myImage4b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage4b.setAttribute ('src','images/Has.png');
  } else {
    myImage4b.setAttribute ('src','images/Back.png');
  }
}

let myImage5a = document.querySelector('.word5a');
myImage5a.onclick = function() {
  let mySrc = myImage5a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage5a.setAttribute ('src','images/Have.png');
  } else {
    myImage5a.setAttribute ('src','images/Back.png');
  }
}

let myImage5b = document.querySelector('.word5b');
myImage5b.onclick = function() {
  let mySrc = myImage5b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage5b.setAttribute ('src','images/Have.png');
  } else {
    myImage5b.setAttribute ('src','images/Back.png');
  }
}

let myImage6a = document.querySelector('.word6a');
myImage6a.onclick = function() {
  let mySrc = myImage6a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage6a.setAttribute ('src','images/Like.png');
  } else {
    myImage6a.setAttribute ('src','images/Back.png');
  }
}

let myImage6b = document.querySelector('.word6b');
myImage6b.onclick = function() {
  let mySrc = myImage6b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage6b.setAttribute ('src','images/Like.png');
  } else {
    myImage6b.setAttribute ('src','images/Back.png');
  }
}

let myImage7a = document.querySelector('.word7a');
myImage7a.onclick = function() {
  let mySrc = myImage7a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage7a.setAttribute ('src','images/Now.png');
  } else {
    myImage7a.setAttribute ('src','images/Back.png');
  }
}

let myImage7b = document.querySelector('.word7b');
myImage7b.onclick = function() {
  let mySrc = myImage7b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage7b.setAttribute ('src','images/Now.png');
  } else {
    myImage7b.setAttribute ('src','images/Back.png');
  }
}

let myImage8a = document.querySelector('.word8a');
myImage8a.onclick = function() {
  let mySrc = myImage8a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage8a.setAttribute ('src','images/Out.png');
  } else {
    myImage8a.setAttribute ('src','images/Back.png');
  }
}

let myImage8b = document.querySelector('.word8b');
myImage8b.onclick = function() {
  let mySrc = myImage8b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage8b.setAttribute ('src','images/Out.png');
  } else {
    myImage8b.setAttribute ('src','images/Back.png');
  }
}

let first = new Player1
let second = new Player2
let cardsChosen =[]
let cardsWon = []

//Compare the two cards and check for a match
function comparecards(choice1, choice2){
    while(first.turn === true){
    if(choice1===choice2){
        
    }
}
}


//If a match increase score on that player and go again


//If not a match then turn over cards its the other players turn


//If all cards are gone compare scores and declare winner


//Ask to play again