// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Las palabras quedaran cortas", time: 15 },
  { text: "Para decirte lo feliz que me haces", time: 18 },
  { text: "Estoy muy happy de poder", time: 27 },
  { text: "Conocerte cada dia", time: 32 },
  { text: "Un poquito mas", time: 33 },
  { text: "Espero podamos compartir mas", time: 41 },
  { text: "Y mas aventuras juntos", time: 47 },
  { text: "Gracias por no rendirte conmigo", time: 54 },
  { text: "Aunque soy todo un caso jaja", time: 59 },
  { text: "Te quiero <3", time: 67 },
  { text: "Me haces muy feliz", time: 72 },
  { text: "Espero poder tambien estar", time: 78 },
  { text: "Haciendote feliz 7u7", time: 83 },
  { text: "Gracias <3 Osita jaja ", time: 91 },
  { text: "Sinceramente este era el proyecto que queria regalarte", time: 97 },
  { text: "Tu que opinas? :3 ¿te gusta?", time: 104 },
  { text: "Nunca hice nada igual jaja", time: 108 },
  { text: "Me salio en tiktok", time: 114 },
  { text: "Y me dije, ella jamas sera espectadora", time: 119 },
  { text: "Solo me demore 2 dias D:", time: 124 },
  { text: "Haria todo por ti :3, menos drogas plis ", time: 130 },
  { text: "Acepto tu oferta :3", time: 135 },
  { text: "Siendo o no siendo, siempre podras contar conmigo", time: 140 },
  { text: "Si me necesitas estare", time: 145 },
  { text: "Si me necesitas ire", time: 149 },
  { text: "Si me necesitas solo buscame :3", time: 153 },
  { text: "Lo mas probable es que el barbon sea el culpable jaja", time: 157 },
  { text: "Porque no hay dia, que no le agradezca a Dios haberte conocido :3", time: 161 },
  { text: "Crezcamos juntos y hagamos mas plata :D", time: 166 },
  { text: "Por tus sueños, por mis sueños, por los nuestros :3", time: 171 },
  { text: "Gracias por tanto Angie ", time: 252 },
  { text: "Gracias por tanto mor :)", time: 260 },
  { text: "Este es uno, de los regalos de cumpleaños que tengo para ti", time: 265 },
  { text: "to be continued ( alta referencia a pokemon XD )", time: 269 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 12000);