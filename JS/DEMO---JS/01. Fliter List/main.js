// get element 'input'
let filterInput = document.getElementById('filterInput');


//add event listener to 'input'
filterInput.addEventListener('keyup', filterNames);


//function 'filterNames' 
function filterNames() {
    //get value of 'input'
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //get ul names
    let ul = document.getElementById('names');

    //get ul`s li
    let li = document.querySelectorAll('li.collection-item');

    //loop through li
    for (let i = 0; i < li.length; i++) {
        //get a tags
        let a = li[i].getElementsByTagName('a')[0];

        //if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) != -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }

}