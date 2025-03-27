lista = [
    {
        "abc": 27,
        "tecla": ["0","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","space"],
    }
]

palabras =[
    {
        "inputs":7,
        "category": "Estas en él cuando comes",
        "word": "comedor"
    },
    {
        "inputs":7,
        "category": "Juego de mesa",
        "word": "ajedrez"
    },
    {
        "inputs":7,
        "category": "País de Europa",
        "word": "noruega"
    },
    {
        "inputs":8,
        "category": "Sabor de helado",
        "word": "pistache"
    },
]

$(document).ready(function (){
    displayKeyboard();
    fillBlanks();
})

function displayKeyboard(){
    const teclado = lista[0].tecla;
    console.log(teclado.length);
    //$("#teclado").empty();
        for (var i = 1; i<= teclado.length; i++){
            var letra = `<button class="btn btn-outline-primary" id="teclado_${i}" clickable>${lista[0].tecla[i]}</button>`
            $("#teclado_key").append(letra);
            console.log(letra);
            
        }

}

function fillBlanks(){
    // crea una conts para elegir la palabra aleatoria
    const randomWord = palabras[Math.floor(Math.random() * palabras.length)];
    //asegurar que tus espacios esten vacíos
    $("#blanks").empty();
    //Mostrar los espacios en blanco usando <span> con bucle for
    for(var i=0; i < randomWord.inputs; i++){
        var espacios = `<span class="fill_blanks" id ="input_${i}">_</span>`
        $("#blanks").append(espacios);
        $("#pista").html(randomWord.category);
    }

    //Establecer el estado del juego
    var gameOver = false;
    //Rellenamos los espacios en blanco solo si la letra coincide con randomWord    
    $("button[clickable]").click(function(){
        if(!gameOver){
            var letra = $(this).html();
            var found = false;
            var vidas = parseInt($("#lifes").text());
            //Recorrer la palabra aleatoria
            for(var i=0; i<randomWord.word.length; i++){
                if(randomWord.word[i] === letra){
                    if(vidas > 0 && !found){ 
                     //obtenemos el id y rellenamos el espacio
                      $("#input_"+i).html(letra);
                      //found = true;
                      console.log(letra);
                        //verificar que la palabra ha sido encontrada
                        if($("#blanks").text() === randomWord.word){
                            $("#result").text("!!Ganaste¡¡");
                            found = true;
                            console.log("Ganaste");
                            location.reload();
                        }
                    }
                }
            }
            if(!found ){
                //Restar una vida
                vidas = vidas - 1;
                $("#lifes").html(vidas);
                console.log("Vida perdida");
            } 
            else if(vidas === 0){
                gameOver = true;
                $("#result").text("Perdiste :(, suerte para la próxima")
                location.reload();
            }

    
        }
    });
     //Obtener el id del botón clickeado
    //Obtener las vidas del jugador



}
