export const sizeCanvas = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth - 17
    canvas.height = window.innerHeight

    if(window.innerWidth < 500) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        // alert("El sistema esta en modo oscuro")
    }else{
        // alert("El sistema no esta en modo oscuro")
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth < 500) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }else{
            canvas.width = window.innerWidth - 17
            canvas.height = window.innerHeight
        }
    })

    // Crear el gradiente radial
    const gradient = ctx.createRadialGradient(100, 100, 10, 400, 400, 500);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "yellow");

    const particles = [];
    setInterval(() => {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 40,
            vx: 0,
            vy: -Math.floor(Math.random() * (1 * 3 - 1) + 1),
            s: Math.floor(Math.random() * 41) + 10,
            b: `hwb(${Math.floor(Math.random() * (361 - 1 + 1) + 1)} 0% 0%)`
        });
        if (particles.length === 10) {
            particles.shift()
        }
    }, 1500);

    // Función para actualizar la posición de las partículas y redibujarlas
    function update() {
        // Borrar el canvas antes de dibujar las partículas en su nueva posición
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar la posición de cada partícula
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Si la partícula llega al borde del canvas, hacer que rebote
            // if (p.x < 0 || p.x > canvas.width) {
            //     p.vx = -p.vx;
            // }
            // if (p.y < 0 || p.y > canvas.height) {
            //     p.vy = -p.vy;
            // }

            // Dibujar la partícula en su nueva posición
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
            ctx.fillStyle = p.b
            ctx.shadowColor = p.b
            ctx.shadowBlur = 40;
            ctx.fill();

        });

        // Solicitar que se vuelva a llamar a la función update() en el próximo fotograma
        requestAnimationFrame(update);
    }

    // Iniciar la animación
    requestAnimationFrame(update);
}