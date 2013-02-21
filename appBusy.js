/**
 * @license Application Busy Service for AngularJS
 * (c) 2013 Tansu TURKOGLU
 * License: MIT
 */

var appServices = angular.module('kalitte.services', []).provider("appBusy", function () {

    // initialize
    this.msg = "Loading ...";
    this.timeout = 1000;
    this.clazz = "appBusy";

    var body = angular.element(window.document.body);
    var domEl = null;

    this.show = function (msg) {
        msg = msg || this.msg;

        // if not already busy
        if (!domEl) {
            domEl = angular.element('<div></div>').addClass(this.clazz);
            domEl.text(msg);
            setTimeout(function () {

                // if still busy add it to body.
                if (domEl)
                    body.append(domEl);
            }, this.timeout);
        } else {

            // update busy message
            domEl.text(msg);
        }
    }

    this.hide = function () {
        if (domEl) {
            domEl.remove();
            domEl = null;
        }
    }

    this.$get = function () {
        var self = this;
        return {
            set: function (msg) {
                if (typeof msg == 'boolean') {
                    msg === true ? self.show() : self.hide();
                } else self.show(msg);
            }
        }
    }

    this.setMsg = function (val) {
        this.msg = val;
    }

    this.setTimeout = function (val) {
        this.timeout = val;
    }

    this.setClazz = function (val) {
        this.clazz = val;
    }
});

//appServices.config(function (appBusyProvider) {
//    appBusyProvider.setMsg('Loading ...');
//    appBusyProvider.setTimeout(1000);
//    appBusyProvider.setClazz('appBusy');
//});
