
     //Responsividade da barra de navegação


    function mostrarAtivo(tag) {
        var tag_li = document.getElementById('navigation');
        var tag_a = tag_li.getElementsByClassName('dot');

        for (i = 0; i < tag_a.length; i++) {
            tag_a[i].style.backgroundColor = "";
            tag_a[i].style.border = "6px solid #1A2622";
        }
        tag.style.backgroundColor = "#4C2823"; // altera o fundo
        tag.style.border = " 6px solid #4C2823"; // altera a borda
    }


    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " visivel";
            document.getElementById("icon").innerHTML = " &#120247;";
        } else {
            x.className = "topnav";
            document.getElementById("icon").innerHTML = " &#9776;";
        }

    }

    //rolagem da barra
       $(document).ready(function() {
           $(document).on("scroll", onScroll);

           //smoothscroll
           $('a[href^="#"]').on('click', function(e) {
               e.preventDefault();
               $(document).off("scroll");

               $('a').each(function() {
                   $(this).removeClass('active');
               })
               $(this).addClass('active');

               var target = this.hash,
                   menu = target;
               $target = $(target);
               $('html, body').stop().animate({
                   'scrollTop': $target.offset().top + 2
               }, 500, 'swing', function() {
                   window.location.hash = target;
                   $(document).on("scroll", onScroll);
               });
           });
       });

       function onScroll(event) {
           var scrollPos = $(document).scrollTop();
           $('#menu a').each(function() {
               var currLink = $(this);
               var refElement = $(currLink.attr("href"));
               if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                   $('#menu ul li a').removeClass("active");
                   currLink.addClass("active");
               } else {
                   currLink.removeClass("active");
               }
           });
       }




       $(document).ready(function() {
           $(document).on("scroll", onScroll);

           //smoothscroll
           $('a[href^="#"]').on('click', function(e) {
               e.preventDefault();
               $(document).off("scroll");

               $('a').each(function() {
                   $(this).removeClass('active');
               })
               $(this).addClass('active');

               var target = this.hash,
                   menu = target;
               $target = $(target);
               $('html, body').stop().animate({
                   'scrollTop': $target.offset().top + 2
               }, 500, 'swing', function() {
                   window.location.hash = target;
                   $(document).on("scroll", onScroll);
               });
           });
       });

       function onScroll(event) {
           var scrollPos = $(document).scrollTop();
           $('#menu a').each(function() {
               var currLink = $(this);
               var refElement = $(currLink.attr("href"));
               if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                   $('#menu ul li a').removeClass("active");
                   currLink.addClass("active");
               } else {
                   currLink.removeClass("active");
               }
           });
       }
