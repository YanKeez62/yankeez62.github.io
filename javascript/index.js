document.addEventListener('DOMContentLoaded', function () {
    const vortex = document.getElementById("vortex");
    const myconfig = document.getElementById("myconfig");
    const equilibrium = document.getElementById("equilibrium");
    const blog = document.getElementById("blog");
    const fakegpt = document.getElementById("fakegpt");
    const manga = document.getElementById("mangalibrary");
    const twitch = document.getElementById("twitch");
    const phasmohelp = document.getElementById("phasmohelp");
    const firsttry = document.getElementById("firstTry");
    const blogStage = document.getElementById("blogStage");
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("menu");
    const nava = document.getElementById('nav_a');
    const nava2 = document.getElementById('nav_a2');
    const nava3 = document.getElementById('nav_a3');
    const nava4 = document.getElementById('nav_a4');

    vortex.addEventListener('click', function () {
        window.location.href = "vortex.html";
    });

    myconfig.addEventListener('click', function () {
        window.location.href = "myconfig.html";
    });

    equilibrium.addEventListener('click', function () {
        window.location.href = "equilibrium.html";
    });

    blog.addEventListener('click', function () {
        window.location.href = "blog.html";
    });

    fakegpt.addEventListener('click', function () {
        window.location.href = "fakegpt.html";
    });

    manga.addEventListener('click', function () {
        window.location.href = "mangalibrary.html";
    });
    twitch.addEventListener('click', function () {
        window.location.href = "twitch.html";
    });

    phasmohelp.addEventListener('click', function () {
        window.location.href = "phasmohelp.html";
    });

    firsttry.addEventListener('click', function () {
        window.location.href = "firstTry.html";
    });

    blogStage.addEventListener('click', function () {
        window.location.href = "blogStage.html";
    });

    // Encre de navigation fluide
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    hamburger.addEventListener('click', function () {
        nav.classList.add('active');
    });

    nava.addEventListener('click', function () {
        setTimeout(function () {
            nav.classList.remove('active');
        });
    });

    nava2.addEventListener('click', function () {
        setTimeout(function () {
            nav.classList.remove('active');
        });
    });

    nava3.addEventListener('click', function () {
        setTimeout(function () {
            nav.classList.remove('active');
        });
    });

    nava4.addEventListener('click', function () {
        setTimeout(function () {
            nav.classList.remove('active');
        });
    });
});