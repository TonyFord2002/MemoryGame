//Start game button
function instructions(){
    alert('Hello! This a memory game played with two players.')
    alert('Player 1 will go first and pick two cards. If they match Player 1 will go again.')
    alert("If they don't then it is Player 2's turn to pick two cards.")
    alert("The game ends when all cards have been matched up.")

}
var btn = document.getElementById('startGame')
btn.addEventListener('click', instructions)



//List instructions or skip instructions if playing again
class Player1{
    constructor(score, turn, choice1, choice2, win){
    this.score=score
    this.turn=true
    this.choice1=choice1
    this.choice2=choice2
    this.win=true
}
}

class Player2{
    constructor(score, turn, choice1, choice2, win){
        this.score=score
        this.turn=false
        this.choice1=choice1
        this.choice2=choice2
        this.win=true
    }
}
//Make cards
const cardsArray=[
{
    name: 'are',
    img: 'images/Are.png',
    inPlay: false},
{    
    name: 'are',
    img: 'images/Are.png',
    inPlay: false},
{
    name: 'bad',
    img: 'images/Bad.png',
    inPlay: false},
{    
    name: 'bad',
    img: 'images/Bad.png',
    inPlay: false},
{
    name: 'did',
    img: 'images/Did.png',
    inPlay: false},
{ 
    name: 'did',
    img: 'images/Did.png',
    inPlay: false},
{
    name: 'has',
    img: 'images/Has.png',
    inPlay: false},
{    
    name: 'has',
    img: 'images/Has.png',
    inPlay: false},
{
    name: 'have',
    img: 'images/Have.png',
    inPlay: false},
{
    name: 'have',
    img: 'images/Have.png',
    inPlay: false},
{
    name: 'like',
    img: 'images/Like.png',
    inPlay: false},
{
    name: 'like',
    img: 'images/Like.png',
    inPlay: false},
{
    name: 'now',
    img: 'images/Now.png',
    inPlay: false},
{
    name: 'now',
    img: 'images/Now.png',
    inPlay: false},
{
    name: 'out',
    img: 'images/Out.png',
    inPlay: false},
{
    name: 'out',
    img: 'images/Out.png',
    inPlay: false}
]

let first = new Player1
let second = new Player2
let cardsWon = []

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
let cardsChosen = []


//Flip over cards once clicked


let myImage1a = document.querySelector('.word1a');
myImage1a.onclick = function() {
        let mySrc = myImage1a.getAttribute('src');
        if(mySrc === 'images/Back.png') {
    myImage1a.setAttribute ('src', cardsArray[0].img);
    cardsArray[0].inPlay = true;
    cardsChosen.push(cardsArray[0])
    compareCards();
} else {
    myImage1a.setAttribute ('src','images/Back.png');
}
}

let myImage1b = document.querySelector('.word1b');
myImage1b.onclick = function() {
    let mySrc = myImage1b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage1b.setAttribute ('src', cardsArray[1].img);
        cardsArray[1].inPlay = true;
        cardsChosen.push(cardsArray[1])
        compareCards();
    } else {
        myImage1b.setAttribute ('src','images/Back.png');
    }
}

let myImage2a = document.querySelector('.word2a');
myImage2a.onclick = function() {
    let mySrc = myImage2a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage2a.setAttribute ('src',cardsArray[2].img);
        cardsArray[2].inPlay = true;
        cardsChosen.push(cardsArray[2])
        compareCards();
    } else {
        myImage2a.setAttribute ('src','images/Back.png');
    }
}

let myImage2b = document.querySelector('.word2b');
myImage2b.onclick = function() {
    let mySrc = myImage2b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage2b.setAttribute ('src',cardsArray[3].img);
    cardsArray[3].inPlay = true;
    cardsChosen.push(cardsArray[3])
    compareCards();
  } else {
      myImage2b.setAttribute ('src','images/Back.png');
    }
}

let myImage3a = document.querySelector('.word3a');
myImage3a.onclick = function() {
    let mySrc = myImage3a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage3a.setAttribute ('src',cardsArray[4].img);
        cardsArray[4].inPlay = true;
        cardsChosen.push(cardsArray[4])
        compareCards();
    } else {
        myImage3a.setAttribute ('src','images/Back.png');
    }
}

let myImage3b = document.querySelector('.word3b');
myImage3b.onclick = function() {
    let mySrc = myImage3b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage3b.setAttribute ('src',cardsArray[5].img);
        cardsArray[5].inPlay = true;
        compareCards();
  } else {
    myImage3b.setAttribute ('src','images/Back.png');
  }
}

let myImage4a = document.querySelector('.word4a');
myImage4a.onclick = function() {
    let mySrc = myImage4a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage4a.setAttribute ('src',cardsArray[6].img);
        cardsArray[6].inPlay = true;
        compareCards();
    } else {
        myImage4a.setAttribute ('src','images/Back.png');
    }
}

let myImage4b = document.querySelector('.word4b');
myImage4b.onclick = function() {
    let mySrc = myImage4b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage4b.setAttribute ('src',cardsArray[7].img);
        cardsArray[7].inPlay = true;
    compareCards();
} else {
    myImage4b.setAttribute ('src','images/Back.png');
}
}

let myImage5a = document.querySelector('.word5a');
myImage5a.onclick = function() {
    let mySrc = myImage5a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
      myImage5a.setAttribute ('src',cardsArray[8].img);
      cardsArray[8].inPlay = true;
      compareCards();
    } else {
    myImage5a.setAttribute ('src','images/Back.png');
  }
}

let myImage5b = document.querySelector('.word5b');
myImage5b.onclick = function() {
    let mySrc = myImage5b.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage5b.setAttribute ('src',cardsArray[9].img);
    cardsArray[9].inPlay = true;
    compareCards();
  } else {
      myImage5b.setAttribute ('src','images/Back.png');
    }
}

let myImage6a = document.querySelector('.word6a');
myImage6a.onclick = function() {
    let mySrc = myImage6a.getAttribute('src');
    if(mySrc === 'images/Back.png') {
        myImage6a.setAttribute ('src',cardsArray[10].img);
        cardsArray[10].inPlay = true;
        compareCards();
    } else {
        myImage6a.setAttribute ('src','images/Back.png');
}
}

let myImage6b = document.querySelector('.word6b');
myImage6b.onclick = function() {
  let mySrc = myImage6b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage6b.setAttribute ('src',cardsArray[11].img);
    cardsArray[11].inPlay = true;
    compareCards();
} else {
    myImage6b.setAttribute ('src','images/Back.png');
}
}

let myImage7a = document.querySelector('.word7a');
myImage7a.onclick = function() {
  let mySrc = myImage7a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage7a.setAttribute ('src',cardsArray[12].img);
    cardsArray[12].inPlay = true;
    compareCards();
  } else {
      myImage7a.setAttribute ('src','images/Back.png');
  }
}

let myImage7b = document.querySelector('.word7b');
myImage7b.onclick = function() {
  let mySrc = myImage7b.getAttribute('src');
  if(mySrc === 'images/Back.png') {
      myImage7b.setAttribute ('src',cardsArray[13].img);
      cardsArray[13].inPlay = true;
      compareCards();
  } else {
    myImage7b.setAttribute ('src','images/Back.png');
}
}

let myImage8a = document.querySelector('.word8a');
myImage8a.onclick = function() {
  let mySrc = myImage8a.getAttribute('src');
  if(mySrc === 'images/Back.png') {
    myImage8a.setAttribute ('src',cardsArray[14].img);
    cardsArray[14].inPlay = true;
    compareCards();
} else {
    myImage8a.setAttribute ('src','images/Back.png');
}
}

let myImage8b = document.querySelector('.word8b');
myImage8b.onclick = function() {
  let mySrc = myImage8b.getAttribute('src'); 
  if(mySrc === 'images/Back.png') {
    myImage8b.setAttribute ('src',cardsArray[15].img);
    cards[15].inPlay = true;
    cardsChosen.push(cardsArray[15])
    compareCards();
} else {
    myImage8b.setAttribute('src','images/Back.png');
}
}


//const totalCards = document.querySelectorAll('.card')
//cardsChosen = Object.values(totalCards).map(c => c.inPlay === true)


// cardsChosen = cardsArray.map(selectFewerProps)

// function selectFewerProps(cardArray){
//     const {name, inPlay} = cardArray;
//     return {name, inPlay};
//   }



//Compare the two cards and check for a match
function compareCards(){
    while(first.turn === true){
        if (cardsChosen.length=2){
          if(cardsChosen[0].name === cardsChosen[1].name){
            first.score++
            alert('you found a match')
            cardsChosen=[]

            }else{
                alert("not a match")
                first.turn = false
                cardsChosen[0].inPlay = false
                cardsChosen[1].inPlay = false
                cardsChosen.setAttribute('src','images/Back.png')
                //cardsChosen[1].setAttribute('src','images/Back.png')
        }
    }
}
while(second.turn === true){
    if (cardsChosen.length =2){
      if(cardsChosen[0].name === cardsChosen[1].name){
        second.score++
        alert('you found a match')

        }else{
            alert("not a match")
            second.turn = false
            cardsChosen[0].inPlay = false
            cardsChosen[1].inPlay = false
            cardsChosen.setAttribute('src','images/Back.png')
            //cardsChosen.setAttribute('src','images/Back.png')
    }
}
}
}

document.querySelector('#result1').innerHTML = `${first.score}`
document.querySelector('#result2').innerHTML = `${second.score}`
//If a match increase score on that player and go again


//If not a match then turn over cards its the other players turn


//If all cards are gone compare scores and declare winner


//Ask to play again