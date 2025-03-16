// dashboard.js

import dataStore from './dataStore.js';
import listings from './listings.js';

const defaultListings = [
  {
    id: "1",
    name: "host1",
    email: "host1@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "2",
    name: "host2",
    email: "host2@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "3",
    name: "host3",
    email: "host3@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "4",
    name: "host4",
    email: "host4@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "5",
    name: "host5",
    email: "host5@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "6",
    name: "host1",
    email: "host1@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "7",
    name: "host2",
    email: "host2@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "8",
    name: "host3",
    email: "host3@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "9",
    name: "host4",
    email: "host4@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "10",
    name: "host5",
    email: "host5@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "11",
    name: "host1",
    email: "host1@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "12",
    name: "host2",
    email: "host2@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "13",
    name: "host3",
    email: "host3@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "14",
    name: "host4",
    email: "host4@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "15",
    name: "host5",
    email: "host5@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "16",
    name: "host1",
    email: "host1@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "17",
    name: "host2",
    email: "host2@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "18",
    name: "host3",
    email: "host3@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "19",
    name: "host4",
    email: "host4@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
  {
    id: "20",
    name: "host5",
    email: "host5@gmail.com",
    title: "Home",
    description: "Nice",
    price: "200",
    location: "bangalore",
    propertyType: "pg",
    capacity: "2",
    roomType: "any",
    bedrooms: "2",
    beds: "2",
    roomSize: "small",
    roomLocation: ["in-town"],
    transportDistance: "2km",
    hostGender: "male",
    foodFacility: "not-available",
    amenities: ["wifi", "ac"],
    discount: "37",
    images: [],
    likes: 0,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  if (!currentUser) {
      alert('Please login to view the dashboard.');
      window.location.href = '/loginweb';
      return;
  }

  // Display profile details
  document.getElementById("profile-name").textContent = currentUser.name;
  document.getElementById("profile-email").textContent = currentUser.email;
  document.getElementById("profile-account-type").textContent = currentUser.accountType;

  // Set profile picture if available
  if (currentUser.profilePic) {
      document.getElementById("profile-pic").src = currentUser.profilePic;
  }

  // Handle profile picture change
  const changeProfilePicButton = document.getElementById("change-profile-pic");
  const profilePicInput = document.createElement("input");
  profilePicInput.type = "file";
  profilePicInput.accept = "image/*";
  profilePicInput.style.display = "none";

  changeProfilePicButton.addEventListener("click", () => profilePicInput.click());

  profilePicInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              document.getElementById("profile-pic").src = e.target.result;
              const updatedUser = { ...currentUser, profilePic: e.target.result };
              sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
              showAlert("Profile picture updated successfully!", "success");
          };
          reader.readAsDataURL(file);
      }
  });

  // Handle logout
  document.querySelector('.nav-link.logout').addEventListener('click', () => {
      sessionStorage.removeItem('currentUser');
      window.location.href = '/loginweb';
  });

  // Handle bookings link click
  document.querySelector('.nav-link[href="#bookings"]').addEventListener('click', (e) => {
      e.preventDefault();

      // Toggle visibility of the bookings and earnings sections
      const bookingsSection = document.querySelector('.bookings-section');
      const earningsSection = document.querySelector('.earnings-section');
      bookingsSection.classList.remove('hidden');
      earningsSection.classList.add('hidden');

      // Display bookings data
      displayBookings(currentUser.email);
  });

  // Handle earnings link click
  document.querySelector('.nav-link[href="#earnings"]').addEventListener('click', (e) => {
      e.preventDefault();

      // Toggle visibility of the bookings and earnings sections
      const bookingsSection = document.querySelector('.bookings-section');
      const earningsSection = document.querySelector('.earnings-section');
      bookingsSection.classList.add('hidden');
      earningsSection.classList.remove('hidden');

      // Display earnings data
      displayEarnings(currentUser.email);
  });

  // Display host listings
  const allListings = [...listings, ...defaultListings.filter(defaultListing => 
    !listings.some(listing => listing.id === defaultListing.id))
  ];

  const hostName = currentUser.name;
  const hostListings = allListings.filter(listing => listing.name === hostName);
  displayListings(hostListings);

  // Function to show alerts
  function showAlert(message, type) {
      const alertDiv = document.createElement("div");
      alertDiv.className = `alert alert-${type}`;
      alertDiv.textContent = message;
      document.querySelector(".profile-container").insertBefore(alertDiv, document.querySelector(".profile-container").firstChild);
      setTimeout(() => alertDiv.remove(), 3000);
  }

  // Function to handle likes
  function handleLike(listingId) {
      const listing = listings.find(listing => listing.id === listingId);
      if (listing) {
          listing.likes += 1;
          localStorage.setItem("listings", JSON.stringify(listings));
          document.getElementById(`likes-${listingId}`).textContent = listing.likes;
      }
  }

  // Add event listeners for like buttons
  const listingsContainer = document.getElementById('listings-container');
  if (listingsContainer) {
      listingsContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('like-button')) {
              const listingId = e.target.getAttribute('data-listing-id');
              handleLike(listingId);
          }
      });
  }
});

function displayListings(listings) {
  const listingsContainer = document.getElementById('listings-container');
  if (!listingsContainer) {
      console.error("Listings container not found!");
      return;
  }

  if (listings.length === 0) {
      listingsContainer.innerHTML = "<p>No listings found.</p>";
      return;
  }

  listingsContainer.innerHTML = listings.map(listing => `
      <div class="listing-card">
          <h3>${listing.title}</h3>
          <p>${listing.description}</p>
          <p>Price: $${listing.price}</p>
          <p>Location: ${listing.location}</p>
          <p>Property Type: ${listing.propertyType}</p>
          <p>Capacity: ${listing.capacity}</p>
          <p>Bedrooms: ${listing.bedrooms}</p>
          <p>Beds: ${listing.beds}</p>
          <p>Room Size: ${listing.roomSize}</p>
          <p>Room Location: ${listing.roomLocation.join(', ')}</p>
          <p>Transport Distance: ${listing.transportDistance}</p>
          <p>Host Gender: ${listing.hostGender}</p>
          <p>Food Facility: ${listing.foodFacility}</p>
          <p>Amenities: ${listing.amenities.join(', ')}</p>
          <p>Discount: ${listing.discount}%</p>
          <p>Likes: <span id="likes-${listing.id}">${listing.likes}</span></p>
      </div>
  `).join('');
}

function displayBookings(hostEmail) {
  const bookings = dataStore.getBookingsByHost(hostEmail);
  const bookingsByMonth = dataStore.getBookingsByMonth(hostEmail);

  console.log("Bookings by Month:", bookingsByMonth); // Debugging log

  const monthlyBookingsList = document.getElementById('monthly-bookings-list');
  monthlyBookingsList.innerHTML = Object.entries(bookingsByMonth).map(([month, count]) => `
      <li>
          <span>${month}</span>
          <span>${count} bookings</span>
      </li>
  `).join('');

  renderBookingsChart(bookingsByMonth);
}

function displayEarnings(hostEmail) {
  const earningsByMonth = dataStore.getEarningsByMonth(hostEmail);

  console.log("Earnings by Month:", earningsByMonth); // Debugging log

  const monthlyEarningsList = document.getElementById('monthly-earnings-list');
  monthlyEarningsList.innerHTML = Object.entries(earningsByMonth).map(([month, earnings]) => `
      <li>
          <span>${month}</span>
          <span>$${earnings.toFixed(2)}</span>
      </li>
  `).join('');

  renderEarningsChart(earningsByMonth);
}

let bookingsChart = null; // Variable to store the bookings chart instance
let earningsChart = null; // Variable to store the earnings chart instance

function renderBookingsChart(bookingsByMonth) {
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = months.map(month => bookingsByMonth[month] || 0);

  console.log("Bookings Chart Data:", data); // Debugging log

  const ctx = document.getElementById('bookingsChart').getContext('2d');
  if (ctx) {
      // Destroy the existing chart if it exists
      if (bookingsChart) {
          bookingsChart.destroy();
      }

      // Create a new chart
      bookingsChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: months,
              datasets: [{
                  label: 'Bookings per Month',
                  data: data,
                  backgroundColor: '#d72d6e',
                  borderColor: '#d72d6e',
                  borderWidth: 1,
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true,
                      title: {
                          display: true,
                          text: 'Number of Bookings'
                      }
                  },
                  x: {
                      title: {
                          display: true,
                          text: 'Month'
                      }
                  }
              },
              plugins: {
                  legend: {
                      display: false
                  }
              }
          }
      });
  } else {
      console.error("Canvas context for bookings chart not found!");
  }
}

function renderEarningsChart(earningsByMonth) {
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = months.map(month => earningsByMonth[month] || 0);

  console.log("Earnings Chart Data:", data); // Debugging log

  const ctx = document.getElementById('earningsChart').getContext('2d');
  if (ctx) {
      // Destroy the existing chart if it exists
      if (earningsChart) {
          earningsChart.destroy();
      }

      // Create a new chart
      earningsChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: months,
              datasets: [{
                  label: 'Earnings per Month',
                  data: data,
                  backgroundColor: '#1e3a8a',
                  borderColor: '#1e3a8a',
                  borderWidth: 1,
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true,
                      title: {
                          display: true,
                          text: 'Earnings ($)'
                      }
                  },
                  x: {
                      title: {
                          display: true,
                          text: 'Month'
                      }
                  }
              },
              plugins: {
                  legend: {
                      display: false
                  }
              }
          }
      });
  } else {
      console.error("Canvas context for earnings chart not found!");
  }
}
