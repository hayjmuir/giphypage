
 var gifStorage = []
function renderGif(gifInput){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifInput +"&api_key=OF6EF6IbhPMflLOCnINThJ4NqdBecwH6&limit=5";
   

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
            var gifs = $("<img>");

            gifs.attr("src", results[i].images.fixed_height.url);
            gifs.attr("alt" , "gifs");

            gifDiv.prepend(p);
            gifDiv.prepend(gifs)
            $("#images").prepend(gifDiv);
        }
    });
};




$("button").on("click", function(){

var gifInput = $("#gif-input").val().trim()
renderGif(gifInput);
gifStorage.push(gifInput)
renderButtons()
});



function renderButtons() {

$("#btnStorage").empty();

    for(var i = 0; i < gifStorage.length; i ++) {
        
        var  newBtn = $("<button>");
        newBtn.addClass("gif-btn");
        newBtn.attr("data-name" , gifStorage[i]);
        newBtn.text(gifStorage[i]);
        $("#btnStorage").append(newBtn)


    }






}