import Ember from 'ember';

export default Ember.Component.extend({
	remaining: Ember.computed('todos.@each.complete', function(){
		let todo = this.get('todos');
		return todo.filterBy('complete', false).get('length');
	}),
	inflection: Ember.computed('remaining', function() {
		var remaining = this.get('remaining');
		return (remaining === 1) ? 'item' : 'items';
	}),
	completedItem: Ember.computed('todos.@each.complete', function() {
		let todo = this.get('todos');
		return todo.filterBy('complete', true).get('length');
	}),
	completed: Ember.computed('todos.@each.complete', function() {
		var todos = this.get('todos');
		return todos.filterBy('complete', true).get('length');
	}),
	hasCompleted: Ember.computed('completed', function() {
		return this.get('completed') > 0;
	}),
	allAreDone: false,
	didInsertElement() {
		console.log('did insert');
		var alldone = this.get('todos').every((item) => {
			return item.get('complete') === true;
		});
		if (alldone) {
			this.set('allAreDone', true);
		}
	},
	watchAllAreDone: function() {
		var flag = this.get('allAreDone');
		this.get('todos').forEach((item) => {
			item.set('complete', flag);
			this.sendAction('update', item);
		});
	}.observes('allAreDone'),
	actions: {
		clearCompleted() {
			let completed = this.get('todos').filterBy('complete', true);
			completed.forEach((todo) => {
				this.sendAction('deleteCompleted', todo);
			});
		}
	}
});