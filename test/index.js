var should = require('chai').should();
var UberApi = require('../index');
var uberApi = new UberApi('INSERT_YOUR_KEY');

describe('#uberApi',function(){
  it('uber::getProducts', function(done) {
    uberApi.getProducts({'latitude': -33.4623784,'longitude': -70.6300079},function(error,response){
      'use strict';
      var cod_error = 1;
      if(error){
        cod_error = 0;
      }
      cod_error.should.equal(1);
      done();
    });
  });
  it('uber::getProductById', function(done){
    uberApi.getProductById({'product_id':'24230831-a2a3-4f8f-a952-405d11caf343'},function(error,response){
      'use strict';
      var cod_error = 1;
      if(error){
        cod_error = 0;
      }
      cod_error.should.equal(1);
      done();
    });
  });
  it('uber::getEstimatePrice', function(done) {
    uberApi.getEstimatePrice({'start_latitude': -33.4623784,'start_longitude': -70.6300079, 'end_latitude': -33.3969994, 'end_longitude': -70.7958233},function(error,response){
      'use strict';
      var cod_error = 1;
      if(error){
        cod_error = 0;
      }
      cod_error.should.equal(1);
      done();
    });
  });
  it('uber::getEstimateTime', function(done) {
    uberApi.getEstimateTime({'start_latitude': -33.4623784,'start_longitude': -70.6300079},function(error,response){
      'use strict';
      var cod_error = 1;
      if(error){
        cod_error = 0;
      }
      cod_error.should.equal(1);
      done();
    });
  });
});
