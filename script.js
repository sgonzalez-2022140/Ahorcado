
// Elegir palabras al azar 
const palabras = [`Agucate`,`Mono`,`Llorona`,`Sujeto`,`Lavadora`];
const aleatorio = palabras[Math.floor(Math.floor(Math.random() * palabras.length))]

console.log(aleatorio);

// graficar

function drawLine(){
    const canvas = document.getElementById("canvas");
    if ( canvas.getContext ){
        const ctx = canvas.getContext("2d");

        const circle = new Path2D();
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx.fill(circle);
    }

    
}


