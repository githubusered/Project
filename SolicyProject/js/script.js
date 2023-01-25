let addBtn = document.getElementById('addBtn');
let sortBtn = document.getElementById('sortBtn');
let mainSection = document.querySelector('.mainSect');
let divs = document.querySelector('.divs')
let del = document.getElementsByClassName('del');
// event 1
addBtn.addEventListener('click',addCard)

// event 2
sortBtn.addEventListener('click',sortCard)

// event 3
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click',removeCard);
}

// function 1 for adding cards
let randomNumbersArr = [];
function addCard(){
    let randNumber = getRandomArbitrary(0,60)
    let div = `
    <div class="divs">
        <p>${randNumber}</p>
        <span class="del">x</span>
    </div>
        `
        mainSection.innerHTML += div
        for (let i = 0; i < del.length; i++) {
            del[i].addEventListener('click',removeCard);
        }
        randomNumbersArr.push(randNumber)
}
    
// function 2 for sorting cards
function sortCard(){
    randomNumbersArr.sort(function(a, b){return a-b});
    repaint()
}

// function 3 for random numbers
function getRandomArbitrary(min, max) {
    //return random number in interval [min,max]
    return Math.floor(Math.random() * (max - min) + min);
}

// function 4 for remove cards
function removeCard(e) {
    e.preventDefault();
    e.target.parentElement.remove()
}


// funtion 5 for repaint
function repaint() {
    let array = [];
    for (let i = 0; i < randomNumbersArr.length; i++) {
        array[i] = randomNumbersArr[i];
    }
    mainSection.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        mainSection.innerHTML += `
        <div class="divs">
            <p>${array[i]}</p>
            <span class="del">x</span>
        </div>
        `
    }
}