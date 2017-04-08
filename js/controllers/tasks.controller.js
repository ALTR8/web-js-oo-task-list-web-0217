'use strict';
// Tasks Controller
class TasksController {
	constructor(){
		this.$addTaskForm = $('#add_task')
		this.$taskDescriptionInput = $('#task_description')
		this.$selectListMenu = $('#select_list')
		this.$taskPriorityInput = $('#task_priority')
		this.$wrapper = $('#wrapper')
	}

	addTaskFormListener(){
		var self = this
		this.$addTaskForm.submit((event) => {
			event.preventDefault()
			var listId = parseInt(self.$selectListMenu.val())
			var task = new Task(self.$taskDescriptionInput.val(), self.$taskPriorityInput.val(), List.all[listId])
			task.build()
			self.$taskDescriptionInput.val("")
			self.$taskPriorityInput.val("")
		})
	}

	deleteTaskFormListener(){
		this.$wrapper.on('click', '.destroy-task', function(){
			let listId = parseInt($(this).parents('ul').data('id'))
			let taskId = parseInt($(this).parents('li').data('id'))
			var list = List.all[listId]
				list.tasks.splice(taskId, 1, null);
				this.parentElement.remove()
		})
	}


	init(){
		this.addTaskFormListener()
		this.deleteTaskFormListener()
	}
}
