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
      <div class="video-preview">
        <div class="thumbnail-row">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
         <img class="thumbnail" src="${thumbnail}" alt=${thumbnail} />
        </a>
         
          <div class="video-time">▶</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
           ${channel[0].toUpperCase()}
          </div>
          <div class="video-info">
            <p class="video-title">
              ${title}
            </p>
            <p class="video-author">${channel}</p>
            <p class="video-stats">Youtube Video</p>
          </div>
        </div>
      </div>
   
    
    `;
    })
    .join("");
}

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    fetchVideos(this.value);
  }
});

fetchVideos();
