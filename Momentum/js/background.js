const images =["1.jpg","2.jpeg","3.jpeg","4.jpeg","5.jpg"];

const todayImage=images[Math.floor(Math.random() * images.length)];


const bgImage=document.createElement("img");
bgImage.src=`./img/${todayImage}`;
bgImage.classList.add("bg-image");
console.log(bgImage);
document.body.appendChild(bgImage);