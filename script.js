
// Unsplash API
const count = 10;
const apiKey = 'Wife9PKv3hOM5jY74_kFGK7zuDT_RGWgBg5NZFFsHLs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        // Catch Error Here
    }
}

// on Load
getPhotos();
