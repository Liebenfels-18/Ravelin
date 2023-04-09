var sliderSum = document.getElementById("sliderSum");
var sliderDay = document.getElementById("sliderDay");
var calcSum = document.getElementById("calc-sum");
var calcDay = document.getElementById("calc-day");
var totalSum = document.getElementById("totalSum");

var d1 = 30;
var d2 = 84;
var d3 = 168;

calcSum.innerHTML = sliderSum.value;
calcDay.innerHTML = d1;
totalSum.innerHTML = (Number(sliderSum.value) + Number(sliderSum.value / 100 * 30));

sliderDay.disabled = true;

sliderSum.oninput = function () {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #e7792a 0%, #e7792a ' + value + '%, #eff0f4 ' + value + '%, #eff0f4 100%)';
    if (sliderSum.value > 30000) {
        sliderSum.setAttribute("min", "0")
        sliderSum.setAttribute("step", "5000");
    } else {
        sliderSum.setAttribute("min", "3000")
        sliderSum.setAttribute("step", "500");
    }
    calcSum.innerHTML = this.value;

    if (sliderSum.value < 20000) {
        sliderDay.value = 0;
        calcDay.innerHTML = d1;
        totalSum.innerHTML = (Number(sliderSum.value) + Number(sliderSum.value / 100 * 30));
        sliderDay.style.background = '#eff0f4';
    }

    if (sliderSum.value >= 20000) {
        sliderDay.value = 50;
        calcDay.innerHTML = d2;
        totalSum.innerHTML = (Number(sliderSum.value) + Number(sliderSum.value / 100 * 42));
        sliderDay.style.background = 'linear-gradient(to right, #e7792a 0%, #e7792a ' + 50 + '%, #eff0f4 ' + 0 + '%, #eff0f4 100%)';
    }

    if (sliderSum.value >= 35000) {
        sliderDay.value = 100;
        calcDay.innerHTML = d3;
        totalSum.innerHTML = (Number(sliderSum.value) + Number(sliderSum.value / 100 * 65));
        sliderDay.style.background = 'linear-gradient(to right, #e7792a 0%, #e7792a ' + 100 + '%, #eff0f4 ' + 0 + '%, #eff0f4 100%)';
    }

}

var btnMoney = document.getElementById("button-error");
var myModal = document.getElementById("myModal");
var btnErrors = document.getElementsByClassName("button-error");
console.log(btnErrors);

btnMoney.addEventListener('click', function () {
    myModal.style.position = "fixed";
    myModal.style.opacity = "1";
    myModal.style.zIndex = "9999";
})

myModal.addEventListener('click', function () {
    myModal.style.position = "absolute";
    myModal.style.opacity = "0";
    myModal.style.zIndex = "-9999";
})

for (let i = 0; i < btnErrors.length; i++) {
    btnErrors[i].addEventListener('click', function () {
        myModal.style.position = "fixed";
        myModal.style.opacity = "1";
        myModal.style.zIndex = "9999";
    })
}