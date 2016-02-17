function playSomeSound(genre) {
  SC.get('/tracks', {
    genre: genre,
    bpm: {
      from: 100
    }
  }, function(tracks) {
    var random = Math.floor(Math.random() * 49);
    SC.oEmbed(tracks[random].uri, {auto_play:true}, document.getElementById('soundCloud'));
  });
}

window.onload = function() {
  SC.initialize({
    client_id: '9273d9f01de5272714a2ebb9a954635e'
  });
  var menuLinks = document.getElementsByClassName('genre');
  for (var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i];
    menuLink.onclick = function(event) {
      event.preventDefault();
      playSomeSound(menuLink.innerHTML);
    };
  }
};
