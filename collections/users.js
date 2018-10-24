var app = app || {};

(function () {
    'use strict'

    const Users = Backbone.Collection.extend({
        model: app.User,

        localStorage: new Backbone.LocalStorage('users'),
        
        filterByType(type) {
            if (type == '1' || type == '2') {
                return _(this.where({ type }))
            } else {
                return this
            }
        },
        
        getNextId() {
            return new Date().getTime()
        }
    })
  
    app.users = new Users()
})()