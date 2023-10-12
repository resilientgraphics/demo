$(document).ready(function () {

    //for google images, show full width image when clicking on the image. 
    //used in knowledge base
    $('.mfp-image').each(function() {
        var href = $(this).attr('href') || "";
        var last4 = href.substr(href.length - 4); 
        if(last4 == "s700"){
            let newHref = href.replace("s700", "s2000");
            $(this).attr('href', newHref); 
        }
    });
   
});
