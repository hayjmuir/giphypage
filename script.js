





$("button").on("click", function(){

var gifInput = $("#gif-input").val().trim()
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifInput +"&api_key=OF6EF6IbhPMflLOCnINThJ4NqdBecwH6&limit=5";
var hockeyGIF = []

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    var results = response.data
    
for(var i = 0; i < results.length; i ++){

    var gifDiv = $("<div>")
    var  rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating)
    var hockeyImg = $("<img>");

    hockeyImg.attr("src", results[i].images.fixed_height.url);
    hockeyImg.attr("alt" , "hockey image");

    gifDiv.prepend(p);
    gifDiv.prepend(hockeyImg)
    $("#images").prepend(gifDiv);
}
})

});