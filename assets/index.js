document.addEventListener('DOMContentLoaded', function() {
  // Setup the main structure
  const root = document.getElementById('root');
  root.innerHTML = `
    <div id="player">
      <div class="title">RadioBox</div>
      <div class="player-container"></div>
      <div class="dock-wrapper">
        <div class="dock-container"></div>
      </div>
    </div>
  `;

  // Album data with YouTube links from the provided playlist
  const albums = [
    { title: "Tame Impala - The Less I Know The Better", image: "https://i.ytimg.com/vi/1Bs148Owq-Q/hqdefault.jpg", youtubeId: "1Bs148Owq-Q" },
    { title: "Artic Monkeys - Do I Wanna Know?", image: "https://i.ytimg.com/vi/bpOSxM0rNPM/hqdefault.jpg", youtubeId: "bpOSxM0rNPM" },
    { title: "Two Door Cinema Club - What You Know", image: "https://i.ytimg.com/vi/YXwYJyrKK5A/hqdefault.jpg", youtubeId: "YXwYJyrKK5A" },
    { title: "Glass Animals - Heat Waves", image: "https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg", youtubeId: "mRD0-GxqHVo" },
    { title: "The Neighbourhood - Sweater Weather", image: "https://i.ytimg.com/vi/GCdwKhTtNNw/hqdefault.jpg", youtubeId: "GCdwKhTtNNw" }
  ];

  // Get dock container
  const dockContainer = document.querySelector('.dock-container');
  const playerContainer = document.querySelector('.player-container');

  // Create dock items
  albums.forEach((album, index) => {
    const dockItem = document.createElement('div');
    dockItem.className = 'dock-item';
    dockItem.dataset.youtubeId = album.youtubeId;
    dockItem.innerHTML = `
      <img src="${album.image}" alt="${album.title}">
      <div class="dock-label">${album.title}</div>
    `;
    
    // Add click event to play YouTube video
    dockItem.addEventListener('click', function() {
      const youtubeId = this.dataset.youtubeId;
      playVideo(youtubeId);
      
      // Mark this item as active
      document.querySelectorAll('.dock-item').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
    
    dockContainer.appendChild(dockItem);
  });

  // Function to play YouTube video
  function playVideo(youtubeId) {
    playerContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  }
}); 