'use strict';
var request = require('request');
var _config = require('./config');

/**
* Class Uber Api GB
* @class GatBlacApi
* @constructor
*/
var UberApi = function(serverToken){
  this.serverToken = serverToken;
};

/**
* Generates url with api path.
* @return {String} url
* @param {String} baseUrl
* @param {String} path
* @private
*/
UberApi.prototype._buildURL = function(path){
  return _config.url + '/' + _config.version + path;
};

/**
* Get Products
* @return {Function} callback with error or Uber Products
* @param {Object} latitude and longitude
*/
UberApi.prototype.getProducts = function(params,callback){
  let url = this._buildURL('/products');
  request({
  'url':url,
  'qs':{
    'server_token': this.serverToken,
    'latitude': params.latitude,
    'longitude': params.longitude,
  },
  'json': true
  }, function(error, response, body){
   if (error) {
     callback(error,null);
   } else if (body.error) {
     callback(response.body.error,null);
   } else {
     callback(null,response.body);
   }
 });
};

/**
* Get Product By Id
* @return {Function} callback with error or Uber Products
* @param {Object} product_id
*/
UberApi.prototype.getProductById = function(params,callback){
  let url = this._buildURL('/products') + '/' + params.product_id;
  request({
  'url':url,
  'qs':{
    'server_token': this.serverToken
  },
  'json': true
  }, function(error, response, body){
   if (error) {
     callback(error,null);
   } else if (body.error) {
     callback(response.body.error,null);
   } else {
     callback(null,response.body);
   }
 });
};

/**
* Get Estimate Price
* @return {Function} callback with error or Uber Estimate price
* @param {Object} start_latitude, start_longitude, end_latitude, end_longitude, number of seat (optional)
*/
UberApi.prototype.getEstimatePrice = function(params, callback){
  let url = this._buildURL('/estimates/price');
  request({
  'url':url,
  'qs':{
    'server_token': this.serverToken,
    'start_latitude': params.start_latitude,
    'start_longitude': params.start_longitude,
    'end_latitude': params.end_latitude,
    'end_longitude': params.end_longitude,
    'seat_count': params.seat_count
  },
  'json': true
  }, function(error, response, body){
   if (error) {
     callback(error,null);
   } else if (body.error) {
     callback(response.body.error,null);
   } else {
     callback(null,response.body);
   }
 });
}

/**
* Get Estimate Time
* @return {Function} callback with error or Uber Estimate time
* @param {Object} start_latitude, start_longitude, product_id (optional)
*/
UberApi.prototype.getEstimateTime = function(params, callback){
  let url = this._buildURL('/estimates/time');
  request({
  'url':url,
  'qs':{
    'server_token': this.serverToken,
    'start_latitude': params.start_latitude,
    'start_longitude': params.start_longitude,
    'product_id': params.product_id
  },
  'json': true
  }, function(error, response, body){
   if (error) {
     callback(error,null);
   } else if (body.error) {
     callback(response.body.error,null);
   } else {
     callback(null,response.body);
   }
 });
}

module.exports = UberApi;
