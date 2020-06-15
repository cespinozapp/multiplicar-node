//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

console.log(argv.base);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no existe');

}
//console.log(multiplicar);

//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.limite);
//multiplicar.crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`));