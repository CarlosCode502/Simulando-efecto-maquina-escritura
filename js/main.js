// Esta es una propiedad de JS (min 10:35)
const typed_name = new Typed('.typed-name', {
    // aqui definimos los strings que va a contener nuestro código pero se mostrara muy rapido (min 11.03)
    // strings:[
    //     // cambio el color a través de una etiqueta html para css(min 12.36)
    //     '<i class="mascota">Carlos Herrera.</i>'
    //     // , 
    //     // '<i class="mascota">C#.</i>'

    //     // , 
    //     // '<i class="mascota">MVC.</i>', 
    //     // '<i class="mascota">WinForms.</i>', 
    //     // '<i class="mascota">ETF.</i>', 
    //     // '<i class="mascota">SQL.</i>', 
    //     // '<i class="mascota">Y muchos otros más.</i>'
    // ],

    // (min 14.31)
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 65, // Velocidad en milisegundos para borrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto. en true no se elimina la nueva p de la f2
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato 
});


// // Esta es una propiedad de JS (min 10:35)
// const typed = new Typed('.typed', {
//     // aqui definimos los strings que va a contener nuestro código pero se mostrara muy rapido (min 11.03)
//     strings:[
//         // cambio el color a través de una etiqueta html para css(min 12.36)
//         '<i class="mascota">.Net.</i>', 
//         '<i class="mascota">C#.</i>', 
//         '<i class="mascota">MVC.</i>', 
//         '<i class="mascota">WinForms.</i>', 
//         '<i class="mascota">ETF.</i>', 
//         '<i class="mascota">SQL.</i>', 
//         '<i class="mascota">Y muchos otros más.</i>'
//     ],

//     // (min 14.31)
//     //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
// 	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
// 	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
// 	backSpeed: 75, // Velocidad en milisegundos para borrar una letra,
// 	//smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
// 	shuffle: false, // Alterar el orden en el que escribe las palabras.
// 	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.(type y back - Speed)
// 	loop: true, // Repetir el array de strings
// 	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
// 	showCursor: true, // Mostrar cursor palpitanto
// 	cursorChar: '|', // Caracter para el cursor
// 	contentType: 'html', // 'html' o 'null' para texto sin formato(sin esta propiedad se muestra el html)
// });

// (min 10:35)