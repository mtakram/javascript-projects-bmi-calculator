const height = document.getElementById('height');
const weight = document.getElementById('weight');
const male = document.getElementById('male');
const female = document.getElementById('female');
const calcBtn = document.getElementById('calc-btn');
const bmiNumber = document.getElementById('bmi-number');
const bmiResult = document.getElementById('bmi-result');
const ageError = document.getElementById('age-error');
const heightError = document.getElementById('height-error');
const weightError = document.getElementById('weight-error');
const genderError = document.getElementById('gender-error');


function bmiCalculator() {
    heightError.textContent = ''
    weightError.textContent = ''
    genderError.textContent = ''

    let gender = document.getElementsByName('gender')

    if(height.value === '') {
        heightError.textContent = 'Please Enter your height.'
        return
    } else if (weight.value === '') {
        weightError.textContent = 'Please Enter your weight.'
        return
    }

    let genderSelected = false
    for(let g of document.getElementsByName('gender')) {
        if(g.checked) {
            genderSelected = true
            break
        }
    }
    if(!genderSelected) {
        genderError.textContent = 'Please specify your gender.'
        return
    }

    let h = parseFloat(height.value) / 100
    let w = parseFloat(weight.value)

    let bmi = w / (h * h)
    bmiNumber.textContent = bmi.toFixed(2)

    if(bmi < 18.5) {
        bmiResult.textContent = `You are under  weight.`
        bmiResult.style.color = 'orange'
    } else if(bmi < 25) {
        bmiResult.textContent = `Your weight is normal.`
        bmiResult.style.color = 'green'
    } else if(bmi < 30) {
        bmiResult.textContent = `You are over weight.`
        bmiResult.style.color = 'darkorange'
    } else {
        bmiResult.textContent = `You are Obese, you need to take care of your health.`
        bmiResult.style.color = 'red'
    }
}

calcBtn.addEventListener('click', bmiCalculator)