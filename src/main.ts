import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXNkMTkiLCJhIjoiY200cnQxaHliMDltZTJycHpnbWUxbDQxeCJ9.Ok0jc1X6u601A6nzZ0KAfA';

if( !navigator.geolocation ) {
  alert('Navegador no soporta la geolocalización')
  throw new Error('Navegador no soporta la Geolocalización');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
