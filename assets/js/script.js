function obtenerDigimonPromesas(){
    return new Promise(function(resolve,reject){

        fetch('https://digimon-api-vercel.app/api/digimon')
        .then(function(digimones){
            if(!digimones.ok){
                throw new error ("Que aweonao se equivoco");
            }
            return digimones.json();
        })
        .then(function(data){
            resolve(Data);
        })
        .catch((error)=>{
            console.log(`el error es:${error}`);
        })
    })
}
function generaSaludo(){
    console.log("hola");
}
obtenerDigimonPromesas()
.then((digimones)=>{
    digimones.map((digimon)=>{
        console.log(digimon);
    })
})
.catch((error)=>{
    console.log(`el error es: ${error}`);
})
generarSaludo();