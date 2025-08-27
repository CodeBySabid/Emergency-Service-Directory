const mainHeart = parseInt(document.getElementById('Red-Heart').innerText);
const allHeart = document.querySelectorAll('.Heart-icon');
const mainCopy = parseInt(document.getElementById('main-copy').innerText);
const allCopy = document.querySelectorAll('.copy-btn');
const allCoin = parseInt(document.getElementById("coin").innerText);
const mainCall = document.querySelectorAll('.main-Call');
let count = 0;
let heartCount = 0;
allHeart.forEach(H => {
    H.addEventListener('click', function () {
        heartCount++
        document.getElementById('Red-Heart').innerText = heartCount;
    })
});
allCopy.forEach(H => {
    H.addEventListener('click', function () {
        count++
        document.getElementById('main-copy').innerText = count;
    })
});
function getElement(Id) {
    const element = document.getElementById(Id);
    return element;
};
let coins = parseInt(document.getElementById("coin").innerText);
document.querySelectorAll(".card .call-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let coins = parseInt(document.getElementById("coin").innerText);
        if (coins < 20) {
            alert("Not enough coins! You cannot call.");
            return;
        }
        const card = this.closest(".card");
        const title = card.querySelector(".title").textContent.trim();
        const number = card.querySelector(".number").textContent.trim();
        coins -= 20;
        alert(`📞 Called ${title} ${number}...`);
        document.getElementById("coin").innerText = coins;

    });
});

getElement("copy-button1").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button2").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button3").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button3-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button4").addEventListener('click', function () {
    const number = document.getElementById('copy-button4-h1').innerText;
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button5").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button5-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button6").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button6-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button7").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button7-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button8").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button8-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button9").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button9-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
