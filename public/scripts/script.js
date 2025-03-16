// Discount range slider functionality
const discountRange = document.getElementById('discount');
const discountValue = document.getElementById('discount-value');
const loginLogoutText = document.getElementById("login-button");

// window.addEventListener('click',()=>{

// })
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

if (loginLogoutText.textContent === "Login") {
    window.addEventListener("click", () => {
        window.location.href = "/loginweb";
    });
}

discountRange.addEventListener('input', (e) => {
    const value = e.target.value;
    discountValue.textContent = `${value}%`;
});

// Form submission handling
const form = document.getElementById('listing-form');
const mediaInput = document.getElementById('media');
const mediaPreview = document.getElementById('media-preview');
const uploadContainer = document.querySelector('.upload-container');

// State
let selectedMedia = [];

// Toggle filter dropdowns
function toggleFilter(filterId) {
    const filterElement = document.getElementById(filterId);
    const isVisible = filterElement.style.display === 'block';

    // Close all filters first
    document.querySelectorAll('.filter-options').forEach(el => {
        el.style.display = 'none';
    });

    // Toggle the clicked filter
    filterElement.style.display = isVisible ? 'none' : 'block';
}

// Handle media uploads
function handleMediaUpload(files) {
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                img.alt = 'Preview';
                previewItem.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                video.className = 'preview-video';
                previewItem.appendChild(video);
            }

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-image';
            removeButton.innerHTML = '×';
            removeButton.onclick = () => {
                previewItem.remove();
                selectedMedia = selectedMedia.filter(item => item.url !== e.target.result);
            };

            previewItem.appendChild(removeButton);
            mediaPreview.appendChild(previewItem);

            selectedMedia.push({
                file: file,
                url: e.target.result
            });
        };
        reader.readAsDataURL(file);
    });
}

// Function to get the user's current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Populate the latitude and longitude fields
                document.getElementById('latitude').value = latitude;
                document.getElementById('longitude').value = longitude;
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location. Please enter it manually.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser. Please enter your location manually.");
    }
}

// Call the function to get location when the page loads
window.onload = getLocation;

// File input change handler
mediaInput.addEventListener('change', (e) => {
    handleMediaUpload(e.target.files);
});

// Drag and drop handlers
uploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadContainer.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', () => {
    uploadContainer.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadContainer.classList.remove('dragover');
    handleMediaUpload(e.dataTransfer.files);
});

// Form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    const newListing = {
        id: `host-${Date.now()}`, // Generate a unique ID
        name: currentUser.name,
        email: currentUser.email,
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        location: formData.get("locationName"),
        propertyType: formData.get("propertyType"),
        capacity: formData.get("capacity"),
        roomType: formData.get("roomType"),
        bedrooms: formData.get("bedrooms"),
        beds: formData.get("beds"),
        roomSize: formData.get("roomSize"),
        roomLocation: Array.from(formData.getAll("roomLocation")),
        transportDistance: formData.get("transportDistance"),
        hostGender: formData.get("hostGender"),
        foodFacility: formData.get("foodFacility"),
        amenities: Array.from(formData.getAll("amenities")),
        discount: formData.get("discount"),
        images: [], // Add image handling logic if needed
        likes: 0,
    };

    // Get existing listings from localStorage
    const listings = JSON.parse(localStorage.getItem("listings")) || [];

    // Add the new listing
    listings.push(newListing);

    // Save updated listings back to localStorage
    localStorage.setItem("listings", JSON.stringify(listings));

    // Notify the user
    alert("Listing submitted successfully!");

    // Reset the form
    e.target.reset();
    document.getElementById("media-preview").innerHTML = "";
    document.getElementById("discount-value").textContent = "0%";

    // Reload the page to reflect changes
    window.location.reload();
});

// User menu functionality
document.getElementById("user-button").addEventListener("click", () => {
    const userMenu = document.getElementById("user-menu");
    userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
});

document.getElementById("user-close-btn").addEventListener("click", () => {
    document.getElementById("user-menu").style.display = "none";
});

// Sliding Photos Functionality
const photoArray = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg"
];

const photoBlock = document.querySelector(".slide-2");
let currentIndex = 0;

function updateBackgroundImage() {
    if (photoBlock) {
        photoBlock.style.backgroundImage = `url(${photoArray[currentIndex]})`;
    }
}

updateBackgroundImage();

// Change the background image every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % photoArray.length;
    updateBackgroundImage();
}, 3000);

const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ShelterSeek'
}).addTo(map);

function addCurrentLocationMarker() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
                    .bindPopup("Your Room 🏠")
                    .openPopup();

                // Optionally, you can pan the map to the user's location
                map.setView([userLat, userLng], 13); // Zoom level 13 for a closer view
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Call the function to add the current location marker
addCurrentLocationMarker();