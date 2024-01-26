const startBtn = document.querySelector('#startBtn'),
    endBtn = document.querySelector('#endBtn'),
    prevNext = document.querySelectorAll('.prevNext'),
    link = document.querySelectorAll('.link'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next');

console.log(startBtn, endBtn, prevNext, link);

let currentStep = 0;

const updateBtn = () => {
    if(currentStep===4){
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    }else if(currentStep===0){
        startBtn.disabled =  true;
        prevNext[0].disabled = true;
    }else{
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled =false;
    }

}

link.forEach((number, numIndex) => {
    number.addEventListener('click', (e) => {
        e.preventDefault
        numIndex == currentStep;
        console.log(numIndex);

        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
        updateBtn();

    });
})

prevNext.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentStep += e.target.id === "next" ? 1 : -1;
        link.forEach((number, numIndex) => {
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn();
        });

    });
});

startBtn.addEventListener('click', ()=> {
    document.querySelector('.active').classList.remove("active")
    link[0].classList.add('active');
    currentStep = 0;
    updateBtn();
    endBtn.disabled = false;
    prevNext[1].disabled = false;
})
endBtn.addEventListener('click', ()=> {
    document.querySelector('.active').classList.remove("active")
    link[4].classList.add('active');
    currentStep = 4;
    updateBtn();
    startBtn.disabled = false;
    prevNext[0].disabled = false;
})