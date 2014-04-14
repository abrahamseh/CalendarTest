var calendar = {
    createEvent: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Calendar', // mapped to our native Java class called "Calendar"
            'addCalendarEntry', // with this action name
            [{ }]
        ); 
     }
}
module.exports = calendar;
