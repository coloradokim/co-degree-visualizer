$("form").submit(function(event) {
    const $year = $("#yearAwarded").val()
    $(".showMe").append("<p>" + $year + "</p>")
    event.preventDefault();
    
    $.ajax({
        url: "https://data.colorado.gov/resource/yt5k-hawq.json?year=" + $year,
        type: "GET",
        data: {
            "$limit": 5000,
            "$$app_token": "Y0bDVvQ1EATIlQ2bHbPv30kDR"
        }
    }).done(function(data) {
        console.log(data);
    });
});
