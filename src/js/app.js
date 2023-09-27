// 1.Banner section

let banner = document.querySelector(".banner");
let left_btn = document.querySelector(".left_btn")
let right_btn = document.querySelector(".right_btn");

let images = ["image1.jpg", "image2.jpg", "image3.jpg"];

let index = 0;

function slide(index) {
    banner.style.backgroundImage = `url(/src/img/${images[index]})`
}

left_btn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }

    slide(index);
})

right_btn.addEventListener("click", () => {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }

    slide(index);
})

// 2.Timer section

const countDownDate = new Date("september 30, 2023 21:00:00").getTime();
const result = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
        clearInterval(result);
        document.querySelector(".time").innerHTML = "EXPIRED";
    } else {
        if (seconds === 0 && minutes > 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 0) {
            seconds = 0;
        }

        document.querySelector(".day").innerHTML = days + "d";
        document.querySelector(".hour").innerHTML = hours + "h";
        document.querySelector(".minute").innerHTML = minutes + "m";
        document.querySelector(".second").innerHTML = seconds + "s";
    }
}, 1000);


// 3.Products

const products = [
    {
        id: 0,
        name: "Bloodborne",
        img: "/src/img/card1.jpg",
        price: 50.00,
    old_price: 40.55
    },
    {
        id: 1,
        name: "Bloodborne",
        img: "/src/img/card2.jpg",
        price: 60.00,
    },
    {
        id: 2,
        name: "Bloodborne",
        img: "/src/img/card3.jpg",
        price: 34.99,
        old_price: 30.75
    },
    {
        id: 3,
        name: "Bloodborne",
        img: "/src/img/card4.jpg",
        price: 25.80,
    },
    {
        id: 4,
        name: "Bloodborne",
        img: "/src/img/card5.jpg",
        price: 20.50,
        old_price: 45.50
    },
    {
        id: 5,
        name: "Bloodborne",
        img: "/src/img/card6.jpg",
        price: 77.00,
    },
]


let products_container = document.querySelector(".product_items");
products.map((item) => {

    const hasOldPrice = typeof item.old_price !== 'undefined';

    const product = `<div class="product_item">
    <div class="product_img">
      <img src=${item.img} alt="" />
    </div>
    <h2>${item.name}</h2>
    <div class="prices_rating">
      <div class="ratings">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div class="price">
        <p>$${item.price}</p>
        ${hasOldPrice ? `<s>$${item.old_price}</s>` : ''}
      </div>
    </div>
    <button class="product_btn">Add to Cart</button>
  </div>`

    products_container.innerHTML += product
})

// 4.Test


let user = document.querySelectorAll(".user_login_icon");
let user_container = document.querySelector(".user_container")


user.forEach((item) => {
    item.addEventListener("click", function () {
        if (user_container.style.display = "none") {
            user_container.style.display = "block"
        } else {
            user_container.style.display = "none";
        }
    })
})

// 5.Filter

// const filter_btn = document.getElementById("filter_btn");

// let myInput=document.getElementById("inpt");
// const minValue = myInput.getAttribute("min");
// const maxValue = myInput.getAttribute("max");
// const minPrice = minValue;
// const maxPrice = maxValue;
// function filterProductsByPrice(products, minPrice, maxPrice) {
//     return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
// }
// const filteredProducts = filterProductsByPrice(products, minPrice, maxPrice);

// filteredProducts.forEach(product => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${product.name} - ${product.price} TL`;
//     products_container.appendChild(listItem);
//   });