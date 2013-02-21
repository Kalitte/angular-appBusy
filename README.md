#Application Busy Service for AngularJs
===============
This is a simple busy service for AngularJs. It allows you to set a busy message, timeout value and css class for dom container.

##Typical Usage inside a controller
<pre>
function AppCtrl($scope, appBusy) {
    // Use default message i.e. Loading ...
    appBusy.set();

    setTimeout(function () {

        // set a custom message
        appBusy.set("Still loading ...");
    }, 2000);

    setTimeout(function () {
        // done.
        appBusy.set(false);
    }, 5000);
}
</pre>

##Configuration

Below is a sample configuration
<pre>
angular.module('myApp', ['kalitte.services'])
.config(function (appBusyProvider) {
    appBusyProvider.setMsg('Loading ...');
    appBusyProvider.setTimeout(500);
    appBusyProvider.setClazz('appBusy');
});

</pre>
Enjoy!

