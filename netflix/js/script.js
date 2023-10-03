"use strict";

const image = [
  [
    "../janeDesign/images/img1.jpg",
    "Unordinary Space",
    "BRANDING",
    "./tables.html",
  ],
  ["../janeDesign/images/img2.jpg", "DAMMN! You Look Good", "BRANDING"],
  ["../janeDesign/images/img3.jpg", "Timescale", "ICONS"],
  ["../janeDesign/images/img4.jpg", "Appsmart", "ILLUSTRATION"],
  ["../janeDesign/images/img5.jpg", "Jumpstart", "BRANDING"],
  ["../janeDesign/images/img6.jpg", "Purgo", "BRANDING"],
  ["../janeDesign/images/img7.jpg", "Yevka Blog", "BRANDING"],
  ["../janeDesign/images/img8.jpg", "Unordinary Life", "BRANDING"],
  ["../janeDesign/images/img2.jpg", "DAMMN! You Look Good", "BRANDING"],
  ["../janeDesign/images/img3.jpg", "Timescale", "ICONS"],
  ["../janeDesign/images/img4.jpg", "Appsmart", "ILLUSTRATION"],
  ["../janeDesign/images/img5.jpg", "Jumpstart", "BRANDING"],
  ["../janeDesign/images/img6.jpg", "Purgo", "BRANDING"],
  ["../janeDesign/images/img7.jpg", "Yevka Blog", "BRANDING"],
  ["../janeDesign/images/img8.jpg", "Unordinary Life", "BRANDING"],
];

//read images array

let arr = [];

for (let i = 0; i < image.length; i++) {
  const imageTag =
    '<div class="item"><div class="img_wrap"><a href="' +
    image[i][3] +
    '" target="_self"><img class="img" src="' +
    image[i][0] +
    '" alt="img" /></div></div>';

  arr.push(imageTag);
  let makeString = arr.join("");
  document.getElementById("main_items").innerHTML = makeString;
}
