document.addEventListener('DOMContentLoaded', function () {
    function restartAnimation() {
        let titleAnim = document.querySelector(".AnimMachine");
        titleAnim.style.animation = "none";
        void titleAnim.offsetWidth;
        titleAnim.style.animation = "typing 3s steps(16, end) forwards, blink 0.7s infinite";
    }
      
    setInterval(restartAnimation, 15000);
      
    const vortex = document.getElementById("vortex");
    const hachinosu = document.getElementById("hachinosu");
    const tiktok = document.getElementById("tiktok")
    const myconfig = document.getElementById("myconfig");
    const equilibrium = document.getElementById("equilibrium");
    const blog = document.getElementById("blog");
    const fakegpt = document.getElementById("fakegpt");
    const manga = document.getElementById("mangalibrary");
    const twitch = document.getElementById("twitch");
    const phasmohelp = document.getElementById("phasmohelp");
    const firsttry = document.getElementById("firstTry");
    const timestreak = document.getElementById("timestreak");
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

    hachinosu.addEventListener('click', function () {
        window.location.href = "hachinosu.html";
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

    timestreak.addEventListener('click', function () {
        window.location.href = "timestreak.html";
    });

    blogStage.addEventListener('click', function () {
        window.location.href = "blogStage.html";
    });

    tiktok.addEventListener('click', function () {
        window.location.href = "tiktok.html";
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

function filterProjects(category) {
    let projects = document.querySelectorAll('.projet');

    projects.forEach(proj => {
        if (category === "all" || proj.classList.contains(category)) {
            proj.classList.add("show");
        } else {
            proj.classList.remove("show");
        }
    });

    // Animation de fond
    const canvas = document.getElementById("particleCanvas");
        const ctx = canvas.getContext("2d");
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particlesArray = [];
        const numberOfParticles = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() * 0.5 - 0.25); 
                this.speedY = (Math.random() * 0.5 - 0.25);
                this.opacity = Math.random() * 0.1 + 0.05;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        init();
        animate();
}

// Afficher tous les projets au chargement de la page
document.addEventListener("DOMContentLoaded", () => filterProjects("all"));