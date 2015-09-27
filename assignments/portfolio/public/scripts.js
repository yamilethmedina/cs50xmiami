

var $ = require('jquery');
var Spotify = require('../node_modules/spotify-web-api-js');
var s = new Spotify();

console.log("Hello");
// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId : 'd137fe25b31c4f3ba9e29d85f4e47c66',
//   clientSecret : '044d1250a8e74f8481b20cf3ad3316ee',
//   redirectUri : 'http://localhost:3000/callback'
// });

// closure waiting for page to load event
// window.addEventListener('click', getOriginalArtist)

$(document).ready(function($) {
  window.addEventListener('click', function() {
    var searchButton = document.getElementById('search');
    //console.log(searchButton);
    getOriginalArtist();
  });

});

function getOriginalArtist() {
  var originalArtist = document.getElementById('originalartist').value;
  console.log(originalArtist);
  searchArtists(originalArtist);
}

var originalArtistId;
var relatedArtists;
var relatedArtistsLength;
function searchArtists(originalArtist) {


  $.getJSON("https://api.spotify.com/v1/search?type=artist&q=" + originalArtist, function(json) {
   $('#artist').html('<p>'+ '<img src="' + json.artists.items[0].images[2].url + '" height="100" width="100" /> ' + json.artists.items[0].name +'</p>');

    originalArtistId = json.artists.items[0].id;

    console.log(originalArtistId);

    //everything should happen in the callback
    relatedArtists = s.getArtistRelatedArtists(originalArtistId);
    console.log(relatedArtists);
    relatedArtistsLength = relatedArtists.length;
    console.log(relatedArtistsLength);
  });
}

// relatedArtists = s.getArtistRelatedArtists(originalArtistId, function(err, data) {
//   if (err) console.error(err);
//   else console.log('Related Artists', data)
// });



  for (var i = 0; i < relatedArtistsLength; i++) {

      //search for related artist ID to get top song
      console.log(relatedArtists[i].items[0].name);
      var relatedArtistId = searchArtists(relatedArtists[i].items[0].name);
      console.log(relatedArtistId[i].items[0].name);

      //get top song from that related artist
      var relatedArtistTopTracks = s.getArtistTopTracks(relatedArtistId[i], US);


      // reset html of related artist for new search
      $('#related-artist').html('');

      $('#related-artist').append('<p>'+ '<img src="' + relatedArtists[i].images[2].url + '" height="100" width="100" /> ' + relatedArtists[i].name + '<i> \"' + relatedArtists.tracks[0].name + '\"</i></p>');
    }
