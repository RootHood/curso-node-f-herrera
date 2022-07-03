import { inquirerMenu, listPlaces, pause, readInput } from "./helpers/inquirer.js"
import { Searchs } from "./models/searchs.js";
import dotenv from 'dotenv';

const main = async() => {
  dotenv.config();
  const searchs  = new Searchs();
  let opt;

  do {
    opt = await inquirerMenu()
    switch(opt) {
      case 1: 

        // MOSTRAR MENSAJE
        const serchTerms = await readInput('Ciudad: ');
        const places = await searchs.town(serchTerms);

        // BUSCAR LUGARES
        const selectedId = await listPlaces(places);
        const selectedPlace = places.find(place => place.id === selectedId);
      
        // SELECCIONAR EL LUGAR
        // CLIMA
        // MOSTRAR RESULTADOS
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:',selectedPlace.name);
        console.log('Lat:',selectedPlace.lat);
        console.log('Lng:',selectedPlace.lng);
        console.log('Temperatura:',);
        console.log('Mínima:',);
        console.log('Máxima:', );
        console.log('\n');
        break;
      case 2: 
        console.log('Historial')  ;
        break;
      case 0: 
        console.log('Salir');       
        break;
    }
    await pause();
  } while (opt !== 0);
}

main();