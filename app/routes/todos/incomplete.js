import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('complete');
		});
	},
	renderTemplate(ctrl, model) {
		this.render('todos.index', {
			model: model
		});
	}
});
