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
const callHistory = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history");

document.querySelectorAll(".card .call-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        if (coins < 20) {
            alert("Minimum of 20 coins is required to make call.");
            return;
        }
        const card = this.closest(".card");
        const title = card.querySelector(".title").textContent.trim();
        const number = card.querySelector(".number").textContent.trim();
        coins -= 20;
        document.getElementById("coin").innerText = coins;
        alert(`📞 Called ${title} ${number}...`);
        const now = new Date();
        const time = now.toLocaleTimeString();
        const historyDiv = document.createElement("div");
        historyDiv.classList.add(
            "flex", "justify-between", "items-center",
            "bg-[#e5e8e9a7]", "p-3", "rounded-xl", "mt-3"
        );
        historyDiv.innerHTML = `
            <div class="flex flex-col justify-start">
                <h1 class="font-bold text-lg w-[220px]">${title}</h1>
                <h1 class="text-[#343333]">${number}</h1>
            </div>
            <h1 class="text-lg">${time}</h1>
        `;
        callHistory.appendChild(historyDiv);
    });
});
clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
});
getElement("copy-button1").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    const subTitle = document.getElementById('sub-title1').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button2").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    const subTitle = document.getElementById('sub-title2').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button3").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button3-h1').innerText);
    const subTitle = document.getElementById('sub-title3').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button4").addEventListener('click', function () {
    const number = document.getElementById('copy-button4-h1').innerText;
    const subTitle = document.getElementById('sub-title4').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button5").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button5-h1').innerText);
    const subTitle = document.getElementById('sub-title5').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button6").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button6-h1').innerText);
    const subTitle = document.getElementById('sub-title6').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button7").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button7-h1').innerText);
    const subTitle = document.getElementById('sub-title7').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button8").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button8-h1').innerText);
    const subTitle = document.getElementById('sub-title8').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button9").addEventListener('click', function () {
    const number = parseInt(document.getElementById('copy-button9-h1').innerText);
    const subTitle = document.getElementById('sub-title9').innerText;
    alert(subTitle + " number is copied: " + number);
    navigator.clipboard.writeText(number);
});
