

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
var relatedArtistId;
var relatedArtistTracks;
var relatedArtistTopSong;
var relatedArtistsArray;
var i;
var k;
function searchArtists(originalArtist) {


  $.getJSON("https://api.spotify.com/v1/search?type=artist&q=" + originalArtist, function(json) {
   $('#artist').html('<p>'+ '<img src="' + json.artists.items[0].images[2].url + '" height="100" width="100" /> ' + json.artists.items[0].name +'</p>');

    originalArtistId = json.artists.items[0].id;

    console.log(originalArtistId);

    //everything should happen in the callback
    relatedArtists = s.getArtistRelatedArtists(originalArtistId, function(err, data) {
      console.log(data.artists);

      for (i = 0; i < 10; i++)
      {

        console.log(data.artists[i].name);
        //reset html of related artist for new search
        $('#related-artist').html('');

        $('#related-artist').append('<p>'+ '<img src="' + data.artists[i].images[2].url + '" height="100" width="100" /> ' + data.artists[i].name + '</p>');

        $('#related-artist').html('');

      }




      });


    });
  }
