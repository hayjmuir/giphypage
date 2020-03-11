
 var topics = ["PC", "Coding", "Gaming" , "Hockey"]
function renderGif(gifInput){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifInput +"&api_key=OF6EF6IbhPMflLOCnINThJ4NqdBecwH6&limit=10";
   

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

            gifs.attr("src", results[i].images.fixed_height_still.url);
            gifs.attr("still", results[i].images.fixed_height_still.url)
            gifs.attr("animate", results[i].images.fixed_height.url)
            gifs.addClass("gif")
            gifs.attr("state" , "still")
            gifDiv.prepend(p);
            gifDiv.prepend(gifs)
            $("#images").prepend(gifDiv);
        }
    });
};




$("button").on("click", function(){

var gifInput = $("#gif-input").val().trim()
renderGif(gifInput);
topics.push(gifInput)
renderButtons()
});



function renderButtons() {

$("#btnStorage").empty();

    for(var i = 0; i < topics.length; i ++) {
        
        var  newBtn = $("<button>");
        newBtn.addClass("gif-btn");
        newBtn.attr("data-name" , topics[i]);
        newBtn.text(topics[i]);
        $("#btnStorage").append(newBtn)


    }






};


$(".gif").on("click" , function(){

var state = $(this).attr("state");

if(state === "still"){
    $(this).attr("src" , $(this).attr("animate"));
    $(this).attr("state", "animate");
}   else {
    $(this).attr("src" , $(this).attr("still"));
    $(this).attr("state", "still");
}

});


$(document).on("click", ".gif-btn" , function(){
    var gifBtn = $(this).attr("data-name");
    renderGif(gifBtn);
});

renderButtons()