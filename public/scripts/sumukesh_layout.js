// Sample data for layout_homes
import homeData from '/scripts/home_list.js';
let likedHomes = JSON.parse(localStorage.getItem("likedHomes")) || [];

let { homes, layout_homes } = homeData;
// Function to update amenities verification
function updateAmenitiesVerification(home) {
    for (const [amenity, isVerified] of Object.entries(home.amenities)) {
        const elementId = `${amenity}-verify`;
        const element = document.getElementById(elementId);

        if (element) {
            element.textContent = isVerified ? "Verified" : "Not Verified";
            element.style.color = isVerified ? "green" : "red";
        }
    }
}

// Function to generate star ratings
function generateStars(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }
    if (halfStar) {
        starsHTML += `<i class="fa fa-star-half-o" aria-hidden="true"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
    }

    return starsHTML;
}

// Function to display reviews
function displayReview(rev) {
    const reviewMainBlock = document.querySelector(".review-main");
    if (!reviewMainBlock) return;

    const reviewBlock = document.createElement("div");
    reviewBlock.classList.add("review-block");

    const starsHTML = generateStars(rev.rating);

    reviewBlock.innerHTML = `
        <div class="review-content">
            <img class="review-image" src="${rev.image}" alt="user photo">
            <div class="review-text">
                <h5 class="review-name">${rev.name}</h5>
                <div class="stars">${starsHTML}</div>
                <span class="review-description" style="font-size: small;">${rev.review}</span>
            </div>
        </div>
    `;

    reviewMainBlock.appendChild(reviewBlock);
}

// Function to calculate and display average rating
function calculateAverageRating(home) {
    let rating_sum = 0;
    home.review_main.forEach(rev => {
        rating_sum += rev.rating;
    });
    const averageRating = rating_sum / home.review_main.length;
    return averageRating.toFixed(1);
}

function displayAverageRating(home) {
    const averageRating = calculateAverageRating(home);
    const avgStarsDiv = document.getElementById("avg-stars");
    if (avgStarsDiv) {
        avgStarsDiv.innerHTML = generateStars(averageRating);
    }
}

// Function to calculate rent based on dates
function calculateRent(home) {
    const checkInInput = document.getElementById("check-in");
    const checkOutInput = document.getElementById("check-out");
    const rentButton = document.getElementById("rent-button");

    if (checkInInput && checkOutInput && rentButton) {
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);

        if (checkInDate && checkOutDate && checkOutDate > checkInDate) {
            const timeDiff = checkOutDate - checkInDate;
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate number of days

            if (days > home.maxdays) {
                rentButton.textContent = "Select valid days";
                rentButton.disabled = true;
            } else {
                const pricePerNight = parseFloat(home.price); // Get price from home data
                const totalCost = days * pricePerNight * (1 - home.discountPercentage / 100); // Calculate total cost
                rentButton.textContent = `Rent Now for ₹${totalCost}`; // Update button text
                rentButton.disabled = false; // Enable the button
            }
        } else {
            rentButton.textContent = "Select valid dates";
            rentButton.disabled = true; // Disable the button
        }
    }
}
// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const homeId = parseInt(params.get("id"));
    const home = layout_homes.find(h => h.id === homeId);

    const layoutHtmlDetails = document.getElementById("home-details");

    if (home && layoutHtmlDetails) {
        const discountedPrice = parseFloat(home.price) * (1 - home.discountPercentage / 100);
        const originalPrice = parseFloat(home.price);

        // Set page title
        document.title = `${home.title} - ${home.location}`;

        // Render home details
        layoutHtmlDetails.innerHTML = `
            <div class="home-name">
                <h1 style="color:#d72d6e">${home.title}</h1>
                <div class="share-button-div">
                    <button id="share-button"><i class="fa fa-share-alt" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="dynamic-layout-img" id="dynamic-layout-img">
                <button id="img-move-left">&lt;</button>
                <button id="img-move-right">&gt;</button>
            </div>
            <div class="container">
                <div class="left-side">
                    <div class="layout-description">
                        <h2 style="color:#d72d6e">Description</h2>
                        <p>${home.description}</p>
                    </div>
                    <div class="verification">
                        <h2 style="color:#d72d6e">Amenities</h2>
                        <ul class="amenities-list">
                            <li><span class="amenity-name">Wifi</span> <span class="separator">:</span> <span id="wifi-verify">Pending</span></li>
                            <li><span class="amenity-name">AC</span> <span class="separator">:</span> <span id="ac-verify">Pending</span></li>
                            <li><span class="amenity-name">Laundry</span> <span class="separator">:</span> <span id="laundry-verify">Pending</span></li>
                            <li><span class="amenity-name">Hot Water</span> <span class="separator">:</span> <span id="hotWater-verify">Pending</span></li>
                            <li><span class="amenity-name">Taps</span> <span class="separator">:</span> <span id="taps-verify">Pending</span></li>
                            <li><span class="amenity-name">Lift</span> <span class="separator">:</span> <span id="lift-verify">Pending</span></li>
                            <li><span class="amenity-name">Car Parking</span> <span class="separator">:</span> <span id="carParking-verify">Pending</span></li>
                            <li><span class="amenity-name">EV Charging</span> <span class="separator">:</span> <span id="EvCharging-verify">Pending</span></li>
                            <li><span class="amenity-name">Electricity</span> <span class="separator">:</span> <span id="Electricity-verify">Pending</span></li>
                        </ul>
                    </div>
                    <div class="room-information">
                        <h2 style="color:#d72d6e">Room Information</h2>
                        <ul class="amenities-list">
                            <li><span class="amenity-name">Type of Host<span style="margin-left:4vw">:</span><span style="color:#d72d6e;margin-left:1vw">${home.host.gen.toUpperCase()}</span></span></li>
                            <li><span class="amenity-name">Food<span style="margin-left:7.9vw">:</span ><span style="color:#d72d6e;margin-left:1vw">${home.host.food.toUpperCase()}</span></span></li>
                            <li><span class="amenity-name">Room Location<span style="margin-left:2.6vw">:</span ><span style="color:#d72d6e;margin-left:1vw">${home.locationType.toUpperCase()}</span></span></li>
                            <li><span class="amenity-name">Room Size:<span style="margin-left:4.6vw">:</span ><span style="color:#d72d6e;margin-left:1vw">${home.size}</span></span></li>
                            <li><span class="amenity-name">Nearest Transport:<span style="margin-left:0.8vw">:</span ><span style="color:#d72d6e;margin-left:1vw">${home.transport.toUpperCase()}</span></span></li>
                        </ul>
                    </div>
                </div>
                <div class="right-side">
                    <div class="rent">
                        <h2 style="color: #d72d6e;">Book Your Stay</h2>
                        <p><strong>Cost:</strong> <span id="cost">${formatCurrency(home.price * (1 - home.discountPercentage / 100))}</span> / night</p>
                        <p><strong>Rating:</strong> <span id="rating">${calculateAverageRating(home)}</span> / 5</p>
                        <div id="avg-stars"></div>
                        <p><strong> Maximum Days:</strong><span >  ${home.maxdays} Days</span>
                        <label for="check-in">Check-in Date:</label>
                        <input type="date" id="check-in" name="check-in">
                        <label for="check-out">Check-out Date:</label>
                        <input type="date" id="check-out" name="check-out">
                        <button id="rent-button">Rent Now</button>
                         <button id="save-button" data-home-id="${home.id}"></button>
                    </div>
                    <div class="host">
                        <img src="${home.host.image}" alt="Host Photo" class="host-photo">
                        <div class="host-details">
                            <h3>Hosted by ${home.host.name}</h3>
                            <p>${home.host.yearsWithUs} years with us</p>
                            <button id="message">Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map"></div>
            <hr style="opacity:0.2;">
            <div class="review-main" style="margin-left: 5vw;">
                <h2 style="color:#d72d6e">Review from our Users</h2>
            </div>
        `;

        // Update amenities verification
        updateAmenitiesVerification(home);

        // Display average rating
        displayAverageRating(home);

        // Display reviews
        home.review_main.forEach(rev => displayReview(rev));

        // Image navigation
        const photoblock = document.getElementById("dynamic-layout-img");
        const leftButton = document.getElementById("img-move-left");
        const rightButton = document.getElementById("img-move-right");
        let i = 0;

        function updateMedia() {
            if (home.media.length === 0) return;
            photoblock.style.backgroundImage = `url(${home.media[i]})`;
        }

        leftButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            i = (i === 0) ? home.media.length - 1 : i - 1;
            updateMedia();
        });

        rightButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            i = (i + 1) % home.media.length;
            updateMedia();
        });

        // Initialize the like button
        const likeButton = document.getElementById("save-button");
        const isLiked = likedHomes.includes(home.id);

        // Set the initial text of the button
        if (isLiked) {
            likeButton.innerText = "Remove from Wishlist";
        } else {
            likeButton.innerText = "Save for Later";
        }

        // Set the initial state of the button
        likeButton.classList.toggle("liked", isLiked);

        // Add event listener for the like button
        likeButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const isLiked = likedHomes.includes(home.id);

            if (isLiked) {
                // Remove the home ID from the array
                likedHomes = likedHomes.filter(id => id !== home.id);
                likeButton.innerText = "Save for Later";
            } else {
                // Add the home ID to the array
                likedHomes.push(home.id);
                
                likeButton.innerText = "Remove from Wishlist";
            }

            // Toggle the "liked" class
            likeButton.classList.toggle("liked", !isLiked);

            // Update localStorage with the new likedHomes array
            localStorage.setItem("likedHomes", JSON.stringify(likedHomes));

            console.log("Updated likedHomes:", likedHomes); // Debugging
            
            
        });
        document.getElementById("rent-button").addEventListener("click", function () {
            const checkInInput = document.getElementById("check-in");
            const checkOutInput = document.getElementById("check-out");
        
            const checkInDate = new Date(checkInInput.value);
            const checkOutDate = new Date(checkOutInput.value);
        
            if (checkInDate && checkOutDate && checkOutDate > checkInDate) {
                const timeDiff = checkOutDate - checkInDate;
                const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Calculate number of days
        
                if (days <= home.maxdays) {
                    // Redirect to payment page with home ID and dates
                    window.location.href = `/payment?id=${home.id}&checkIn=${checkInInput.value}&checkOut=${checkOutInput.value}`;
                } else {
                    alert("Select valid days within the maximum allowed days.");
                }
            } else {
                alert("Select valid dates.");
            }
        });
        
        const messageButton = document.getElementById("message");        
        if (messageButton) {
            console.log("Message button found!"); 
            messageButton.addEventListener("click", () => {
                console.log("Message button clicked!"); 
                window.location.href = `/message?hostId=${home.host.name}`;
            });
        } else {
            console.error("Message button not found!"); // Debugging log
        }
        updateMedia();

        // Rent calculation
        const checkInInput = document.getElementById("check-in");
        const checkOutInput = document.getElementById("check-out");

        if (checkInInput && checkOutInput) {
            checkInInput.addEventListener("change", () => calculateRent(home));
            checkOutInput.addEventListener("change", () => calculateRent(home));
        }
    } else {
        layoutHtmlDetails.innerHTML = "<p>Home not found.</p>";
    }

    // Map initialization
    const map = L.map('map').setView([home.host.latitude, home.host.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ShelterSeek'
    }).addTo(map);

    L.marker([home.host.latitude, home.host.longitude]).addTo(map)
        .bindPopup("Your Room 🏠")
        .openPopup();

    function formatCurrency(number) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
    }
});