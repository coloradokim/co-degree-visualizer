$("form").submit(function(event) {
    const $year = $("#yearAwarded").val()
    event.preventDefault();

    $.ajax({
        url: "https://data.colorado.gov/resource/yt5k-hawq.json?year=" + $year,
        type: "GET",
        data: {
            "$limit": 6000,
            "$$app_token": "Y0bDVvQ1EATIlQ2bHbPv30kDR"
        }
    }).done(function(data) {
      const results = [];
      for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i]["cip"]) >= 11 && parseInt(data[i]["cip"]) <= 11.9999 )
          results.push(parseInt(data[i]));
      }
      const gradNum = results.length
      $(".showMe").append("<p>" + "In " + $year + ", " + gradNum + " people graduated from a Colorado Public Higher Education Institution with a degree in Computer and Information Sciences." + "</p>")
    });

    $("button").click(function(){
      $(".showMe").empty()
    });
});
