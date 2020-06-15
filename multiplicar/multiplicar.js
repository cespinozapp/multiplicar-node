const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    let data = '';

    console.log('=============================='.green);
    console.log(`====== tabla de ${ base }=====`.green);
    console.log('=============================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ i*base } \n`;
    }
    console.log(data);

};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor e la base no es un numero ${ base }`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ i*base } \n`;
        }

        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }`);
        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}