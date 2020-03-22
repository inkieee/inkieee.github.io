$(function() {

    $("#footer").load("/common/footer.html");

    function activeFoot() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#footer ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeFoot();
    }, 100);

});