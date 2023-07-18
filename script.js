function changeText() {
    let textsArray = ['Task 2','Task 3','Task 4','Task 5'];
    let number = getRandomNumber(0, textsArray.length - 1);
    document.getElementById('heading').innerHTML = textsArray[number];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}