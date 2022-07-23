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
        // BUSCAR LUGARES
        const serchTerms = await readInput('Ciudad: ');
        const places = await searchs.town(serchTerms);

        // SELECCIONAR EL LUGAR
        const selectedId = await listPlaces(places);
        if (!selectedId) { continue; }

        const selectedPlace = places.find(place => place.id === selectedId);
        // GUARDAR EN DB
        searchs.saveHistorial(selectedPlace.name);
        searchs.saveData();
      
        // CLIMA
        const weatherResult = await searchs.weatherByCoordinates(selectedPlace.lat, selectedPlace.lng);

        // MOSTRAR RESULTADOS
        console.clear();
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:',selectedPlace.name);
        console.log('Lat:',selectedPlace.lat);
        console.log('Lng:',selectedPlace.lng);
        console.log('Temperatura:',weatherResult.temp);
        console.log('Mínima:',weatherResult.min);
        console.log('Máxima:',weatherResult.max);
        console.log('Descripción:',weatherResult.desc);
        console.log('\n');
        break;
      case 2: 
        console.clear();
        searchs.historialCapitalized.forEach((place, i) => {
          const index = `${ i + 1 }`.green;
          console.log(`${ index }. ${ place }`);
        })
        console.log('\n');
        break;
      case 0: 
        console.log('Salir');       
        break;
    }
    await pause();
  } while (opt !== 0);
}

main();