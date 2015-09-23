import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNameBindings: ['editing'],
	editing: false,
	actions: {
		editTodo() {
			this.toggleProperty('editing');
		},
		submitTodo() {
			let todo = this.get('a');
			if (todo.get('title') === "") {
				this.sendAction('deleteTodo', todo);
			} else {
				console.log('todo item');
				this.sendAction('updateTodo', todo);
			}
			this.set('editing', false);
		},
		deleteTodo() {
			let todo = this.get('a');
			this.sendAction('deleteTodo', todo);
		}
	}
});
