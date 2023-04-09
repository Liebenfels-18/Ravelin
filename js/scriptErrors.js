var myModal = document.getElementById("myModal");
var btnErrors = document.getElementsByClassName("button-error");
console.log(btnErrors);

for (let i = 0; i < btnErrors.length; i++) {
    btnErrors[i].addEventListener('click', function () {
        myModal.style.position = "fixed";
        myModal.style.opacity = "1";
        myModal.style.zIndex = "9999";
    })
}

myModal.addEventListener('click', function () {
    myModal.style.position = "absolute";
    myModal.style.opacity = "0";
    myModal.style.zIndex = "-9999";
})