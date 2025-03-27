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

  // Album data with YouTube links
  const albums = [
    { title: "Album 1", image: "https://via.placeholder.com/150/771796", youtubeId: "dQw4w9WgXcQ" },
    { title: "Album 2", image: "https://via.placeholder.com/150/24f355", youtubeId: "dQw4w9WgXcQ" },
    { title: "Album 3", image: "https://via.placeholder.com/150/d32776", youtubeId: "dQw4w9WgXcQ" },
    { title: "Album 4", image: "https://via.placeholder.com/150/f66b97", youtubeId: "dQw4w9WgXcQ" },
    { title: "Album 5", image: "https://via.placeholder.com/150/56a8c2", youtubeId: "dQw4w9WgXcQ" }
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