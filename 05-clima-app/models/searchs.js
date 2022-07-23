import * as fs from 'fs';
import axios from 'axios';

export class Searchs {

  historial = [];
  dbPath = './db/db.json';

  constructor() {
    this.getData();
  }

  async town( place = '' ) {

    try {

      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
        params: this.paramsMapBox,
      });

      const resp = await instance.get();
      return resp.data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      console.log('Error', error);
      return [];
    }
  }

  get paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es',
    }
  }

  async weatherByCoordinates(lat, lon) {
    try {          
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeatherMap, lat, lon},
      });

      const resp = await instance.get(); 
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      }
    } catch(error) {
      console.log(error);
    }
  }

  get paramsWeatherMap() {
    return {
      'appid': process.env.WEATHER_KEY,    
      'units': 'metric',
      'lang': 'es',
    }
  }

  get historialCapitalized () {
    return this.historial.map(place => {
      let words = place.split(' ');
      words = words.map(word => word[0].toUpperCase() + word.substring(1));
      return words.join(' ');
    });
  }

  saveHistorial(place = '') {
    // todo: prevent duplicates
    // if (this.historial.some(place => place.toLocaleLowerCase() === place.toLocaleLowerCase())) { return; }
    if (this.historial.includes(place.toLocaleLowerCase())) { return; }

    this.historial.unshift(place.toLocaleLowerCase());


  }

  saveData() {
    const payload = {
      historial: this.historial
    }
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  getData() {
    const info = fs.readFileSync(this.dbPath, { encode: 'utf8' });
    console.log(info);
    if (!info) { return; }
    this.historial = JSON.parse(info).historial;
  }
}