jQuery(document).ready(function($){
    // ************ Change Here *************
    window.owner_name = "Firstname M. Surename";
    var enable_floating_navbar = false;
    // **************************************
    
    window.onscroll = function() {navbarFunction()};

    var path = window.location.pathname;
    var page = path.split("/").pop();


    if (page == 'homepage.html'){
        //    Navbar
        $.get("elements/nav.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
        });
        //  Footer
        $.get("elements/footer.html", function(data){
            $("#footer-placeholder").replaceWith(data);
            document.getElementById('footer-owner').innerHTML = window.owner_name;
            var year = new Date().getFullYear();
            document.getElementById('footer-copyright').innerHTML = "Copyright @ "+year;
            });
    } else {
        //    Navbar
        $.get("../elements/nav-smaller.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
            enable_floating_navbar = false; // Do not use floating navigation bar in the smaller one
        });

        //  Footer
        $.get("../elements/footer.html", function(data){
            $("#footer-placeholder").replaceWith(data);
            document.getElementById('footer-owner').innerHTML = window.owner_name;
            var year = new Date().getFullYear();
            document.getElementById('footer-copyright').innerHTML = "Copyright @ "+year;
            });
    }

    function navbarFunction() {
        if (enable_floating_navbar){
            if (window.scrollY > 0) {
                document.getElementById("navbar").classList.add("sticky")
            } else {
                document.getElementById("navbar").classList.remove("sticky");
            }
        }
    }
});