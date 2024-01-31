document.addEventListener('DOMContentLoaded', function () {
    const vortex = document.getElementById("vortex");
    const myconfig = document.getElementById("myconfig");
    const equilibrium = document.getElementById("equilibrium");
    const blog = document.getElementById("blog");
    const fakegpt = document.getElementById("fakegpt");

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
});