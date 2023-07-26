const etiquetaP = document.getElementById("textoJs"); /*selecciona un elemento por su id solo 1 o el primero*/
etiquetaP.style.color = "red";  /*se cabia el estilo de color de el texto de etiquetaP*/

etiquetaP.addEventListener("click", function(){
    etiquetaP.style.color="orange"
});    /* al hacer click sobre el texto cambia a color naranja*/

const ListP = document.getElementsByTagName("p"); /*muestra todos los elementos de etiqueta p como array de elementos*/
console.log(ListP); /* nos muestra en la onsola del navegador las etiquetas p*/

/*javascript moderno*/

/*querySelector(selector)-> un solo elemento*/
/*querySelectorAll(selector)  -> varios elementos*/

const selectorP = document.querySelector("p#textoJs") /* selecciona el id  textojs en la etiqueta p*/
const selectorPall = document.querySelectorAll("p#textoJs") /*idem al anterior y nos trae todo os elementos*/

setTimeout(()=>{etiquetaP.remove();},3000)  /*remueve el elemento del dom etiquetaP a los 3 segundos*/

