var app = app || {};

(function ($) {
    'use strict'

    const types = {
        '1': {
            short: 'Ф',
            full: 'Физическое лицо'
        },        
        '2': {
            short: 'Ю',
            full: 'Юридическое лицо'
        }
    }

    app.UserView = Backbone.View.extend({
        tagName:  'tr',

        attributes: {
            class: 'collection-item'
        },

        template(data) {
            const {
                id,
                type,
                name,
                number
            } = data

            return `<td>${ id }</td>
                    <td>
                        <div class="text">
                            ${ name }
                        </div>
                        <input class="input-name form" type="text" value="${ name }" placeholder="Имя">
                    </td>
                    <td>
                        <div class="text tooltipped">${ types[type].short } <div class="material-tooltip">${ types[type].full }</div></div>
                        
                        <select class="input-type form" value="${ type }">
                            <option value="1">${ types['1'].full }</option>
                            <option value="2">${ types['2'].full }</option>
                        </select>
                    </td>
                    <td>
                        <div class="text"> ${ number } </div>
                        <input class="input-number form" type="text" value="${ number }" placeholder="Номер">
                    </td>
                    <td>
                        <i class="material-icons secondary-content text delete">clear</i>
                        <i class="material-icons secondary-content text edit">edit</i>
                        <i class="material-icons secondary-content form done">done</i>
                    </td>`
        },

        events: {
            'click .delete': 'clear',
            'click .edit': 'edit',
            'dblclick': 'edit',
            'click .done': 'done',
            'keypress': 'doneOnEnter',
			'keydown': 'cancelOnEscape'
        },
        
        initialize() {
            this.listenTo(this.model, 'change', this.render)
            this.listenTo(this.model, 'destroy', this.remove)
        },

        render() {
            this.$el.html(this.template(this.model.toJSON()))
            
            this.inputName = this.$('.input-name')
            this.inputType = this.$('.input-type')
            this.inputNumber = this.$('.input-number')

            return this
        },

        edit() {
            this.$el.addClass('editing')
            this.inputName.focus()
        },

        done() {
            const data = {
                name: this.inputName.val(),
                type: this.inputType.val(),
                number: this.inputNumber.val()
            }
            const user = new app.User(data)
            
            if (user.isValid()) {
                this.model.save(data)

                this.$el.removeClass('editing')
            } else {
                alert(user.validationError)
            }
        },

        clear() {
            this.model.destroy()
        },

        cancelOnEscape(e) {
			if (e.which === 27) {
                this.$el.removeClass('editing')
                
                this.inputName.val(this.model.get('name')),
                this.inputType.val(this.model.get('type')),
                this.inputNumber.val(this.model.get('number'))
			}
		},
        
        doneOnEnter(e) {
			if (e.which === 13) {
				this.done();
			}
		}
    })
})(jQuery)