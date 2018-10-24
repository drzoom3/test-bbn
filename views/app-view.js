var app = app || {};

(function ($) {
    'use strict'

    app.AppView = Backbone.View.extend({
        el: $('#app'), 
    
        events: {
            'click #btn-new-user':  'createNewUser',
            'click #clear-list': 'clearAll',
            'change #filter-type': 'filterByType',
        },
        
        initialize() {    
            this.inputName = this.$('#name')
            this.inputNumber = this.$('#number')
            this.inputType = this.$('#type')
    
            this.listenTo(app.users, 'add', this.addOne)

            app.users.fetch()
        },
        
        renderFiltered(users) {
            this.$('#user-list').empty()
         
            users.each( user => this.addOne(user))

            return this
        },
        
        addOne(user) {
            const view = new app.UserView({ model: user })

            this.$('#user-list').append(view.render().el)
        },

        createNewUser(e) {
            e.preventDefault()

            const id = app.users.getNextId()

            const user = new app.User({
                id,
                name: this.inputName.val(),
                type: this.inputType.val(),
                number: this.inputNumber.val()
            })

            if (user.isValid()) {
                app.users.add(user)
                user.save()

                this.inputName.val('')
                this.inputNumber.val('')
                this.inputType.val('')
            } else {
                alert(user.validationError)
            }
        },

        filterByType(e) {
            const type = e.target.value

            this.renderFiltered(app.users.filterByType(type))
        },
    
        clearAll() {
            _.chain(app.users.models).clone().each( model => model.destroy() )
        }
  
    })

})(jQuery)