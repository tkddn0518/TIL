$(document).ready(function(){
    $("#footer").load("/templates/footer.html", function() {
        document.getElementById("footer").classList.add("show");
    })
})