
// Elegir palabras al azar 
const palabras = [`Agucate`,`Mono`,`Llorona`,`Sujeto`,`Lavadora`];
const aleatorio = palabras[Math.floor(Math.floor(Math.random() * palabras.length))];

document.getElementById(`palabra`).value=aleatorio;

console.log(aleatorio);

//Dar valor a los botones
function botones (valor) {
    var i=document.getElementById("A").value = "A";
    if(i = true){
        window.alert(`A`);
    }
    

} 


// graficar

var lienzo = document.getElementById("lienzo");
		if (lienzo && lienzo.getContext) {
		var contexto = lienzo.getContext("2d");
			if (contexto) {
					
                    var X = lienzo.width/2;
					var Y = lienzo.height/2;
					var r = 75;

                    
					contexto.strokeStyle = "#A57E6E";
					contexto.fillStyle = "#D2A18C";
					contexto.lineWidth = 5;

					contexto.arc(X,Y,r,0,2*Math.PI);
					contexto.fill();
					contexto.stroke();
			}
		}


