//get input
const weightInput = document.getElementById('weightInput');

//hidden output cards
document.getElementById('output').style.visibility = 'hidden';

//add event listener
weightInput.addEventListener('input', (e) => {

    document.getElementById('output').style.visibility = 'visible';

    let weightNumber = e.target.value;

    // weight converter
    document.getElementById('kgOutput').innerHTML = weightNumber * 0.5;

    document.getElementById('poundOutput').innerHTML = weightNumber * 1.1023113;

    document.getElementById('ozOutput').innerHTML = weightNumber * 17.636981;



})