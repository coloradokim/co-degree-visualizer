$( document ).ready(function() {
  console.log('hi!');
  });

  $.ajax({
      url: "https://data.colorado.gov/resource/yt5k-hawq.json?year=2015",
      type: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "Y0bDVvQ1EATIlQ2bHbPv30kDR"
      }
  }).done(function(data) {
    console.log(data);
  });
