var app = app || {};

(function () {
    'use strict'
    
    app.User = Backbone.Model.extend({
        defaults() {
            return {
                name: '',
                type: '1',
                number: '0000000000000'
            }
        },

        validate( attrs ) {
            if ( !/[а-яА-Яa-zA-z0-9\-]{1,255}/gi.test(attrs.name) ) {
                return 'Имя должно быть заполнено и не больше 255 символов'
            }

            if ( !/\d{13}/gi.test(attrs.number) ) {
                return 'Номер должен быть из 13 цифр'
            }

            if ( attrs.type !== '1' && attrs.type !== '2' ) {
                return 'Тип должен быть указан'
            }
        }
    })
})()