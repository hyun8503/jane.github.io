"use strict";

const image = [
  ["./images/img1.jpg", "Unordinary Space", "BRANDING"],
  ["./images/img2.jpg", "DAMMN! You Look Good", "BRANDING"],
  ["./images/img3.jpg", "Timescale", "ICONS"],
  ["./images/img4.jpg", "Appsmart", "ILLUSTRATION"],
  ["./images/img5.jpg", "Jumpstart", "BRANDING"],
  ["./images/img6.jpg", "Purgo", "BRANDING"],
  ["./images/img7.jpg", "Yevka Blog", "BRANDING"],
  ["./images/img8.jpg", "Unordinary Life", "BRANDING"],
];

let arr = [];

for (let i = 0; i < image.length; i++) {
  const imageTag =
    '<div class="item"><div class="img_wrap"><img class="img" src="' +
    image[i][0] +
    '" alt="img" /></div><div class="img_text_wrap"><h1 class="img_text">' +
    image[i][1] +
    '</h1><p class="img_sub_text">' +
    image[i][2] +
    " </p></div></div>";

  arr.push(imageTag);
  let makeString = arr.join("");
  document.getElementById("main_items").innerHTML = makeString;

  console.log(makeString);
}
