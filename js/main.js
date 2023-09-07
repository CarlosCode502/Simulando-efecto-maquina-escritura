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

    // strings: [6000],
    // (min 14.31)
    stringsElement: '#cadenas-texto',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 65, // Velocidad en milisegundos para borrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto. en true no se elimina la nueva p de la f2
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

    // onComplete: (startDelay) => {800},

    

//   /**
//    * @property {number} typeSpeed type speed in milliseconds
//    */
//   typeSpeed: 0,

//   /**
//    * @property {number} startDelay time before typing starts in milliseconds
//    */
//   startDelay: 0,

//   /**
//    * @property {number} backSpeed backspacing speed in milliseconds
//    */
//   backSpeed: 0,

//   /**
//    * @property {boolean} smartBackspace only backspace what doesn't match the previous string
//    */
//   smartBackspace: true,

//   /**
//    * @property {boolean} shuffle shuffle the strings
//    */
//   shuffle: false,

//   /**
//    * @property {number} backDelay time before backspacing in milliseconds
//    */
//   backDelay: 700,

//   /**
//    * @property {boolean} fadeOut Fade out instead of backspace
//    * @property {string} fadeOutClass css class for fade animation
//    * @property {boolean} fadeOutDelay Fade out delay in milliseconds
//    */
//   fadeOut: false,
//   fadeOutClass: 'typed-fade-out',
//   fadeOutDelay: 500,

//   /**
//    * @property {boolean} loop loop strings
//    * @property {number} loopCount amount of loops
//    */
//   loop: false,
//   loopCount: Infinity,

//   /**
//    * @property {boolean} showCursor show cursor
//    * @property {string} cursorChar character for cursor
//    * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
//    */
//   showCursor: true,
//   cursorChar: '|',
//   autoInsertCss: true,

//   /**
//    * @property {string} attr attribute for typing
//    * Ex: input placeholder, value, or just HTML text
//    */
//   attr: null,

//   /**
//    * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
//    */
//   bindInputFocusEvents: false,

//   /**
//    * @property {string} contentType 'html' or 'null' for plaintext
//    */
//   contentType: 'html',

//   /**
//    * Before it begins typing
//    * @param {Typed} self
//    */
//   onBegin: (self) => {},

//   /**
//    * All typing is complete
//    * @param {Typed} self
//    */
//   onComplete: (self) => {},

//   /**
//    * Before each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   preStringTyped: (arrayPos, self) => {},

//   /**
//    * After each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStringTyped: (arrayPos, self) => {},

//   /**
//    * During looping, after last string is typed
//    * @param {Typed} self
//    */
//   onLastStringBackspaced: (self) => {},

//   /**
//    * Typing has been stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingPaused: (arrayPos, self) => {},

//   /**
//    * Typing has been started after being stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingResumed: (arrayPos, self) => {},

//   /**
//    * After reset
//    * @param {Typed} self
//    */
//   onReset: (self) => {},

//   /**
//    * After stop
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStop: (arrayPos, self) => {},

//   /**
//    * After start
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStart: (arrayPos, self) => {},

//   /**
//    * After destroy
//    * @param {Typed} self
//    */
//   onDestroy: (self) => {},
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