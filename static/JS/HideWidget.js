function HideWidget(Widget){


    var div = document.getElementById(Widget);
    if(div.style.display == "none"){

        div.style.display = "grid";
    }
    else if(div.style.display == "grid"){
        div.style.display = "none";
    }
    //document.getElementById(Widget).style.display = "none";
}