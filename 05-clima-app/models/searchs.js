import axios from 'axios';

export class Searchs {

  historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

  constructor() {
    // TODO: Read db if exists
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
      console.log(error);
      return [];
    }
    
    return []; // TODO: get all town filtered by place.
  }

  get paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es',
    }
  }

}