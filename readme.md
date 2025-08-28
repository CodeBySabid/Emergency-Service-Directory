QA
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
getElementById হলো এইচটিএমএল ফাইল এর মধ্যে থাকা নিদিষ্ট id দিয়ে এইচটিএমএল ফাইল এর tag কে নির্বাচন  করা ।
getElementById হলো এইচটিএমএল ফাইল এর মধ্যে tag এর ক্লাস name দিয়ে এইচটিএমএল ফাইল এর tag কে নির্বাচন করা ।
querySelector দিয়ে সিএসএস selector এর প্রথম element কে নির্বাচন হয়।
querySelectorAll দিয়ে সিএসএস selector এর সকল element কে নির্বাচন করা যাই। যত গুলো সিএসএস selector এর সাথে মিলে যাই সে সকল element এক সাথে নির্বাচন করা করা যাই।

2. How do you **create and insert a new element into the DOM**?
Ans:
নিউ element তৈরি করার জন্য HTML ট্যাগের নামটি স্ট্রিং আর্গুমেন্ট হিসেবে পাস করে লাগবে,(const newElement = document.createElement('div')) এবার আমরা element এর name, id, innerText ইত্যাদি পরিবর্তন করতে পারব। যেমন
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="container"></div>
  <script>
    const newElement = document.createElement('div')
    newElement.textContent = "This is new div";
    let container = document.getElementById("container");
    container.appendChild(newElement);
  </script>
</body>
</html>

3. What is **Event Bubbling** and how does it work?
Ans:
ইভেন্ট বাবলিং হল ডিফল্ট উপায় যা DOM (ডকুমেন্ট অবজেক্ট মডেল) ইভেন্টগুলি HTML স্ট্রাকচারকে টার্গেট এলিমেন্ট থেকে তার পূর্বসূরীদের কাছে, ডকুমেন্টের রুট পর্যন্ত প্রচার করে
যেকোনো বাটন এ .addEventListener('click, function(){ }) add করলে। বাটন এ যত বার ক্লিক করা হবে ততবার function ট run হবে function ব্যবহার করে ওয়েবসাইট এ login, logout এইচটিএমএল এর টেক্সট chang সহ আরো অনেক কাজ করতে পারি।

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: 
জাভাস্ক্রিপ্টে ইভেন্ট ডেলিগেশান হল ইভেন্ট পরিচালনা করার একটি কৌশল যেখানে, একাধিক চাইল্ড এলিমেন্টের সাথে পৃথক ইভেন্ট লিসেনার সংযুক্ত করার পরিবর্তে, একটি একক ইভেন্ট লিসেনার একটি সাধারণ প্যারেন্ট এলিমেন্টের সাথে সংযুক্ত করা হয়।
ইভেন্ট ডেলিগেশন এটি দরকারী কারন হলো।ধরি ওয়েবপেজে ১০০ টা <button> আছে। যদি আমি প্রতিটা বাটনের জন্য আলাদা করে addEventListener দেই তাহলে বেশি মেমোরি ব্যবহার করবে এবং performance খারাপ হবে। আর আমি যদি সবগুলো বাটনকে ঘিরে রাখা parent এর উপর একটা মাত্র listener দিই তারপরও parent এর ভেতরের সব বাটনের event কাজ করতে পারবো। এবং কোড সহজ হয়। নতুন button DOM এ যোগ করলে আলাদা করে event বসাতে হয় না

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault() ব্রাউজারের ডিফল্ট কাজ বন্ধ করা হয়
stopPropagation() ব্যবহার করলে ইভেন্ট আর parent element এর দিকে যাবে না, শুধু ওই element এ থেমে যাবে।


