document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please log in to view your profile.");
        window.location.href = "/loginweb";
    } else {
        // Populate profile details
        document.getElementById("profile-name").textContent = currentUser.name;
        document.getElementById("profile-email").textContent = currentUser.email;
        document.getElementById("profile-account-type").textContent = currentUser.accountType;

        // Set profile picture if available
        if (currentUser.profilePic) {
            document.getElementById("profile-pic").src = currentUser.profilePic;
        }

        // Set login/logout button text correctly
        const loginLogoutButton = document.getElementById("login-logout-text");
        if (loginLogoutButton) {
            loginLogoutButton.textContent = "Logout";
        }
    }

    // Handle logout
    const logoutButton = document.getElementById("login-logout-text");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            sessionStorage.removeItem("currentUser");
            window.location.href = "/";
        });
    }

    // Handle profile picture change
    const changeProfilePicButton = document.getElementById("change-profile-pic");
    if (changeProfilePicButton) {
        const profilePicInput = document.createElement("input");
        profilePicInput.type = "file";
        profilePicInput.accept = "image/*";
        profilePicInput.style.display = "none";

        changeProfilePicButton.addEventListener("click", function () {
            profilePicInput.click();
        });

        profilePicInput.addEventListener("change", function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById("profile-pic").src = e.target.result;
                    // Update the currentUser object in sessionStorage
                    const updatedUser = { ...currentUser, profilePic: e.target.result };
                    sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));
                    showAlert("Profile picture updated successfully!", "success");
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Handle delete account
    const deleteAccountButton = document.getElementById("delete-account");
    if (deleteAccountButton) {
        deleteAccountButton.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                sessionStorage.removeItem("currentUser");
                window.location.href = "/";
            }
        });
    }

    // Function to show alerts
    function showAlert(message, type) {
        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        document.querySelector(".profile-container").insertBefore(alertDiv, document.querySelector(".profile-container").firstChild);
        setTimeout(() => alertDiv.remove(), 3000);
    }
});