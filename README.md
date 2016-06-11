#uber-api-gb
=========

[![npm package](https://nodei.co/npm/uber-api-gb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/uber-api-gb/)

Librería básica que permite la interacción con la api de uber, entre sus funcionalidades permite:
Obtener productos (GetProducts)
Obtener producto por Id (GetProductById)
Obtener una precio (getEstimatePrice)
Obtener una estimación de tiempo (getEstimateTime)

Se esta trabajando en nuevas funcionalidades.

## Instalación

  npm install uber-api-gb --save

## Uso
### Obtener productos
```javascript
var UberApi = require('uber-api-gb');
var uberApi = new UberApi('YOUR_SERVER_KEY');
uberApi.getProducts({'latitude': -33.4623784,'longitude': -70.6300079},function(error,response){
      'use strict';
      if(error){
        console.log(error);
      }else{
       console.log(response);
      }
});
```
### Obtener producto por Id
```javascript
var UberApi = require('uber-api-gb');
var uberApi = new UberApi('YOUR_SERVER_KEY');
uberApi.getProductById({'product_id':'24230831-a2a3-4f8f-a952-405d11caf343'},function(error,response){
      'use strict';
      if(error){
        console.log(error);
      }else{
       console.log(response);
      }
});
```
## Obtener precio
```javascript
var UberApi = require('uber-api-gb');
var uberApi = new UberApi('YOUR_SERVER_KEY');
uberApi.getEstimatePrice({'start_latitude': -33.4623784,'start_longitude': -70.6300079, 'end_latitude': -33.3969994, 'end_longitude': -70.7958233},function(error,response){
      'use strict';
      if(error){
        console.log(error);
      }else{
       console.log(response);
      }
});
```
### Obtener un tiempo de espera
```javascript
var UberApi = require('uber-api-gb');
var uberApi = new UberApi('YOUR_SERVER_KEY');
uberApi.getEstimateTime({'start_latitude': -33.4623784,'start_longitude': -70.6300079},function(error,response){
      'use strict';
      if(error){
        console.log(error);
      }else{
       console.log(response);
      }
});
```

## Tests

  npm test

# References

- [Webpage API](http://www.gat-blac.com)

## Release History

* 1.0.0 Initial release
* 1.0.1 Change Readme
