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

//Funcion para mostrar los digimones en cartas
const mostrarDigimon = async ()=>{
    const digimonRow = document.getElementById('digimonRow');
    try{
        const digimones = await obtenerDigimonAsyncAwait();
        //localStorage.setItem("digimones", JSON, stringify(digimones));
        digimones.map((digimon)=>{
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-sm-4');

            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('mt-2');
            card.classList.add('mb-2');

            const cardImg = document.createElement('img');
        })
    }
}