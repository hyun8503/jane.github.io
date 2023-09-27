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

const grid = [
  [
    "./images/portrait_photo.jpg",
    "Daniel Clifford",
    "Verified Graduated",
    "I received a job off mid-course, and the subjects I learned were current, if not more so in the company I joined. I honestly feel I got every penny's worth.",
    "Reiciendis ex alias eius architecto molestiae exercitationem suscipit ipsam facere. Id dicta nobis corporis, earum tempora blanditiis beatae? Tempore ducimus doloremque sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex vitae quas sed totam perspiciatis, voluptatem mollitia nam optio. Esse a repudiandae magnam accusamus! Iure consectetur aliquid incidunt rerum autem!",
  ],
  [
    "./images/portrait_photo.jpg",
    "Jonathan Walters",
    "Verified Graduated",
    "The team was very supportive and kept me motivated",
    "Reiciendis ex alias eius architecto molestiae exercitationem suscipit ipsam facere. Id dicta nobis corporis, earum tempora blanditiis beatae? Tempore ducimus doloremque sequi!",
  ],
  [
    "./images/portrait_photo.jpg",
    "Kira Whittle",
    "Verified Graduated",
    "I received a job off mid-course, and the subjects I learned were current, if not more so in the company I joined. I honestly feel I got every penny's worth.",
    "Reiciendis ex alias eius architecto molestiae exercitationem suscipit ipsam facere. Id dicta nobis corporis, earum tempora blanditiis beatae? Tempore ducimus doloremque sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex vitae quas sed totam perspiciatis, voluptatem mollitia nam optio. Esse a repudiandae magnam accusamus! Iure consectetur aliquid incidunt rerum autem!",
  ],
  [
    "./images/portrait_photo.jpg",
    "Jeanette Harmon",
    "Verified Graduated",
    "I received a job off mid-course.",
    "Reiciendis ex alias eius architecto molestiae exercitationem suscipit ipsam facere. Id dicta nobis corporis, earum tempora blanditiis beatae? Tempore ducimus doloremque sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ],
  [
    "./images/portrait_photo.jpg",
    "Daniel Clifford",
    "Verified Graduated",
    "I received a job off mid-course, and the subjects I learned were current, if not more so in the company I joined. I honestly feel I got every penny's worth.",
    "Reiciendis ex alias eius architecto molestiae exercitationem suscipit ipsam facere. Id dicta nobis corporis, earum tempora blanditiis beatae? Tempore ducimus doloremque sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex vitae quas sed totam perspiciatis, voluptatem mollitia nam optio. Esse a repudiandae magnam accusamus! Iure consectetur aliquid incidunt rerum autem!",
  ],
];

//read images array

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
}

//read grids array

let gridArr = [];

for (let i = 0; i < grid.length; i++) {
  const gridTag =
    '<div class="grid_item"><div class="pic_container"><img class="pic" src="' +
    grid[i][0] +
    '" alt="icon"><div class="name"><p class="pic_name">' +
    grid[i][1] +
    '</p><p class="pic_name_des">' +
    grid[i][2] +
    '</p></div></div><div class="grid_item_text"><h1 class="grid_title">' +
    grid[i][3] +
    '</h1><p class="grid_description">' +
    grid[i][4] +
    "</p></div></div>";
  console.log(gridTag);

  gridArr.push(gridTag);
  let makeGridString = gridArr.join("");
  document.getElementById("grid_container").innerHTML = makeGridString;
}

// modal chat function
let Modal = document.querySelector(".modal_chat");
let ModalBack = document.querySelector(".modal_back");

function CloseModal() {
  Modal.classList.add("hidden");
  ModalBack.classList.add("hidden");
  Modal.classList.remove("visible");
  ModalBack.classList.remove("visible");
}

function OpenModal() {
  Modal.classList.remove("hidden");
  ModalBack.classList.remove("hidden");
  Modal.classList.add("visible");
  ModalBack.classList.add("visible");
}
