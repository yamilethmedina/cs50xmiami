var searchButton = document.getElementById('search');
if(searchButton) {
    searchButton.addEventListener('click', getOriginalArtist, false);


function getOriginalArtist() {
  var originalArtist = document.getElementById('originalartist').value;
  searchArtists(originalArtist);
}

function searchArtists(originalArtist) {
  $.getJSON("https://api.spotify.com/v1/search?type=artist&q=" + originalArtist, function(json) {
    $('#artist').html('<p>'+ '<img src="' + json.artists.items[0].images[2].url + '" height="100" width="100" /> ' + json.artists.items[0].name +'</p>');

    relatedArtists(json.artists.items[0].id);
  });
}

function relatedArtists(originalArtistId) {
  $.getJSON("https://api.spotify.com/v1/artists/" + originalArtistId + "/related-artists", function(json) {
    if(json.artists.length > 0) {
      var artistsLength = json.artists.length;

      //search for related artist ID to get top song
      var relatedArtistId = searchArtists(artists[i]);

      //get top song from that related artist
      function relatedArtistTopSong(relatedArtistId) {
        $.getJSON("https://api.spotify.com/v1/artists/" + relatedArtistId + "/top-tracks?country=US", function(json) {
          if(json.tracks.length > 0) {
            var tracksLength = json.track.length;

      // reset html of related artist for new search
      $('#related-artist').html('');

      //reset html of tracks for new search
      $('#related-artist-track').html('');

      // loop through related artists, append name of each
      for(var i = 0; i < artistsLength; i++) {
        $('#related-artist').append('<p>'+ '<img src="' + json.artists[i].images[2].url + '" height="100" width="100" /> ' + json.artists[i].name + '<i>' + json.tracks[0].name + '</i></p>');

      //append the top track
      }
    }
  });
}
}



//function passToPHP() {

//    // We make an AJAX request
//    $.ajax(
//    {
//        type: "POST", // The request type is POST
//        url: 'email.php', // This is the name of the PHP file. It must be in the same folder as the JS file
//        data: {'people': JSON.stringify(peopleArray)}, // We're passing on the JSON object (converted to string)
//        success: function() { // What happends if the AJAX request succeeded
//            console.info("Well done!");
//        },
//        error: function() { // What happends if the AJAX request fails (file not found, etc.)
//            console.error("There was an error sending the AJAX call...");
//        }
//    });
//}

//$('#emailbutton').click(function(){
//    $(location).attr('href', 'mailto:?subject='
//                             + encodeURIComponent("Here is your playlist!")
//                             + "&body=If you like $('#artist').val(), you might like these related artists too: $('#related-artist').val()"
//                             + encodeURIComponent("This is my body")
//    );
//});

//var userEmail = document.getElementById('emailaddress').value;

//$.ajax({
//  type: “POST”,
//  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
//  data: {
//    ‘key’: ‘wbKJ3BN1tLpb3tHqh_uUDQ’,
//    ‘message’: {
//      ‘from_email’: ‘whatdoilistentotoday@gmail.com’,
//      ‘to’: [
//          {
//            ‘email’: userEmail,
//            ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
//            ‘type’: ‘to’
//          },
//          {
//            ‘email’: ‘RECIPIENT_NO_2@EMAIL.HERE’,
//            ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
//            ‘type’: ‘to’
//          }
//        ],
//      ‘autotext’: ‘true’,
//      ‘subject’: ‘Here is your playlist!’,
//      ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
//    }
//  }
// }).done(function(response) {
//   console.log(response); // if you're into that sorta thing
// });
//
//
//
// $('#yourButtonId').click(function() {
//  $.ajax({
//    // ...
//  });
//});
