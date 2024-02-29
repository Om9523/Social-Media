let userLoggedIn = false;

function login() {
    // Simulating a login process
    userLoggedIn = true;

    // Hide the login container and show the dashboard container
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';

    // Load and display social media feeds
    loadFeeds();
}

function loadFeeds() {
    // Simulating fetching social media feeds from APIs
    const feeds = [
        { platform: 'linkedin', content: 'This is my linkedin profile.',ImageBitmapRenderingContext:linkedin.png },
        // { platform: 'Facebook', content: 'Facebook pos' },
        { platform: 'Instagram', content: 'This is my instagram profile.',ImageBitmap:instagram.png }
        // Add more feeds or fetch from APIs
    ];

    const feedsContainer = document.getElementById('feeds');
    feedsContainer.innerHTML = '';

    feeds.forEach(feed => {
        const feedItem = document.createElement('div');
        feedItem.classList.add('feed-item');
        feedItem.innerHTML = `<strong>${feed.platform}:</strong> ${feed.content}`;
        feedsContainer.appendChild(feedItem);
    });
}
var img = document.createElement("img");
