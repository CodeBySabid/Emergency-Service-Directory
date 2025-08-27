const mainHeart = parseInt(document.getElementById('Red-Heart').innerText);
const allHeart = document.querySelectorAll('.Heart-icon');
const mainCopy = parseInt(document.getElementById('main-copy').innerText);
const allCopy = document.querySelectorAll('.copy-btn');
const allCoin = parseInt(document.getElementById("coin").innerText);
const mainCall = document.querySelectorAll('.main-Call');
let count = 0;
let heartCount = 0;
let coinCount = 20;
allHeart.forEach(H => {
    H.addEventListener('click', function(){
        heartCount++
        document.getElementById('Red-Heart').innerText = heartCount;
    })
});
allCopy.forEach(H => {
    H.addEventListener('click', function(){
        count++
        document.getElementById('main-copy').innerText = count;
    })
})
function getElement(Id){
    const element = document.getElementById(Id);
    return element;
};
getElement("call-button1").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    const tatle = document.getElementById('title1').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button2").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    const tatle = document.getElementById('title2').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button3").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button3-h1').innerText);
    const tatle = document.getElementById('title3').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button4").addEventListener('click', function(){
    const number = document.getElementById('copy-button4-h1').innerText;
    const tatle = document.getElementById('title4').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button5").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button5-h1').innerText);
    const tatle = document.getElementById('title5').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button6").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button6-h1').innerText);
    const tatle = document.getElementById('title6').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button7").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button7-h1').innerText);
    const tatle = document.getElementById('title7').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button8").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button8-h1').innerText);
    const tatle = document.getElementById('title8').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});
getElement("call-button9").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button9-h1').innerText);
    const tatle = document.getElementById('title9').innerHTML;
    alert(`📞 Called ${tatle} ${number}...`);
});









getElement("copy-button1").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button2").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button3").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button3-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button4").addEventListener('click', function(){
    const number = document.getElementById('copy-button4-h1').innerText;
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button5").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button5-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button6").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button6-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button7").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button7-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button8").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button8-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});
getElement("copy-button9").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button9-h1').innerText);
    alert("The number is copied: " + number);
    navigator.clipboard.writeText(number);
});

