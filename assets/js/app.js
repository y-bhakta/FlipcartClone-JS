// ----- Header Like Slider Start(Menus) -----
let menus = document.querySelectorAll('.menus');
let menus1 = document.getElementById('menus1');
let width1 = menus1.offsetWidth;
menus.forEach((menu, index) => {
    menu.style.left = `${index * width1}px`;
});
// ----- Header Like Slider End(Menus) -----
// ----- Banner Slider Start -----
let items = document.querySelectorAll('.slide-item');
let currentindex = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let boxs = document.querySelectorAll('.box');
function removeactive() {
    items.forEach(item => item.classList.remove('active'));
    boxs.forEach(item => item.classList.remove('active2'));
}
const prevslide = () => {
    currentindex = (currentindex - 1 + items.length) % items.length;
    removeactive();
    items[currentindex].classList.add('active');
    boxs[currentindex].classList.add('active2');
};
const nextslide = () => {
    currentindex = (currentindex + 1) % items.length;
    removeactive();
    items[currentindex].classList.add('active');
    boxs[currentindex].classList.add('active2');
};
setInterval(nextslide, 3000);
// ----- Banner Slider End -----
// ----- Slider Plane Section Start -----
const slides = document.querySelectorAll('.slide');
var counter = 0;
let slide1 = document.getElementById('slide1');
let width2 = slide1.offsetWidth;
let prevbtn = document.getElementById('prevbtn');
let nextbtn = document.getElementById('nextbtn');
slides.forEach((slide, index) => {
    slide.style.left = `${index * width2}px`;
});
const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * width2}px)`;
    });
}
const gonext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideimg();
}
const goprev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideimg();
}
// ----- Slider Plane Section End -----
// ----- Products Details Start -----
let products = null;
fetch('./details/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        // console.log(products);
        adddatatohtml();
    });
let productlist = document.querySelector('.product-list');
function adddatatohtml() {
    products.forEach((product, index) => {
        let col = document.createElement("div");
        if (index == 0) col.setAttribute('id', 'product1');
        col.classList.add("card-slide1");
        //Create cart wrapper for each cart 
        let cart = document.createElement('div'); //one div for bg color or target each cart
        cart.classList.add('cart');
        // create new element item for redirect to another page
        let newProduct = document.createElement('a');
        newProduct.href = `./details/details.html?id=${product.id}`;
        newProduct.setAttribute('target','_blank');
        newProduct.classList.add('item');
        // Show data 
        newProduct.innerHTML = `
    
      <div class="item-image d-flex justify-content-center">
        <img class="object-fit-cover" src="${product.image}" alt="${product.name}">
      </div>
      <div class="item-details py-2">
        <h3>${product.name}</h3>
        <span class="price me-4 text-success fw-bold">${product.price}</span>
      </div>
    `;
        cart.appendChild(newProduct); // put product in cart
        col.appendChild(cart);        // put cart in column
        productlist.appendChild(col); // put column in row
        document.getElementById('Prevp').addEventListener('click', () => {
            productlist.scrollBy({left:-200,behavior:'smooth'});
        });
        document.getElementById('Nextp').addEventListener('click', () => {
            productlist.scrollBy({left:200,behavior:'smooth'});
        });
    });
}
// ----- Products Details End -----
// ----- Slider 2 Start -----
const slides2 = document.querySelectorAll('.slide2');
var counter1 = 0;
let slide12 = document.getElementById('slide12');
let width21 = slide1.offsetWidth;
let prevbtn1 = document.getElementById('prevbtn1');
let nextbtn2 = document.getElementById('nextbtn2');
slides2.forEach((slide, index) => {
    slide.style.left = `${index * width21}px`;
});
const slideimg1 = () => {
    slides2.forEach((slide) => {
        slide.style.transform = `translateX(-${counter1 * width2}px)`;
    });
}
const gonext1 = () => {
    counter1++;
    if (counter1 >= slides2.length) {
        counter1 = 0;
    }
    slideimg1();
}
const goprev1 = () => {
    counter1--;
    if (counter1 < 0) {
        counter1 = slides2.length - 1;
    }
    slideimg1();
}
// ----- Slider 2 End -----
// ----- Products Details Start -----
let products2 = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products2 = data;
        console.log(products2);
        adddatatohtml2(products2);
    });
let productlist2 = document.querySelector('.product-list2');
function adddatatohtml2(products2) {
    productlist2.innerHTML='';
    products2.forEach((product, index) => {
        let col = document.createElement("div");
        if (index == 0) col.setAttribute('id', 'product2');
        col.classList.add("card-slide1");
        //Create cart wrapper for each cart 
        let cart = document.createElement('div'); //one div for bg color or target each cart
        cart.classList.add('cart');
        // create new element item for redirect to another page
        let newProduct = document.createElement('a');
        newProduct.classList.add('item');
        newProduct.href='#';
        // Show data 
        newProduct.innerHTML = `
    
      <div class="item-image d-flex justify-content-center">
        <img class="object-fit-cover" src="${product.image}" alt="${product.name}">
      </div>
      <div class="item-details py-2">
        <h3>${product.category}</h3>
        <span class="price me-4 text-success fw-bold">${product.price}</span>
      </div>
    `;
        cart.appendChild(newProduct); // put product in cart
        col.appendChild(cart);        // put cart in column
        productlist2.appendChild(col); // put column in row
        document.getElementById('Prevp2').addEventListener('click', () => {
            productlist2.scrollBy({left:-200,behavior:'smooth'});
        });
        document.getElementById('Nextp2').addEventListener('click', () => {
            productlist2.scrollBy({left:200,behavior:'smooth'});
        });
    });
}
document.getElementById('search').addEventListener('input',(e)=>{
    let searchstr=e.target.value;
    let data=products2.filter((product)=>{
        if(product.category.toLowerCase().includes(searchstr.toLowerCase())){
            return product;
        }else if(product.price.toString().toLowerCase().includes(searchstr.toLowerCase())){
            return product;
        }
    });
    console.log(data);    
    adddatatohtml2(data);
});
// ----- Products Details End -----
// ----- Slider 3 Start -----
let slides3 = document.querySelectorAll('.slide3');
var counter2 = 0;
let slide13 = document.getElementById('slide13');
let width3 = slide13.offsetWidth;
let prevbtn2 = document.getElementById('prevbtn2');
let nextbtn3 = document.getElementById('nextbtn3');
slides3.forEach((slide, index) => {
    slide.style.left = `${index * width3}px`;
});
const slideimg2 = () => {
    slides3.forEach((slide) => {
        slide.style.transform = `translateX(-${counter2 * width3}px)`;
    });
}
const gonext2 = () => {
    counter2++;
    if (counter2 >= slides3.length) {
        counter2 = 0;
    }
    slideimg2();
}
const goprev2 = () => {
    counter2--;
    if (counter2 < 0) {
        counter2 = slides3.length - 1;
    }
    slideimg2();
}
// ----- Slider 3 End -----