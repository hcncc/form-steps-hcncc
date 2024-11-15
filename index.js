const nextButton = window.document.querySelector('.btn-next')
const prevButton = window.document.querySelector('.btn-prev')
const steps = window.document.querySelectorAll('.step')
const formSteps = window.document.querySelectorAll('.form-step')

let active = 1

nextButton.addEventListener('click', ()=>{
    active++
    if(active > steps.length){
        active = steps.length
    }

    updateProgress()
})

prevButton.addEventListener('click', ()=>{
    active--
    if(active < 1){
        active = 1
    }

    updateProgress()
})

function updateProgress(){
    console.log("Steps.length: ", steps.length)
    console.log("Active: ", active)

    // toglle .active class for each list item
    steps.forEach((step, i)=>{
        if(i == (active-1)){
            step.classList.add('active')
            formSteps[i].classList.add('active')
            console.log('i: ', i)
        }else{
            step.classList.remove('active')
            formSteps[i].classList.remove('active')
        }
    })

    //enable or disable prev and next buttons
    if(active === 1){
        prevButton.disabled = true
    }else if(active === steps.length){
        nextButton.disabled = true
    }else{
        prevButton.disabled = false
        nextButton.disabled = false
    }
}