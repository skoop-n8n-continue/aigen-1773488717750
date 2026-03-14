// Mall Store Database
const mallData = {
    stores: [
        // Level 1
        { id: 1, name: 'Nike', category: 'Sports', floor: 1, location: 'L1-A1', hours: '10AM - 9PM', categoryFull: 'Athletic Apparel' },
        { id: 2, name: 'Zara', category: 'Fashion', floor: 1, location: 'L1-A2', hours: '10AM - 9PM', categoryFull: 'Clothing & Accessories' },
        { id: 3, name: 'Starbucks', category: 'Food', floor: 1, location: 'L1-B1', hours: '8AM - 10PM', categoryFull: 'Coffee & Beverages' },
        { id: 4, name: 'Apple Store', category: 'Tech', floor: 1, location: 'L1-C1', hours: '10AM - 8PM', categoryFull: 'Electronics & Computers' },
        { id: 5, name: 'H&M', category: 'Fashion', floor: 1, location: 'L1-C2', hours: '10AM - 9PM', categoryFull: 'Clothing & Accessories' },
        { id: 6, name: 'Subway', category: 'Food', floor: 1, location: 'L1-B2', hours: '10AM - 10PM', categoryFull: 'Sandwich Shop' },
        { id: 7, name: 'Best Buy', category: 'Tech', floor: 1, location: 'L1-D1', hours: '10AM - 9PM', categoryFull: 'Electronics & Home Appliances' },
        { id: 8, name: 'Bath & Body Works', category: 'Beauty', floor: 1, location: 'L1-D2', hours: '10AM - 9PM', categoryFull: 'Personal Care & Beauty' },

        // Level 2
        { id: 9, name: 'Gucci', category: 'Luxury', floor: 2, location: 'L2-A1', hours: '11AM - 8PM', categoryFull: 'Luxury Fashion' },
        { id: 10, name: 'Sephora', category: 'Beauty', floor: 2, location: 'L2-A2', hours: '10AM - 9PM', categoryFull: 'Cosmetics & Fragrance' },
        { id: 11, name: 'Chipotle', category: 'Food', floor: 2, location: 'L2-B1', hours: '10AM - 10PM', categoryFull: 'Mexican Restaurant' },
        { id: 12, name: 'Lego Store', category: 'Toys', floor: 2, location: 'L2-B2', hours: '10AM - 9PM', categoryFull: 'Toys & Games' },
        { id: 13, name: 'Gap', category: 'Fashion', floor: 2, location: 'L2-C1', hours: '10AM - 9PM', categoryFull: 'Clothing & Accessories' },
        { id: 14, name: 'Five Guys', category: 'Food', floor: 2, location: 'L2-C2', hours: '10AM - 11PM', categoryFull: 'Burgers & Fries' },
        { id: 15, name: 'Sony', category: 'Tech', floor: 2, location: 'L2-D1', hours: '10AM - 8PM', categoryFull: 'Electronics' },
        { id: 16, name: 'FYI Toys', category: 'Toys', floor: 2, location: 'L2-D2', hours: '10AM - 9PM', categoryFull: 'Toys & Games' },

        // Level 3
        { id: 17, name: 'Cinemark Cinema', category: 'Entertainment', floor: 3, location: 'L3-A1', hours: '11AM - 11PM', categoryFull: 'Movie Theater' },
        { id: 18, name: 'Dave & Busters', category: 'Entertainment', floor: 3, location: 'L3-A2', hours: '11AM - 12AM', categoryFull: 'Games & Food' },
        { id: 19, name: 'Cheesecake Factory', category: 'Food', floor: 3, location: 'L3-B1', hours: '11AM - 11PM', categoryFull: 'Fine Dining' },
        { id: 20, name: 'Yoga Studio', category: 'Health', floor: 3, location: 'L3-B2', hours: '6AM - 9PM', categoryFull: 'Fitness & Wellness' },
        { id: 21, name: 'Urban Outfitters', category: 'Lifestyle', floor: 3, location: 'L3-C1', hours: '10AM - 9PM', categoryFull: 'Home & Lifestyle' },
        { id: 22, name: 'Panda Express', category: 'Food', floor: 3, location: 'L3-C2', hours: '10AM - 10PM', categoryFull: 'Asian Restaurant' },
        { id: 23, name: 'Barnes & Noble', category: 'Books', floor: 3, location: 'L3-D1', hours: '10AM - 9PM', categoryFull: 'Books & Café' },
        { id: 24, name: 'Massage Chair Spa', category: 'Health', floor: 3, location: 'L3-D2', hours: '10AM - 9PM', categoryFull: 'Wellness & Relaxation' },
    ],

    categories: [
        { name: 'Fashion', icon: '👔', color: '#FF6B9D' },
        { name: 'Food', icon: '🍕', color: '#FFA500' },
        { name: 'Tech', icon: '💻', color: '#4A90E2' },
        { name: 'Beauty', icon: '💄', color: '#FF69B4' },
        { name: 'Entertainment', icon: '🎮', color: '#9D4EDD' },
        { name: 'Sports', icon: '⚽', color: '#3DDC84' },
        { name: 'Luxury', icon: '💎', color: '#FFD700' },
        { name: 'Toys', icon: '🧸', color: '#FF6B9D' },
        { name: 'Books', icon: '📚', color: '#8B4513' },
        { name: 'Health', icon: '🏃', color: '#00CED1' },
        { name: 'Lifestyle', icon: '🛋️', color: '#FF8C42' },
    ]
};

// State management
let currentScreen = 'home';
let currentFloor = 1;
let selectedStore = null;
let searchQuery = '';

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const searchScreen = document.getElementById('searchScreen');
const directoryScreen = document.getElementById('directoryScreen');
const categoriesScreen = document.getElementById('categoriesScreen');
const mapScreen = document.getElementById('mapScreen');
const detailScreen = document.getElementById('detailScreen');
const directionsScreen = document.getElementById('directionsScreen');

const homeBtn = document.getElementById('homeBtn');
const searchBtn = document.getElementById('searchBtn');
const browseBtn = document.getElementById('browseBtn');
const categoriesBtn = document.getElementById('categoriesBtn');
const mapBtn = document.getElementById('mapBtn');

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResults = document.getElementById('searchResults');

const storesGrid = document.getElementById('storesGrid');
const categoriesGrid = document.getElementById('categoriesGrid');

const floorTabs = document.querySelectorAll('.floor-tab');
const mapFloorBtns = document.querySelectorAll('.map-floor-btn');
const mallMap = document.getElementById('mallMap');

const detailName = document.getElementById('detailName');
const detailCategory = document.getElementById('detailCategory');
const detailLocation = document.getElementById('detailLocation');
const detailHours = document.getElementById('detailHours');
const detailCatFull = document.getElementById('detailCatFull');
const directionsBtn = document.getElementById('directionsBtn');

const directionPath = document.getElementById('directionPath');
const startFloor = document.getElementById('startFloor');

// Screen Navigation
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    currentScreen = screenName;

    switch(screenName) {
        case 'home':
            homeScreen.classList.add('active');
            break;
        case 'search':
            searchScreen.classList.add('active');
            searchInput.focus();
            break;
        case 'directory':
            directoryScreen.classList.add('active');
            renderDirectory();
            break;
        case 'categories':
            categoriesScreen.classList.add('active');
            renderCategories();
            break;
        case 'map':
            mapScreen.classList.add('active');
            renderMap();
            break;
        case 'detail':
            detailScreen.classList.add('active');
            renderDetail();
            break;
        case 'directions':
            directionsScreen.classList.add('active');
            renderDirections();
            break;
    }
}

// Home button - always go back to home
homeBtn.addEventListener('click', () => showScreen('home'));

// Action card buttons
searchBtn.addEventListener('click', () => {
    showScreen('search');
    searchResults.innerHTML = '';
    searchInput.value = '';
});

browseBtn.addEventListener('click', () => {
    currentFloor = 1;
    showScreen('directory');
});

categoriesBtn.addEventListener('click', () => showScreen('categories'));

mapBtn.addEventListener('click', () => {
    currentFloor = 1;
    showScreen('map');
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.classList.toggle('show', searchQuery.length > 0);

    if (searchQuery.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

    const results = mallData.stores.filter(store =>
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results"><p>No stores found. Try a different search.</p></div>';
        return;
    }

    searchResults.innerHTML = results.map(store => `
        <div class="search-result-item" onclick="selectStore(${store.id})">
            <div class="result-name">${store.name}</div>
            <div class="result-category">${store.category}</div>
            <div class="result-location">Level ${store.floor} - ${store.location}</div>
        </div>
    `).join('');
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchResults.innerHTML = '';
    searchClear.classList.remove('show');
    searchInput.focus();
});

// Directory Screen
floorTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        floorTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentFloor = parseInt(e.target.dataset.floor);
        renderDirectory();
    });
});

function renderDirectory() {
    const storesOnFloor = mallData.stores.filter(s => s.floor === currentFloor);
    storesGrid.innerHTML = storesOnFloor.map(store => `
        <div class="store-card" onclick="selectStore(${store.id})">
            <div class="store-name">${store.name}</div>
            <div class="store-category">${store.category}</div>
            <div class="store-location">📍 ${store.location}</div>
            <div class="store-hours">⏰ ${store.hours}</div>
        </div>
    `).join('');
}

// Categories Screen
function renderCategories() {
    categoriesGrid.innerHTML = mallData.categories.map(cat => `
        <button class="category-card" onclick="filterByCategory('${cat.name}')">
            <div class="icon">${cat.icon}</div>
            <div>${cat.name}</div>
        </button>
    `).join('');
}

function filterByCategory(category) {
    const filtered = mallData.stores.filter(s => s.category === category);

    // Build a results display similar to search
    searchResults.innerHTML = '<div style="padding: 2rem;"><h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">' + category + ' Stores</h3></div>';

    const resultsContainer = document.createElement('div');
    resultsContainer.style.display = 'grid';
    resultsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    resultsContainer.style.gap = '1.5rem';
    resultsContainer.style.padding = '0 2rem 2rem';

    resultsContainer.innerHTML = filtered.map(store => `
        <div class="search-result-item" onclick="selectStore(${store.id})">
            <div class="result-name">${store.name}</div>
            <div class="result-category">${store.category}</div>
            <div class="result-location">Level ${store.floor} - ${store.location}</div>
        </div>
    `).join('');

    searchScreen.querySelector('.search-container').innerHTML = '';
    searchScreen.querySelector('.search-container').appendChild(resultsContainer);
    showScreen('search');
}

// Map Screen
mapFloorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        mapFloorBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFloor = parseInt(e.target.dataset.floor);
        renderMap();
    });
});

function renderMap() {
    const storesOnFloor = mallData.stores.filter(s => s.floor === currentFloor);
    mallMap.innerHTML = storesOnFloor.map(store => `
        <div class="mall-store-slot" onclick="selectStore(${store.id})">
            ${store.name}<br><small>${store.location}</small>
        </div>
    `).join('');
}

// Store Selection and Detail Screen
function selectStore(storeId) {
    selectedStore = mallData.stores.find(s => s.id === storeId);
    showScreen('detail');
}

function renderDetail() {
    if (!selectedStore) return;

    detailName.textContent = selectedStore.name;
    detailCategory.textContent = selectedStore.category;
    detailLocation.textContent = `Level ${selectedStore.floor} - ${selectedStore.location}`;
    detailHours.textContent = selectedStore.hours;
    detailCatFull.textContent = selectedStore.categoryFull;
}

// Directions functionality
directionsBtn.addEventListener('click', () => showScreen('directions'));

startFloor.addEventListener('change', renderDirections);

function renderDirections() {
    if (!selectedStore) return;

    const startFloorNum = parseInt(startFloor.value);
    const destinationFloor = selectedStore.floor;
    const storeLocation = selectedStore.location;

    let steps = [];

    if (startFloorNum === destinationFloor) {
        steps = [
            { text: `You are on <span class="emphasis">Level ${startFloorNum}</span>. Look for the kiosk directory.` },
            { text: `Find store location <span class="emphasis">${storeLocation}</span>.` },
            { text: `<span class="emphasis">${selectedStore.name}</span> is located there!` }
        ];
    } else if (startFloorNum < destinationFloor) {
        steps = [
            { text: `Head to the nearest escalator or elevator.` },
            { text: `Go UP <span class="emphasis">${destinationFloor - startFloorNum}</span> floor${destinationFloor - startFloorNum !== 1 ? 's' : ''}.` },
            { text: `You will arrive at <span class="emphasis">Level ${destinationFloor}</span>.` },
            { text: `Follow signs to store location <span class="emphasis">${storeLocation}</span>.` },
            { text: `<span class="emphasis">${selectedStore.name}</span> will be waiting!` }
        ];
    } else {
        steps = [
            { text: `Head to the nearest escalator or elevator.` },
            { text: `Go DOWN <span class="emphasis">${startFloorNum - destinationFloor}</span> floor${startFloorNum - destinationFloor !== 1 ? 's' : ''}.` },
            { text: `You will arrive at <span class="emphasis">Level ${destinationFloor}</span>.` },
            { text: `Follow signs to store location <span class="emphasis">${storeLocation}</span>.` },
            { text: `<span class="emphasis">${selectedStore.name}</span> is ready for you!` }
        ];
    }

    directionPath.innerHTML = steps.map((step, idx) => `
        <div class="direction-step">
            <div class="step-number">${idx + 1}</div>
            <div class="step-text">
                <p>${step.text}</p>
            </div>
        </div>
    `).join('');
}

// Back button from directions
document.querySelector('.back-directions-btn').addEventListener('click', () => {
    showScreen('detail');
});

// Back button from search results (restore search container)
function restoreSearchContainer() {
    const container = searchScreen.querySelector('.search-container');
    if (!container.querySelector('.search-box')) {
        container.innerHTML = `
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="Search for stores...">
                <button class="search-clear" id="searchClear">×</button>
            </div>
            <div class="search-results" id="searchResults"></div>
        `;

        const newSearchInput = searchScreen.querySelector('#searchInput');
        const newSearchClear = searchScreen.querySelector('#searchClear');
        const newSearchResults = searchScreen.querySelector('#searchResults');

        newSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            newSearchClear.classList.toggle('show', searchQuery.length > 0);

            if (searchQuery.length === 0) {
                newSearchResults.innerHTML = '';
                return;
            }

            const results = mallData.stores.filter(store =>
                store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                store.category.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (results.length === 0) {
                newSearchResults.innerHTML = '<div class="no-results"><p>No stores found. Try a different search.</p></div>';
                return;
            }

            newSearchResults.innerHTML = results.map(store => `
                <div class="search-result-item" onclick="selectStore(${store.id})">
                    <div class="result-name">${store.name}</div>
                    <div class="result-category">${store.category}</div>
                    <div class="result-location">Level ${store.floor} - ${store.location}</div>
                </div>
            `).join('');
        });

        newSearchClear.addEventListener('click', () => {
            newSearchInput.value = '';
            searchQuery = '';
            newSearchResults.innerHTML = '';
            newSearchClear.classList.remove('show');
            newSearchInput.focus();
        });
    }
}

// Initial state
showScreen('home');
