import homeData from '/scripts/home_list.js';
const { homes, layout_homes } = homeData;

    const categorizeSize = (size) => {
        if (typeof size === 'string') {
            // Extract the numerical value from the string (e.g., "1200 sq.feet" -> 1200)
            const numericSize = parseFloat(size);
            if (numericSize < 1500) {
                return "small";
            } else if (numericSize >= 1500 && numericSize < 3000) {
                return "medium";
            } else {
                return "large";
            }
        }
        // If size is already a categorical value, return it as is
        return size;
    };
    const updatedHomes = homes.map(home => ({
        ...home,
        size: categorizeSize(home.size),
        liked: home.liked
    }));
    
    
    // document.addEventListener("DOMContentLoaded", () => {
    let likedHomes = JSON.parse(localStorage.getItem("likedHomes")) || [];
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    
    // Search functionality
    const filterSearchButton = document.getElementById("filter-search-button");
    if (filterSearchButton) {
    filterSearchButton.addEventListener("click", function () {
        applyFilters();
    });
    }
    
    const searchButton = document.getElementById("search-button");
    if (searchButton) {
        searchButton.addEventListener("click", function () {
            applyFilters();
        });
    }
    
    // Apply filters
    function applyFilters() {
     
        const cityInput = document.getElementById("search-bar")?.value.trim().toLowerCase();
        const keywords = cityInput.split(",").map(keyword => keyword.trim());
    
        const minPrice = parseInt(document.querySelector(".min-input")?.value) || 0;
        const maxPrice = parseInt(document.querySelector(".max-input")?.value) || Infinity;
    
    
        const selectedTypes = [];
        document.querySelectorAll(".room-box.active").forEach(house => {
            selectedTypes.push(house.getAttribute("data-value"));
        });
    
    
        const selectedRoomType = document.querySelector('input[name="room"]:checked').value;
    
        // Get selected room locations
        const selectedRoomLocations = [];
        document.querySelectorAll("#room-location .select-box.active").forEach(location => {
            selectedRoomLocations.push(location.getAttribute("data-value"));
        });
    
    
        const selectedAmenities = [];
        document.querySelectorAll("#amenities .select-box.active").forEach(amenity => {
            selectedAmenities.push(amenity.getAttribute("data-value"));
        });
    
    
        const noOfDays = parseInt(document.getElementById("days").textContent);
    
    
        const selectedBedrooms = parseInt(document.getElementById("bedrooms").textContent);
    
    
        const selectedBeds = parseInt(document.getElementById("beds").textContent);
    
    
        const selectedAdults = parseInt(document.getElementById("adults").textContent);
    
    
        const selectedChildren = parseInt(document.getElementById("childrens").textContent);
    
    
        const selectedHostGender = document.querySelector('input[name="host"]:checked').value;
    
    
        const selectedFoodPreferences = [];
        document.querySelectorAll("#food-preferences .select-box.active").forEach(food => {
            selectedFoodPreferences.push(food.getAttribute("data-value"));
        });
    
    
        const selectedRoomSize = document.querySelector('input[name="room-size"]:checked').value;
    
    
        const selectedTransport = document.querySelector('input[name="room-distance"]:checked').value;
    
    
    
    
        const filteredHomes = updatedHomes.filter(home => {
            const homePrice = parseFloat(home.price);
    
            const matchesKeywords = keywords.some(keyword => {
                return (
                    home.title.toLowerCase().includes(keyword) ||
                    home.location.toLowerCase().includes(keyword)
                );
            });
    
            const matchesPrice = homePrice >= minPrice && homePrice <= maxPrice;
    
            const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => {
                return home.title.toLowerCase().includes(type);
            });
    
            const matchesRoomType = selectedRoomType === "any" || home.roomType === selectedRoomType;
    
            // Check if the room location matches any selected locations
            const matchesRoomLocation = selectedRoomLocations.length === 0 || selectedRoomLocations.some(location => {
                return home.locationType === location;
            });
    
            // Check if the amenities match any selected amenities
            const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(amenity => {
                return home.amenities.includes(amenity);
            });
    
            const matchesBedrooms = home.bedrooms >= selectedBedrooms;
    
            const matchesBeds = home.beds >= selectedBeds;
    

            const matchesAdults = home.adults >= selectedAdults;
    
            const matchesChildren = home.children >= selectedChildren;
    
            const matchesHostGender = selectedHostGender === "any" || home.hostgender === selectedHostGender;
    
            const matchesFoodPreferences = selectedFoodPreferences.length === 0 || selectedFoodPreferences.every(food => {
                return home.food === food;
            });
    
            const matchesRoomSize = selectedRoomSize === "any" || home.size === selectedRoomSize;

            const matchesTransport = selectedTransport === "any" || home.transport === selectedTransport;
    

            const matchesDays = home.maxdays >= noOfDays;
    
                return (
                matchesKeywords &&
                matchesPrice &&
                matchesType &&
                matchesRoomType &&
                matchesRoomLocation &&
                matchesAmenities &&
                matchesBedrooms &&
                matchesBeds &&
                matchesAdults &&
                matchesChildren &&
                matchesHostGender &&
                matchesFoodPreferences &&
                matchesRoomSize &&
                matchesTransport &&
                matchesDays
            );
        });
    
        displayHomes(filteredHomes);
    }
    function displayHomes(homes) {
        const container = document.getElementById("homes-container");
        container.innerHTML = ""; // Clear the container before adding new homes
    
        // Update the liked state for each home based on the likedHomes array
        homes.forEach(home => {
            home.liked = likedHomes.includes(home.id);
        });
    
        if (homes.length === 0) {
            container.innerHTML = "<p>No houses found.</p>";
            console.log("No houses found matching the filters."); // Debugging
            return;
        }
    
        homes.forEach(home => {
            addHomeToPage(home);
            console.log(`Displaying Home: ${home.title}`); // Debugging
        });
    }

    function addHomeToPage(home) {
        const container = document.getElementById("homes-container");

        const homeBlock = document.createElement("div");
        homeBlock.classList.add("home-block");
        homeBlock.setAttribute("data-home-id", home.id);

        const isBooked = bookings.some(booking => booking.homeId === home.id);
        if (isBooked) {
            const homeBlock = document.querySelector(`.home-block[data-home-id="${home.id}"]`);
            if (homeBlock) {
                homeBlock.classList.add("booked");
            }
        }
        homeBlock.innerHTML = `
            <div class="home-photos-block">
                <button id="home-like" data-home-id="${home.id}"><i class="fa fa-heart"></i></button>
                <button id="img-move-left">&lt;</button>
                <button id="img-move-right">&gt;</button>
                <div class="home-image" style="background-image: url(${home.images[0]})"></div> 
            </div>
            <hr style="opacity: 0.3;">
            <div class="home-content">
                <h3>${home.title}</h3>
                <p>Location: ${home.location}</p>
                <p class="price">${formatCurrency(home.price * (1 - home.discountPercentage / 100))}</p>
                <span class="old-price">${formatCurrency(home.price)}</span>
                <p style="color: green;font-weight: bold;">Discount : ${home.discountPercentage}% off</p>
                <p>Description: ${home.description}</p>
            </div>
        `;

        const homeImage = homeBlock.querySelector(".home-image");
        const leftButton = homeBlock.querySelector("#img-move-left");
        const rightButton = homeBlock.querySelector("#img-move-right");
        let currentImageIndex = 0;

        function showSlide(index) {
            homeImage.style.backgroundImage = `url(${home.images[index]})`;
        }

        leftButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            currentImageIndex = (currentImageIndex === 0) ? home.images.length - 1 : currentImageIndex - 1;
            showSlide(currentImageIndex);
        });

        rightButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation(); 
            currentImageIndex = (currentImageIndex === home.images.length - 1) ? 0 : currentImageIndex + 1;
            showSlide(currentImageIndex);
        });

        const likeButton = homeBlock.querySelector("#home-like");
        likeButton.classList.toggle("liked", home.liked); // Set the initial liked state

        likeButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            home.liked = !home.liked;
            likeButton.classList.toggle("liked");
            if (home.liked) {
                likedHomes.push(home.id);
            } else {
                likedHomes = likedHomes.filter(id => id !== home.id);
            }
            localStorage.setItem("likedHomes", JSON.stringify(likedHomes)); // Update localStorage
            console.log(likedHomes); // Debugging: Check if likedHomes is updated correctly
        });
        // Add click event listener to the entire home block
        homeBlock.addEventListener("click", () => {
            link.href = `/room_layout?id=${home.id}`;
            link.click();
        });

        container.appendChild(homeBlock);
    }

    function formatCurrency(number) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
    }
    
// });
// export { likedHomes};
    