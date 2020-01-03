// const fs = require('express');
// const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        // crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.error(err));
    break;
    default:
        console.log('Command not exits');
}

// console.log(process.argv);
// let argv2 = process.argv;

// console.log('base', argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);

// let param = argv[2];
// let base = param.split('=')[1];

// multiplicar.crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//             .catch(err => console.error(err));