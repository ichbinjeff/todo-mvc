import Ember from 'ember';

export default Ember.Route.extend({
	  model() {
        return this.store.findAll('todo');
    },
    renderTemplate(ctrl, model) {
        this.render('todos', {
            model: model
        })
    },
    actions: {
    	createTodo(newTitle) {
      		this.store.createRecord('todo', {
                 title: newTitle,
                 complete: false
             }).save();
    	},
      deleteTodo(todo) {
          console.log('at todo lev');
          todo.destroyRecord();
      },
      updateTodo(todo) {
          todo.save();
          console.log('todo level');
      }

    }
});
