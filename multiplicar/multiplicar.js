const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('============================================================');
    console.log(`==================== Tabla del ${base} =====================`.red);
    console.log('============================================================');

    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('It isnt a valid number');
            return;
        }

        let data = '';
        const nameFile = `tabla-${base}.txt`;

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/${nameFile}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nameFile);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla,
}
