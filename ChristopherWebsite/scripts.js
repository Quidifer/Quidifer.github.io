function toggleSidebar() {
    document.getElementById("side").classList.toggle('active');
}

function toggleAbout() {
    var x = document.getElementById("summary");
    document.getElementById("button").classList.toggle('activate')
    var summary = "This website functions as an online portfolio. I will be posting new projects here as I progress through my studies as an undergraduate at UCR. This website is made from scratch. All animations are custom made.";
    var n = summary.length;

    var i = 1;                     //  set your counter to 1

    function myLoop () {
       setTimeout(function () {
        x.innerHTML = summary.substring(0,i);
        i+= 3;
        if (i <= n) {
             myLoop();
        }
        else {
            x.innerHTML = summary;
        }
        }, 1);
    }

    if (x.innerHTML != summary) {
        myLoop();
    }
    else {
        x.innerHTML = "";
    }

}
