
import homeData from '/scripts/home_list.js';

let { homes } = homeData;

document.addEventListener("DOMContentLoaded", () => {
    let likedHomes = JSON.parse(localStorage.getItem("likedHomes")) || [];
    const sent = [
        "Lets Connect To Each Other",
        "Let's confirm our room booking for the day",
        "Let’s secure a room for our gathering",
        "Let's link up and connect",
        "Let's come together and bond",
        "How about we connect and share ideas?",
        "Let's get together and connect",
        "Let's establish a connection between us",
    ];

    var sen = document.getElementById("wishlist-span-1");
    var i = 0;

    function changeSentence() {
        if (sen) {
            sen.innerText = sent[i];
            i++;
            if (i === sent.length) i = 0;
        }
    }

    if (sen) {
        setInterval(changeSentence, 2000);
    }

    // Create a link element for navigation (if needed)
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    // Display liked homes
    let likedRoomsContainer = document.getElementById("likedrooms");

    if (likedRoomsContainer) {
        homes.forEach((home) => {
            if (likedHomes.includes(home.id)) {
                addHomeToPage(home);
            }
        });
    }

    function addHomeToPage(home) {
        const container = document.getElementById("likedrooms"); // Ensure this matches the container ID
        const homeBlock = document.createElement("div");
        homeBlock.classList.add("home-block");

        homeBlock.innerHTML = `
            <div class="home-photos-block">
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
        // Add click event listener to the entire home block
        homeBlock.addEventListener("click", () => {
            link.href = `/room_layout?id=${home.id}`;
            link.click();
        });

        container.appendChild(homeBlock);
    }

    console.log("liked"+likedHomes); // Debugging: Check if the container is found
});

function formatCurrency(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
}