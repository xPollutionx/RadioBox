document.addEventListener('DOMContentLoaded', function() {
  // Setup the main structure
  const root = document.getElementById('root');
  root.innerHTML = `
    <div id="player">
      <div class="title"><a href="https://x.com/xPollutionx" target="_blank">xPollutionx</a>'s RadioBox</div>
      <div class="content-container">
        <div class="player-container"></div>
        <div class="dock-scroll-container">
          <div class="dock-container"></div>
        </div>
      </div>
    </div>
  `;

  // Album data with YouTube links from the user's own songs
  const albums = [
    { title: "Wine", image: "https://i.ytimg.com/vi/1Bs148Owq-Q/hqdefault.jpg", youtubeId: "1Bs148Owq-Q" },
    { title: "Feelin' Fookin Good", image: "https://i.ytimg.com/vi/dACf70ze-gs/hqdefault.jpg", youtubeId: "dACf70ze-gs" },
    { title: "Ego Death", image: "https://i.ytimg.com/vi/TSA2IGZbkE0/hqdefault.jpg", youtubeId: "TSA2IGZbkE0" },
    { title: "Dance with Ghosts", image: "https://i.ytimg.com/vi/53MNK_sy818/hqdefault.jpg", youtubeId: "53MNK_sy818" },
    { title: "Premixes", image: "https://i.ytimg.com/vi/Gq0hfgnjnB0/hqdefault.jpg", youtubeId: "Gq0hfgnjnB0" },
    { title: "Love Letters", image: "https://i.ytimg.com/vi/6VodOHtYPNA/hqdefault.jpg", youtubeId: "6VodOHtYPNA" },
    { title: "HyperPopCorn", image: "https://i.ytimg.com/vi/jjZArTW4PhI/hqdefault.jpg", youtubeId: "jjZArTW4PhI" },
    { title: "Anthony", image: "https://i.ytimg.com/vi/XnpYYwOU_5c/hqdefault.jpg", youtubeId: "XnpYYwOU_5c" },
    { title: "Angelo", image: "https://i.ytimg.com/vi/A4u-q4vk8Ew/hqdefault.jpg", youtubeId: "A4u-q4vk8Ew" },
    { title: "Sample This", image: "https://i.ytimg.com/vi/DDzvFcUgTCc/hqdefault.jpg", youtubeId: "DDzvFcUgTCc" },
    { title: "Sample This VOL 2", image: "https://i.ytimg.com/vi/wDqw9J_hUIU/hqdefault.jpg", youtubeId: "wDqw9J_hUIU" },
    { title: "Sliced N Spliced", image: "https://i.ytimg.com/vi/Vmlc_aKQVZM/hqdefault.jpg", youtubeId: "Vmlc_aKQVZM" },
    { title: "Sliced N Spliced VOL 2", image: "https://i.ytimg.com/vi/MR6u_S6dpSY/hqdefault.jpg", youtubeId: "MR6u_S6dpSY" },
    { title: "Lil' Big Beatz", image: "https://i.ytimg.com/vi/i8nGHXfdnj0/hqdefault.jpg", youtubeId: "i8nGHXfdnj0" },
    { title: "Cruisin", image: "https://i.ytimg.com/vi/l5kCtTCHaH8/hqdefault.jpg", youtubeId: "l5kCtTCHaH8" },
    { title: "Lowekey Lofi", image: "https://i.ytimg.com/vi/QDw9lpf7GX4/hqdefault.jpg", youtubeId: "QDw9lpf7GX4" },
    { title: "Lowkey Lowfi VOL 2", image: "https://i.ytimg.com/vi/_KPDbBweq7w/hqdefault.jpg", youtubeId: "_KPDbBweq7w" }
  ];

  // Get dock container
  const dockContainer = document.querySelector('.dock-container');
  const playerContainer = document.querySelector('.player-container');
  
  // Define default album to load (using Love Letters)
  const defaultAlbum = albums[5]; // Index 5 is Love Letters

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
    
    // Store reference to the Love Letters dock item
    if (album === defaultAlbum) {
      window.defaultDockItem = dockItem;
    }
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
  
  // Preload the default album (Love Letters) without autoplay
  playVideo(defaultAlbum.youtubeId);
  
  // Mark Love Letters as active
  window.defaultDockItem.classList.add('active');
}); 