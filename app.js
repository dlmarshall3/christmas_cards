let submitBtn = document.querySelector('#submit');
let parentDiv = document.querySelector('#parentDiv');
let cardDiv = document.querySelector('#cardDiv')
let cardH1 = document.querySelector('#cardH1');
let familyInput = document.querySelector('#familyInput');

submitBtn.addEventListener('click', function(){
    parentDiv.classList.add('hidden');
    document.body.style.backgroundImage = "url('img/kcmo_christmas.jpg')";
    cardDiv.classList.remove('hidden');
    let family = familyInput.value.toUpperCase();
    cardH1.innerText = `MERRY CHRISTMAS, ${family} FAMILY!`;
})

