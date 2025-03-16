document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const loginOptions = document.getElementById('loginOptions');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBackButton = document.getElementById('loginBackButton');
    const goToRegister = document.getElementById('goToRegister');
    const goToLogin = document.getElementById('goToLogin');
    const heroTitle = document.getElementById('heroTitle');
    let selectedType = null;

    // Add click handlers to login type buttons
    document.querySelectorAll('.login-button').forEach(button => {
        button.addEventListener('click', () => {
            selectedType = button.dataset.type;
            loginOptions.style.display = 'none';
            loginForm.classList.add('active');
            
            const titles = {
                traveller: 'Welcome Back, Traveler',
                host: 'Welcome Back, Host',
                admin: 'Admin Portal'
            };
            heroTitle.textContent = titles[selectedType] || 'Welcome Back';
        });
    });

    // Add back button handler
    loginBackButton.addEventListener('click', () => {
        loginOptions.style.display = 'flex';
        loginForm.classList.remove('active');
        selectedType = null;
        heroTitle.textContent = 'Welcome to ShelterSeek';
    });

    // Add login form submit handler
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
    
        try {
            const response = await fetch('/loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: "signIn", email, password }), 
            });
    
            // Log the raw response for debugging
            const rawResponse = await response.text();
            console.log("Raw response:", rawResponse);
    
            // Parse the response as JSON
            const data = JSON.parse(rawResponse);
    
            // Log the parsed data for debugging
            console.log("Parsed data:", data);
            console.log("Data.data.user:", data.data.user); // Correctly access data.data.user
    
            // Check if the response is not OK (e.g., user not found or invalid password)
            if (!response.ok) {
                throw new Error(data.message || 'Invalid email or password. Please try again.');
            }
    
            // Ensure the user object exists in the response
            if (!data.data.user) {
                throw new Error('User data not found in the response.');
            }
    
            const user = data.data.user;
    
            // Check if the account type matches the selected type
            if (user.accountType === selectedType || (selectedType === 'admin' && user.isAdmin)) {
                sessionStorage.setItem('currentUser', JSON.stringify({
                    name: user.name,
                    email: user.email,
                    accountType: user.accountType,
                    isAdmin: user.isAdmin || false
                }));
    
                // Redirect based on account type
                if (user.accountType === 'host') {
                    window.location.href = '/host_index';
                } else if (user.accountType === 'admin') {
                    window.location.href = '/admin_index';
                } else {
                    window.location.href = '/';
                }
            } else {
                alert('Please select the correct account type for your login.');
            }
        } catch (err) {
            alert(err.message); // Display the error message to the user
            console.error(err);
        }
    });
    // Add register form submit handler
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const accountType = document.querySelector('input[name="accountType"]:checked').value;
    
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
    
        try {
            const response = await fetch('/loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: "signUp", name, email, password, accountType }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed. Please try again.');
            }
    
            alert('Welcome to ShelterSeek! Your account has been created successfully.');
            registerForm.reset();
            goToLogin.click();
        } catch (err) {
            alert(err.message); // Display the error message to the user
            console.error(err);
        }
    });
    // Navigation between login and register pages
    goToRegister.addEventListener('click', () => {
        loginPage.classList.add('hidden');
        registerPage.classList.remove('hidden');
        heroTitle.textContent = 'Join ShelterSeek';
        loginForm.classList.remove('active');
        loginOptions.style.display = 'flex';
        selectedType = null;
    });

    goToLogin.addEventListener('click', () => {
        registerPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
        heroTitle.textContent = 'Welcome to ShelterSeek';
        registerForm.reset();
    });
});