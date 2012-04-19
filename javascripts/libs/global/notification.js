
/*
Filename: notification.js
Simple AMD library to alert notifications to the user

@created: Monday, 2nd April 2012
@author: Pete Hawkins <pete@phawk.co.uk>
*/


(function() {

  define(['jquery', 'handlebars', 'text!templates/notifications/alert.html'], function($, Handlebars, alertNotificationTemplate) {
    return {
      template: Handlebars.compile(alertNotificationTemplate),
      /*
        Alert
        Displays notifications on screen for the user
      
        @type: = "success", "info", "alert".
      */

      alert: function(type, message, header) {
        $('.main-body').prepend(this.template({
          "type": type,
          "message": message,
          "header": header
        }));
        $('.jNotify').slideDown("fast");
        return $('.jNotify .close').click(function(e) {
          e.preventDefault();
          return $(this).parent().slideUp("fast", function() {
            return $(this).remove();
          });
        });
      }
    };
  });

}).call(this);
