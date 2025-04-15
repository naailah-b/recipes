

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

document.querySelector('#home').addEventListener('click', () => {
    location.href = 'index.html'
})

// get each recipe and do 
// chocolate? yes or cake: yes in key value pair object possibly assign it and stuff