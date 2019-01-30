const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'direccion de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {
    try {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp= await clima.getClima(coors.lat, coors.lng);
    return `el clima en ${coors.direccion} es de ${temp}`;
    } catch (err) {
    return `no existe informacion de la ciudad`
    }
}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err));
// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8
