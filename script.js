const mainHeart = parseInt(document.getElementById('Red-Heart').innerText);
const allHeart = document.querySelectorAll('.Heart-icon');
const mainCopy = parseInt(document.getElementById('main-copy').innerText);
const allCopy = document.querySelectorAll('.copy-btn');
const mainCall = document.querySelectorAll('.main-Call');
const allCoin = parseInt(document.getElementById("coin").innerText);
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
allCopy.forEach(H => {
    H.addEventListener('click', function(){
        let youCoin = allCoin - coinCount;
        document.getElementById('main-copy').innerText = coinCount;
    })
})
function getElement(Id){
    const element = document.getElementById(Id);
    return element;
};
function alertandcopy(Id){
    const copyButton = document.getElementById(Id);
    copyButton.addEventListener('click', function(){
        const copyH = parseInt(document.getElementById(''))
    })
}

getElement("call-button1").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button2").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button1-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button3").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button3-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button4").addEventListener('click', function(){
    const number = document.getElementById('copy-button4-h1').innerText;
    alert("📞 Called Number: " + number);
});
getElement("call-button5").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button5-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button6").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button6-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button7").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button7-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button8").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button8-h1').innerText);
    alert("📞 Called Number: " + number);
});
getElement("call-button9").addEventListener('click', function(){
    const number = parseInt(document.getElementById('copy-button9-h1').innerText);
    alert("📞 Called Number: " + number);
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




// getElement('call-button1').addEventListener('click', function(e){
//     e.preventDefault();
//     alert('hetktjt')
//     console.log('hello');
// })

// document.getElementById('call-button1').addEventListener('click', function(e) {
//     e.preventDefault();
//     alert("hello")
//     console.log('jfjdfd');
// });
// const callButton1 = document.getElementById('call-button1').addEventListener('click', function(){
//     alert("hello")
// })
// const callButton1 = document.getElementById('call-button1');
// const callButton2 = document.getElementById('call-button2');
// const callButton3 = document.getElementById('call-button3');
// const callButton4 = document.getElementById('call-button4');
// const callButton5 = document.getElementById('call-button5');
// const callButton6 = document.getElementById('call-button6');
// const callButton7 = document.getElementById('call-button7');
// const callButton8 = document.getElementById('call-button8');
// const callButton9 = document.getElementById('call-button9');

// const copyButton1 = document.getElementById('copy-button1')
// const copyButton2 = document.getElementById('copy-button2')
// const copyButton3 = document.getElementById('copy-button3')
// const copyButton4 = document.getElementById('copy-button4')
// const copyButton5 = document.getElementById('copy-button5')
// const copyButton6 = document.getElementById('copy-button6')
// const copyButton7 = document.getElementById('copy-button7')
// const copyButton8 = document.getElementById('copy-button8')
// const copyButton9 = document.getElementById('copy-button9')
