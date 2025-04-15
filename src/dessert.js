

/* document.querySelector('#chocolate').addEventListener('click', () => {
    showRecipe('chocolate');
})
document.querySelector('#cake').addEventListener('click', () => {
    showRecipe('cake');
})
document.querySelector('#cookies').addEventListener('click', () => {
    showRecipe('cookies');
})
document.querySelector('#all').addEventListener('click', () => {
    showRecipe('all');
})


function showRecipe(type) {
    let recipe = document.getElementsByName(type);
    
    if (recipe = type) {
        console.log(document.getElementsByName(type))
        document.getElementsByName(type)[0].style.display = 'block';
    }
    else {
        document.getElementsByName(type)[0].style.display = 'hidden';
    }
}
*/

document.querySelector('#chocolate').addEventListener('click', ()=> {
    changeColor('chocolate')
})
document.querySelector('#cake').addEventListener('click', ()=> {
    changeColor('cake')
})
document.querySelector('#cookies').addEventListener('click', () => {
    changeColor('cookies');
})
document.querySelector('#all').addEventListener('click', () => {
    changeColor('all');
})


function changeColor(type) {
    for(i=0;i<4;i++) {
        document.querySelectorAll('.dessert-types')[i].style.backgroundColor = "white";
    }
    document.querySelector('#' + type).style.backgroundColor = "aliceblue";
}

// get each recipe and do 
// chocolate? yes or cake: yes in key value pair object possibly assign it and stuff