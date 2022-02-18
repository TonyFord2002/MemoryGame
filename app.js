//Start game button
function instructions(){
    alert('Hello! This a memory game played with two players.')
    alert('Player 1 will go first and pick two cards. If they match Player 1 will go again.')
    alert("If they don't then it is Player 2's turn to pick two cards.")
    alert("The game ends when all cards have been matched up.")
}
var name1
var name2

var btn = document.getElementById('startGame')
btn.addEventListener('click', instructions)

function getName() {
    do {
      name1 = prompt("Player 1 please enter your name");
    }
    while (name1.length < 2);
    document.getElementById("player1").innerHTML = name1;
  }
  
  getName();


function getName2() {
    do {
      name2 = prompt("Player 2 please enter your name");
    }
    while (name2.length < 3);
    document.getElementById("player2").innerHTML = name2;
  }
  
  getName2();
  



//List instructions or skip instructions if playing again
class Player1{
    constructor(score, turn, win){
    this.score=score
    this.turn=turn
    this.win=win
}
}

class Player2{
    constructor(score, turn, win){
        this.score=score
        this.turn=turn
        this.win=win
    }
}
//Make cards
const cardsArray=[
{
    name: 'are',
    img: 'images/Are.png',
    inPlay: false,
    place:""},
{    
    name: 'are',
    img: 'images/Are.png',
    inPlay: false,
    place:""},
{
    name: 'bad',
    img: 'images/Bad.png',
    inPlay: false,
    place:""},
{    
    name: 'bad',
    img: 'images/Bad.png',
    inPlay: false,
    place:""},
{
    name: 'did',
    img: 'images/Did.png',
    inPlay: false,
    place:""},
{ 
    name: 'did',
    img: 'images/Did.png',
    inPlay: false,
    place:""},
{
    name: 'has',
    img: 'images/Has.png',
    inPlay: false,
    place:""},
{    
    name: 'has',
    img: 'images/Has.png',
    inPlay: false,
    place:""},
{
    name: 'have',
    img: 'images/Have.png',
    inPlay: false,
    place:""},
{
    name: 'have',
    img: 'images/Have.png',
    inPlay: false,
    place:""},
{
    name: 'like',
    img: 'images/Like.png',
    inPlay: false,
    place:""},
{
    name: 'like',
    img: 'images/Like.png',
    inPlay: false,
    place:""},
    {
    name: 'now',
    img: 'images/Now.png',
    inPlay: false,
    place:""},
{
    name: 'now',
    img: 'images/Now.png',
    inPlay: false,
    place:""},
{
    name: 'out',
    img: 'images/Out.png',
    inPlay: false,
    place:""},
    {
        name: 'out',
    img: 'images/Out.png',
    inPlay: false,
    place:""}
]

let first = new Player1(0, true, false)
let second = new Player2(0, false, false)
let cardsWon = []
let cardsChosen = []
let place1=''
let place2=''

function randomCards() {
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cardsArray[i];
        cardsArray[i] = cardsArray[j];
        cardsArray[j] = temp;
    }
    return cardsArray
}

randomCards()


let myImage1a = document.querySelector('.word1a');
myImage1a.onclick = function() {
        let mySrc = myImage1a.getAttribute('src');
        if(mySrc === 'images/Back.png') {
    myImage1a.setAttribute('src', cardsArray[0].img);
    cardsArray[0].place = '.word1a';
    cardsArray[0].inPlay = true;
    cardsChosen.push(cardsArray[0])
    compareCards();
}
}

let myImage1b = document.querySelector('.word1b');
myImage1b.onclick = function() {
    let mySrc = myImage1b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage1b.setAttribute ('src', cardsArray[1].img);
        cardsArray[1].place = '.word1b';
        cardsArray[1].inPlay = true;
        cardsChosen.push(cardsArray[1])
        compareCards();
    } 
}

let myImage2a = document.querySelector('.word2a');
myImage2a.onclick = function() {
    let mySrc = myImage2a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage2a.setAttribute ('src',cardsArray[2].img);
        cardsArray[2].place = '.word2a';
        cardsArray[2].inPlay = true;
        cardsChosen.push(cardsArray[2])
        compareCards();
    } 
}

let myImage2b = document.querySelector('.word2b');
myImage2b.onclick = function() {
    let mySrc = myImage2b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage2b.setAttribute ('src',cardsArray[3].img);
    cardsArray[3].place = '.word2b';
    cardsArray[3].inPlay = true;
    cardsChosen.push(cardsArray[3])
    compareCards();
  } 
}

let myImage3a = document.querySelector('.word3a');
myImage3a.onclick = function() {
    let mySrc = myImage3a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage3a.setAttribute ('src',cardsArray[4].img);
        cardsArray[4].place = '.word3a';
        cardsArray[4].inPlay = true;
        cardsChosen.push(cardsArray[4])
        compareCards();
    } 
}

let myImage3b = document.querySelector('.word3b');
myImage3b.onclick = function() {
    let mySrc = myImage3b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage3b.setAttribute ('src',cardsArray[5].img);
        cardsArray[5].place = '.word3b';
        cardsArray[5].inPlay = true;
        cardsChosen.push(cardsArray[5])
        compareCards();
  } 
}

let myImage4a = document.querySelector('.word4a');
myImage4a.onclick = function() {
    let mySrc = myImage4a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage4a.setAttribute ('src',cardsArray[6].img);
        cardsArray[6].place = '.word4a';
        cardsArray[6].inPlay = true;
        cardsChosen.push(cardsArray[6])
        compareCards();
    } 
}

let myImage4b = document.querySelector('.word4b');
myImage4b.onclick = function() {
    let mySrc = myImage4b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage4b.setAttribute ('src',cardsArray[7].img);
        cardsArray[7].place = '.word4b';
        cardsArray[7].inPlay = true;
        cardsChosen.push(cardsArray[7])
    compareCards();
} 
}

let myImage5a = document.querySelector('.word5a');
myImage5a.onclick = function() {
    let mySrc = myImage5a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
      myImage5a.setAttribute ('src',cardsArray[8].img);
      cardsArray[8].place = '.word5a';
      cardsArray[8].inPlay = true;
      cardsChosen.push(cardsArray[8])
      compareCards();
    } 
}

let myImage5b = document.querySelector('.word5b');
myImage5b.onclick = function() {
    let mySrc = myImage5b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
    myImage5b.setAttribute ('src',cardsArray[9].img);
    cardsArray[9].place = '.word5b';
    cardsArray[9].inPlay = true;
    cardsChosen.push(cardsArray[9])
    compareCards();
  } 
}

let myImage6a = document.querySelector('.word6a');
myImage6a.onclick = function() {
    let mySrc = myImage6a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage6a.setAttribute ('src',cardsArray[10].img);
        cardsArray[10].place = '.word6a';
        cardsArray[10].inPlay = true;
        cardsChosen.push(cardsArray[10])
        compareCards();
    } 
}

let myImage6b = document.querySelector('.word6b');
myImage6b.onclick = function() {
  let mySrc = myImage6b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage6b.setAttribute ('src',cardsArray[11].img);
    cardsArray[11].place = '.word6b';
    cardsArray[11].inPlay = true;
    cardsChosen.push(cardsArray[11])
    compareCards();
} 
}

let myImage7a = document.querySelector('.word7a');
myImage7a.onclick = function() {
  let mySrc = myImage7a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage7a.setAttribute ('src',cardsArray[12].img);
    cardsArray[12].place = '.word7a';
    cardsArray[12].inPlay = true;
    cardsChosen.push(cardsArray[12])
    compareCards();
  } 
}

let myImage7b = document.querySelector('.word7b');
myImage7b.onclick = function() {
  let mySrc = myImage7b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
      myImage7b.setAttribute ('src',cardsArray[13].img);
      cardsArray[13].place = '.word7b';
      cardsArray[13].inPlay = true;
      cardsChosen.push(cardsArray[13])
      compareCards();
  } 
}

let myImage8a = document.querySelector('.word8a');
myImage8a.onclick = function() {
  let mySrc = myImage8a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage8a.setAttribute ('src',cardsArray[14].img);
    cardsArray[14].place = '.word8a';
    cardsArray[14].inPlay = true;
    cardsChosen.push(cardsArray[14])
    compareCards();
} 
}

let myImage8b = document.querySelector('.word8b');
myImage8b.onclick = function() {
  let mySrc = myImage8b.getAttribute('src'); 
  if(mySrc === 'images/Back.png') {
    myImage8b.setAttribute ('src',cardsArray[15].img);
    cardsArray[15].place = '.word8b';
    cardsArray[15].inPlay = true;
    cardsChosen.push(cardsArray[15])
    compareCards();
} 
}


    //Compare the two cards and check for a match
    function compareCards(){
        while(first.turn === true && cardsChosen.length === 2){
          if(cardsChosen[0].name === cardsChosen[1].name){
            console.log('player1')
            first.score++
            cardsChosen = []
            document.querySelector('#result1').innerHTML = `${first.score}`
            cardsWon.push(cardsChosen[0])
            cardsWon.push(cardsChosen[1])
            setTimeOut(winner, 500)

        }else{
            console.log('p1')
            setTimeout(turnCardsBackOver, 1500)
            cardsChosen[0].inPlay = false
            cardsChosen[1].inPlay = false
            place1 = cardsChosen[0].place
            place2 = cardsChosen[1].place
            cardsChosen =[]
            first.turn = false
            second.turn = true
        }
}

while(second.turn === true && cardsChosen.length === 2){
    
      if(cardsChosen[0].name === cardsChosen[1].name){
        console.log('player2')
        second.score++
        cardsChosen = []
        document.querySelector('#result2').innerHTML = `${second.score}`
        cardsWon.push(cardsChosen[0])
        cardsWon.push(cardsChosen[1])
        setTimeout(winner, 500)

        }else{
            console.log('p2')
            setTimeout(turnCardsBackOver, 1500)
            cardsChosen[0].inPlay = false
            cardsChosen[1].inPlay = false
            place1 = cardsChosen[0].place
            place2 = cardsChosen[1].place
            cardsChosen =[]
            second.turn = false
            first.turn = true
            }
}
    }


function turnCardsBackOver(){  
    document.querySelector(place1).setAttribute ('src', 'images/Back.png') 
    document.querySelector(place2).setAttribute ('src', 'images/Back.png')
}
function winner(){
    if(cardsWon.length === 16 && first.score > second.score){
        alert(JSON.stringify(name1) + ' wins!')
    }else if(cardsWon.length === 16 && first.score < second.score){
        alert(JSON.stringify(name2) + ' wins!')
    }else if(cardsWon.length === 16 && first.score == second.score){
        alert('Both players win!')
    }
}

function reset(){
   let newBoard = document.querySelectorAll('.card')
   newBoard.forEach(e => {
       e.setAttribute('src', 'images/Back.png')
    });
    cardsChosen =[]
    cardsWon =[]
    first.score = 0
    second.score = 0
    document.querySelector('#result1').innerHTML = `${first.score}`
    document.querySelector('#result2').innerHTML = `${second.score}`
    randomCards()
    getName()
    getName2()
}

var resetGame = document.querySelector('#startOver')
resetGame.addEventListener('click', reset)