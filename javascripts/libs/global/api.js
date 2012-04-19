
/*
Filename: api.js
Simple AMD library to do api calls

@created: Wedensday, 4th April 2012
@author: Pete Hawkins <pete@phawk.co.uk>
*/


(function() {

  define(['jquery'], function($) {
    return {
      call: function(endpoint, method, params, callback) {
        params['endpoint'] = endpoint;
        params['method'] = method;
        return $.ajax({
          url: '/api_helper/api_call',
          type: 'POST',
          data: params,
          dataType: 'json',
          success: callback,
          error: function(xhr, error, status) {
            console.log(error);
            return console.log(status);
          }
        });
      }
    };
  });

}).call(this);
