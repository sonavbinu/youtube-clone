const API_KEY = "AIzaSyCdmyxgofZlI7VldMRNSCuOkuH_mUIUiiU";
const query = "youtube";

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=12&type=video`;

async function fetchVideos() {
  const response = await fetch(url);
  const data = await response.json();

  const grid = document.getElementById("video-grid");

  grid.innerHTML = data.items
    .map((video) => {
      const videoId = video.id.videoId;
      const title = video.snippet.title;
      const channel = video.snippet.channelTitle;
      const thumbnail = video.snippet.thumbnails.medium.url;

      return `
    <div class="video-card">
    <a href="https://www.youtube.com/watch?v=${videoId} target="_blank"
    <img src="${thumbnail}" alt="${title}" />
    </a>
    <div class="video-info">
    <h3  class="video-title"> ${title}</h3>
    <p class="channel-name">${channel}</p>
    </div>
    </div>
    
    `;
    })
    .join("");
}

fetchVideos();
