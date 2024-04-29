const obtenerDigimonAsyncAwait =async() =>{
    try{
        const response = await fetch('https://digimon-api-vercel.app/api/digimon');

        if (!responde.ok){
            throw new error('hay un problema con los datos');
        }
        const data =await response.json();
        return data;
    } catch(error){
        throw error;
    }    
}

//ejemplo de uso
(async function(){
    try{
        const data = await obtenerDigimonAsyncAwait();
        console.log('datos de digimon obtenido correctamente:',data);
    }catch(error){
        console.error('erro al obtener datos de digimon:',error);
    }
})();