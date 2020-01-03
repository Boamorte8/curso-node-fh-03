const options = [
    {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10
        }
    },
];

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', options[0])
    .command('crear', 'Genera un archivo en texto plano con la tabla del número pasado como parámetro', options[0])
    .help()
    .argv;

module.exports = {
    argv
}