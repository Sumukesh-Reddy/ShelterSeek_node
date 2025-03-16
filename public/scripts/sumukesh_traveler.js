export let likedHomes = JSON.parse(localStorage.getItem("likedHomes")) || [];
import homeData from '/scripts/home_list.js';
let { layout_homes } = homeData;

document.addEventListener("DOMContentLoaded", function () {
    
    const loginLogoutText = document.getElementById("login-button");

    // Function to check if the user is logged in
    function checkLoginStatus() {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        if (currentUser) {
            loginLogoutText.textContent = "Logout"; 
        } else {
            loginLogoutText.textContent = "Login"; 
        }
    }

    // Check login status on page load
    checkLoginStatus();

    if(loginLogoutText.textContent === "Login"){
        window.addEventListener("click",()=>{
            window.location.href='/loginweb';
        })
    }
document.getElementById("user-button").addEventListener("click",()=>{
    const user_menu=document.getElementById("user-menu");
    if(user_menu.display==="block"){
        user_menu.style.display = "none"; 
    }
    else{
        user_menu.style.display = "block"; 
    }
});
document.getElementById("user-close-btn").addEventListener("click", ()=> {
    const user_menu = document.getElementById("user-menu"); 
    user_menu.style.display = "none"; 
});

document.getElementById("menubotton").addEventListener("click", ()=> {
    const menu = document.getElementById("menu"); 
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block";
    }
});
document.getElementById("close-btn").addEventListener("click", ()=> {
    const menu = document.getElementById("menu"); 
    menu.style.display = "none"; 
});


const photo = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg"
];

const photoblock = document.querySelector(".slide-2");
if(photoblock){
let i = 0;
function updateBackgroundImage() {
    photoblock.style.backgroundImage = `url(${photo[i]})`; 
}

updateBackgroundImage();
// sliding photos,below nav bar
setInterval(() => {
    i++;
    if(i === photo.length) i = 0; 
    updateBackgroundImage();
}, 3000);
}
else{
    console.log("error");
}

document.getElementById("filter-button").addEventListener("click", () => {
    const filter_menu=document.querySelector(".filter-menu");
    if (filter_menu.style.display === "none") {
        filter_menu.style.display = "flex";  
    } else {
        filter_menu.style.display = "none";  
    }
});
// no.of bedrooms
let bedroom = 1;

document.getElementById("sub-bedroom").addEventListener("click", () => {
    if (bedroom > 1) {
        bedroom -= 1;
        document.getElementById("bedrooms").innerText = bedroom;
    }
});

document.getElementById("add-bedroom").addEventListener("click", () => {
    if (bedroom < 9) {
        bedroom += 1;
        document.getElementById("bedrooms").innerText = bedroom;
    }
});


// no.of beds
let beds = 1;

document.getElementById("sub-beds").addEventListener("click", () => {
    if (beds > 1) {
        beds -= 1;
        document.getElementById("beds").innerText = beds;
    }
});

document.getElementById("add-beds").addEventListener("click", () => {
    if (beds < 9) {
        beds += 1;
        document.getElementById("beds").innerText = beds;
    }
});

// no.of days
let days = 1;
document.getElementById("sub-days").addEventListener("click", () => {
    if (days > 0) {
        days -= 1;
        document.getElementById("days").innerText = days;
    }
});

document.getElementById("add-days").addEventListener("click", () => {
    if (days < 30) {
        days += 1;
        document.getElementById("days").innerText = days;
    }
});


// no.of adults
let adults = 1;
document.getElementById("sub-adults").addEventListener("click", () => {
    if (adults > 0) {
        adults -= 1;
        document.getElementById("adults").innerText = adults;
    }
});

document.getElementById("add-adults").addEventListener("click", () => {
    if (adults < 9) {
        adults += 1;
        document.getElementById("adults").innerText = adults;
    }
});


// no.of childrens
let childrens = 1;
document.getElementById("sub-childrens").addEventListener("click", () => {
    if (childrens > 0) {
        childrens -= 1;
        document.getElementById("childrens").innerText = childrens;
    }
});

document.getElementById("add-childrens").addEventListener("click", () => {
    if (childrens < 9) {
        childrens += 1;
        document.getElementById("childrens").innerText = childrens;
    }
});



window.addEventListener("click", (event) => {
    const userMenu = document.getElementById("user-menu");
    const menu = document.getElementById("menu");
    const filterMenu = document.querySelector(".filter-menu");

    if (!userMenu.contains(event.target) && !document.getElementById("user-button").contains(event.target)) {
        userMenu.style.display = "none";
    }
    if (!menu.contains(event.target) && !document.getElementById("menubotton").contains(event.target)) {
        menu.style.display = "none";
    }
    if (!filterMenu.contains(event.target) && !document.getElementById("filter-button").contains(event.target)) {
        filterMenu.style.display = "none";
    }
});

// filter-search button
document.getElementById("filter-search-button").addEventListener("click",()=>{
    const filterMenu = document.querySelector(".filter-menu");
    filterMenu.style.display = "none";
})


// close filter button

document.getElementById("filter-close-button").addEventListener("click",()=>{
    const filterMenu=document.querySelector(".filter-menu");
    filterMenu.style.display = "none";
})


// selected rooms
let selectedRooms = [];

document.querySelectorAll('.room-box').forEach(box => {
    box.addEventListener('click', function() {
        let roomType = this.getAttribute('data-value');

        if (selectedRooms.includes(roomType)) {
            selectedRooms = selectedRooms.filter(item => item !== roomType);
            this.classList.remove('active');
        } else {
            selectedRooms.push(roomType);
            this.classList.add('active');
        }
        document.getElementById('selected-room-types').value = selectedRooms.join(',');
    });
});


// Radio Button Handling (Room Distance, Room Size, Host Gender)
document.querySelectorAll('.radio-group').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.classList.contains('radio-option')) {
            group.querySelectorAll('.radio-option').forEach(label => label.classList.remove('active'));
            event.target.classList.add('active');

            const input = event.target.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true;
            }
        }
    });

    const checkedInput = group.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        checkedInput.parentElement.classList.add('active');
    }
});

// Multi-Select Handling (Amenities, Food Preferences)
document.querySelectorAll('.multi-select').forEach(multiSelect => {
    const hiddenInput = multiSelect.nextElementSibling;
    const selectBoxes = multiSelect.querySelectorAll('.select-box');
    let selectedValues = [];
    selectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (selectedValues.includes(value)) {
                selectedValues = selectedValues.filter(item => item !== value);
                this.classList.remove('active');
            } else {
                selectedValues.push(value);
                this.classList.add('active');
            }

            hiddenInput.value = selectedValues.join(',');
        });
    });
});

// type of location
let selectedLocations = [];
document.querySelectorAll('#room-location .select-box').forEach(box => {
  box.addEventListener('click', function() {
    let location = this.getAttribute('data-value');

    if (selectedLocations.includes(location)) {
      selectedLocations = selectedLocations.filter(item => item !== location);
      this.classList.remove('active');
    } else {
      selectedLocations.push(location);
      this.classList.add('active');
    }
    document.getElementById('selected-room-location').value = selectedLocations.join(',');
  });
});

// shared room
document.querySelectorAll('.radio-group').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.classList.contains('radio-option')) {
            group.querySelectorAll('.radio-option').forEach(label => label.classList.remove('active'));
            event.target.classList.add('active');

            const input = event.target.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true;
            }
        }
    });

    const checkedInput = group.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        checkedInput.parentElement.classList.add('active');
    }
});

// price
window.onload = function () {
    loadStoredValues();
    updateSlider();
};

const minVal = document.querySelector(".min-input");
const maxVal = document.querySelector(".max-input");
const range = document.querySelector(".range-selected");
const priceInputMin = document.querySelector(".min-price");
const priceInputMax = document.querySelector(".max-price");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);
const minGap = 1500;

// Load values from localStorage if they exist
function loadStoredValues() {
    const storedMin = localStorage.getItem("priceMin");
    const storedMax = localStorage.getItem("priceMax");

    if (storedMin) minVal.value = storedMin;
    if (storedMax) maxVal.value = storedMax;

    priceInputMin.value = minVal.value;
    priceInputMax.value = maxVal.value;
}

// Update the slider when inputs change
function updateSlider() {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);

    if (maxValue - minValue < minGap) {
        if (event.target === minVal) {
            minVal.value = maxValue - minGap;
        } else {
            maxVal.value = minValue + minGap;
        }
    }

    let minPercent = ((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
    let maxPercent = ((maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

    range.style.left = minPercent + "%";
    range.style.right = (100 - maxPercent) + "%";

    priceInputMin.value = minVal.value;
    priceInputMax.value = maxVal.value;

    // Storing
    localStorage.setItem("priceMin", minVal.value);
    localStorage.setItem("priceMax", maxVal.value);
}

// Event Listeners
minVal.addEventListener("input", updateSlider);
maxVal.addEventListener("input", updateSlider);
priceInputMin.addEventListener("input", function () {
    minVal.value = this.value;
    updateSlider();
});
priceInputMax.addEventListener("input", function () {
    maxVal.value = this.value;
    updateSlider();
});


// liked rooms

// const link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);

// // rooms boxes js starts from here
// const homes = [
//     {
//         id: 1,
//         title: "Modern Apartment",
//         location: "Mumbai",
//         price: "2500",
//         description: "Beautiful home with a great view and spacious rooms.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 20,
//         roomType: "full",
//         locationType: "in-town",
//         amenities: ["wifi", "ac"],
//         bedrooms: 2,
//         beds: 3,
//         adults: 2,
//         children: 1,
//         food:"veg",
//         hostgender:"male",
//         maxdays:4
//     },
//     {
//         id: 2,
//         title: "Cozy Cottage",
//         location: "Kerala",
//         price: "1800",
//         description: "A charming cottage surrounded by nature.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 30,
//         roomType: "shared",
//         locationType: "countryside",
//         amenities: ["wifi"],
//         bedrooms: 1,
//         beds: 2,
//         adults: 1,
//         children: 0,
//         food:"no",
//         hostgender:"male",
//         maxdays:3
//     },
//     {
//         id: 3,
//         title: "Luxury Villa",
//         location: "Goa",
//         price: "1200",
//         description: "A stunning villa with a private beach and pool.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 25,
//         roomType: "full",
//         locationType: "outside-town",
//         amenities: ["wifi", "ac", "pool"],
//         bedrooms: 3,
//         beds: 4,
//         adults: 4,
//         children: 2,
//         food:"veg",
//         hostgender:"female",
//         maxdays:2
//     },
//     {
//         id: 4,
//         title: "Downtown Loft",
//         location: "Bengaluru",
//         price: "3000",
//         description: "Spacious loft in the heart of the city with modern amenities.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 15,
//         roomType: "full",
//         locationType: "in-town",
//         amenities: ["wifi", "ac", "lift"],
//         bedrooms: 2,
//         beds: 2,
//         adults: 2,
//         children: 0,
//         food:"no",
//         hostgender:"male",
//         maxdays:5
//     },
//     {
//         id: 5,
//         title: "Beach House",
//         location: "Pondicherry",
//         price: "4500",
//         description: "A beautiful beachfront property with stunning ocean views.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 10,
//         roomType: "full",
//         locationType: "outside-town",
//         amenities: ["wifi", "ac", "hotwater"],
//         bedrooms: 3,
//         beds: 4,
//         adults: 4,
//         children: 2,
//         food:"non-veg",
//         hostgender:"male",
//         maxdays:5
//     },
//     {
//         id: 6,
//         title: "Mountain Retreat",
//         location: "Himachal Pradesh",
//         price: "3500",
//         description: "A perfect getaway nestled in the mountains with breathtaking views.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 12,
//         roomType: "full",
//         locationType: "countryside",
//         amenities: ["wifi", "hotwater"],
//         bedrooms: 2,
//         beds: 3,
//         adults: 2,
//         children: 1,
//         food:"non-veg",
//         hostgender:"male",
//         maxdays:7
//     },
//     {
//         id: 7,
//         title: "Suburban House",
//         location: "Gurgaon",
//         price: "2800",
//         description: "A spacious family home in a quiet neighborhood.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 18,
//         roomType: "full",
//         locationType: "residential-area",
//         amenities: ["wifi", "ac", "car-parking"],
//         bedrooms: 3,
//         beds: 4,
//         adults: 4,
//         children: 2,
//         food:"veg",
//         hostgender:"female",
//         maxdays:3
//     },
//     {
//         id: 8,
//         title: "Penthouse Suite",
//         location: "Delhi",
//         price: "7500",
//         description: "A luxurious penthouse with panoramic city views.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 22,
//         roomType: "full",
//         locationType: "in-town",
//         amenities: ["wifi", "ac", "lift", "car-parking"],
//         bedrooms: 3,
//         beds: 3,
//         adults: 2,
//         children: 1,
//         food:"non-veg",
//         hostgender:"family",
//         maxdays:7
//     },
//     {
//         id: 9,
//         title: "Farmhouse",
//         location: "Punjab",
//         price: "2300",
//         description: "A traditional farmhouse with acres of land and fresh air.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 17,
//         roomType: "full",
//         locationType: "countryside",
//         amenities: ["wifi", "hotwater"],
//         bedrooms: 4,
//         beds: 5,
//         adults: 6,
//         children: 3,
//         food:"veg",
//         hostgender:"family",
//         maxdays:7
//     },
//     {
//         id: 10,
//         title: "Lakefront Cabin",
//         location: "Uttarakhand",
//         price: "2000",
//         description: "A cozy cabin on the lake, perfect for relaxing weekends.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 14,
//         roomType: "shared",
//         locationType: "countryside",
//         amenities: ["wifi"],
//         bedrooms: 1,
//         beds: 2,
//         adults: 2,
//         children: 0,
//         food:"veg",
//         hostgender:"family",
//         maxdays:1
//     },
//     {
//         id: 11,
//         title: "Hilltop Mansion",
//         location: "Rajasthan",
//         price: 6000,
//         description: "A magnificent mansion on top of a hill with expansive views.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 30,
//         roomType: "full",
//         locationType: "countryside",
//         amenities: ["wifi", "ac", "pool", "car-parking"],
//         bedrooms: 5,
//         beds: 6,
//         adults: 6,
//         children: 3,
//         food:"non-veg",
//         hostgender:"male",
//         maxdays:1
//     },
//     {
//         id: 12,
//         title: "Contemporary House",
//         location: "Hyderabad",
//         price: 3500,
//         description: "Sleek and modern house with floor-to-ceiling windows.",
//         images: ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg"],
//         liked: false,
//         discountPercentage: 18,
//         roomType: "full",
//         locationType: "residential-area",
//         amenities: ["wifi", "ac", "lift"],
//         bedrooms: 3,
//         beds: 3,
//         adults: 3,
//         children: 1,
//         food:"non-veg",
//         hostgender:"female",
//         maxdays:1
//     },
// ]; 

// // Loop through each home and add it to the page
// homes.forEach(home => addHomeToPage(home));

// function addHomeToPage(home) {
//     const container = document.getElementById("homes-container");

//     const homeBlock = document.createElement("div");
//     homeBlock.classList.add("home-block");

//     homeBlock.innerHTML = `
//         <div class="home-photos-block">
//         <button id="home-like" data-home-id="${home.id}"><i class="fa fa-heart"></i></button>
//             <button id="img-move-left">&lt;</button>
//             <button id="img-move-right">&gt;</button>
//             <div class="home-image" style="background-image: url(${home.images[0]})"></div> 
//         </div>
//         <hr style="opacity: 0.3;">
//         <div class="home-content">
//             <h3>${home.title}</h3>
//             <p>Location: ${home.location}</p>
//             <p class="price">${formatCurrency(home.price * (1 - home.discountPercentage / 100))}</p>
//             <span class="old-price">${formatCurrency(home.price)}</span>
//             <p style="color: green;font-weight: bold;">Discount : ${home.discountPercentage}% off</p>
//             <p>Description: ${home.description}</p>
//         </div>
//     `;

//     const homeImage = homeBlock.querySelector(".home-image");
//     const leftButton = homeBlock.querySelector("#img-move-left");
//     const rightButton = homeBlock.querySelector("#img-move-right");
//     let currentImageIndex = 0;

//     function showSlide(index) {
//         homeImage.style.backgroundImage = `url(${home.images[index]})`;
//     }

//     leftButton.addEventListener("click", (event) => {
//         event.preventDefault(); 
//         event.stopPropagation();
//         currentImageIndex = (currentImageIndex === 0) ? home.images.length - 1 : currentImageIndex - 1;
//         showSlide(currentImageIndex);
//     });

//     rightButton.addEventListener("click", (event) => {
//         event.preventDefault(); 
//         event.stopPropagation(); 
//         currentImageIndex = (currentImageIndex === home.images.length - 1) ? 0 : currentImageIndex + 1;
//         showSlide(currentImageIndex);
//     });

//     const likeButton = homeBlock.querySelector("#home-like");
//         likeButton.classList.toggle("liked", home.liked); // Set the initial liked state

//         likeButton.addEventListener("click", (event) => {
//             event.preventDefault(); 
//             event.stopPropagation();
//             home.liked = !home.liked;
//             likeButton.classList.toggle("liked");
//             if (home.liked) {
//                 likedHomes.push(home.id);
//             } else {
//                 likedHomes = likedHomes.filter(id => id !== home.id);
//             }
//             localStorage.setItem("likedHomes", JSON.stringify(likedHomes)); // Update localStorage
//             console.log(likedHomes); // Debugging: Check if likedHomes is updated correctly
//         });
//     // Add click event listener to the entire home block
//     homeBlock.addEventListener("click", () => {
//         link.href = `room_layout.html?id=${home.id}`;
//         link.click();
//     });

//     container.appendChild(homeBlock);
// }
// function formatCurrency(number) {
//     return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
// }
//  });

//  // In sumukesh_traveler.js or sorted_houses.js
// document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const paymentSuccess = urlParams.get('paymentSuccess');
//     const homeId = urlParams.get('id');

//     if (paymentSuccess === "true" && homeId) {
//         // Mark the home as rented in localStorage
//         let rentedHomes = JSON.parse(localStorage.getItem("rentedHomes")) || [];
//         rentedHomes.push(homeId);
//         localStorage.setItem("rentedHomes", JSON.stringify(rentedHomes));

//         // Blur the rented home block
//         const homeBlock = document.querySelector(`.home-block[data-home-id="${homeId}"]`);
//         if (homeBlock) {
//             homeBlock.style.opacity = "0.5";
//             homeBlock.style.pointerEvents = "none"; // Disable further interactions
//         }

//         // Add the home to the user's history
//         let userHistory = JSON.parse(localStorage.getItem("userHistory")) || [];
//         const home = homes.find(h => h.id === parseInt(homeId));
//         if (home) {
//             userHistory.push(home);
//             localStorage.setItem("userHistory", JSON.stringify(userHistory));
//         }
//     }

});
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ShelterSeek'
    }).addTo(map);

    // Add markers for each home
    layout_homes.forEach(home => {
        L.marker([home.host.latitude, home.host.longitude]).addTo(map)
            .bindPopup(`
                <b>${home.host.name}</b><br>
                Location: ${home.location}<br>
            `);
    });
});
// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; 
        document.body.style.overflow = "hidden"; 
    }
}

window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none"; 
        document.body.style.overflow = "auto";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    
    const destinationButtons = document.querySelectorAll(".destination-card .btn");
    destinationButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const destination = this.closest(".destination-card").querySelector("h3").textContent.toLowerCase();
            openModal(`${destination}-modal`);
        });
    });

    const testimonialButtons = document.querySelectorAll(".testimonial-card .btn");
    testimonialButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const testimonialName = this.closest(".testimonial-card").querySelector("h3").textContent.toLowerCase().replace(/ /g, "-");
            openModal(`${testimonialName}-modal`);
        });
    });
    const blogButtons = document.querySelectorAll(".blog-card .btn");
blogButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const blogTitle = this.closest(".blog-card").querySelector("h3").textContent.toLowerCase().replace(/ /g, "-");
        openModal(`${blogTitle}-modal`);
    });
});
// Optional: Add event listeners to close modals when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
});