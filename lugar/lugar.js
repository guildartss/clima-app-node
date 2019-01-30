const axios =require('axios');

const getLugarLatLng = async (direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
if (resp.data.status ==='ZERO_RESULTS'){
    throw new Error ('no hay resultados para esa ciudad');
}
        let location = resp.data.results[0].formatted_address;
        let latitud = resp.data.results[0].geometry.bounds.northeast.lat;
        let longitud = resp.data.results[0].geometry.bounds.northeast.lng;
return {
    direccion: location,
    lat: latitud,
    lng: longitud
    }
}
module.exports = {
    getLugarLatLng
}
