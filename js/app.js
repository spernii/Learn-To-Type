const button = document.getElementById('generate-button');
let textField  = document.getElementById('text-field');
let mistakes = document.getElementById('mistakes-score');
const clickDisplay = document.getElementById('blur')
//1.Evnets Listeners
button.addEventListener('click', generate);
clickDisplay.addEventListener('click',hide);
button.addEventListener('click',show);

//<--1-->



//2.This funtion creates the text
function generate(){
    let words_entered = 0;
    let mistakesCounter = 0;
    
    mistakes.innerHTML = 0;
    let input = document.getElementById('letters').value;
    let wordCounter = document.getElementById('wordCounter').value;
    if(wordCounter < 30 && wordCounter > 1){
        phrase(input,wordCounter); //return the phrase / text
        let spanLetters = textField.querySelectorAll('span');
        let index = 0;
        
        spanLetters[index].classList.add("letter-background");
        
        document.addEventListener('keydown',(e)=>{  
            words_entered++;
            if(spanLetters[index].innerHTML === e.key){
                spanLetters[index].classList.remove("letter-background");
                index++;
                       
            } else {
                mistakesCounter++;
               
                spanLetters[index].classList.add("mistake-background");
                mostMistackes.push(spanLetters[index]);
            } 

            mistakes.innerText = mistakesCounter;
            
        }); 
        document.addEventListener('keyup', (e)=>{
            spanLetters[index].classList.add("letter-background");
            
        });
    }
} 

//<--2-->



//3.How many words
function phrase(x, number){
    //x is the input, number is how many words to create
    if(validation(x)){
        let displayString = "";
        while(number){
            displayString += word(x) + `<span> </span>`;
            number--;
        }
        textField.innerHTML = displayString;
          
    };
         
} 
//<--3-->



//4.This funciton creates the word
function word(n){
    let inputValueLength = stringLength(n); //n is length of the input Text
    if(validation(n)){
        let word = [];//the words are created here
        while(inputValueLength){
            word +=`<span>${n[randomLetter(n)]}</span>`  ;
            inputValueLength--;    
        }
        return word;
    }
    
}
//<--4-->



//5.This function randomizes the length of a word
function stringLength(){
    let sLength = Math.floor(Math.random() * 10 );
    return sLength > 3 ? sLength : sLength + 4; //return minimum 4
   
}
//<--5-->




//6.This function chooses a random letter
function randomLetter(n){
    return Math.floor(Math.random() * n.length);
    //n is the parameter for input
}
//<--6-->




//7.Regex
function validation(n){
    let regex = /^\d+|\W+|\d+$/g;
    
    if(!n.match(regex)){
        return 1;
    }
}
//<--7-->

//8.Hide focus div
function show(){
    if(clickDisplay.style.display = "none"){
        clickDisplay.style.display = "block";
    }
}
//<--8-->
function hide(){
    if(clickDisplay.style.display = "block"){
        clickDisplay.style.display = "none";
    }
}
