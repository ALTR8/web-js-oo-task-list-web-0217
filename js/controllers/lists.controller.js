'use strict';
// Lists Controller

class ListsController {
	constructor(){
		this.$addListForm = $('#add_list')
		this.$listTitleInput = $('#list_title')
		this.$selectListMenu = $('#select_list')
		this.$addTaskForm = $('#add_task')
		this.$wrapper = $('#wrapper')
	}

	hideTaskForm(){
		this.$addTaskForm.hide()
	}

	addListForm(){
		this.$addListForm.submit((event) => {
			event.preventDefault()
			this.addTaskForm()
		})
	}

	addTaskForm(){
		var newList = new List(this.$listTitleInput.val())
		newList.build()
		this.$addTaskForm.one().show()
		this.$listTitleInput.val("")
	}

	deleteList(){
		var self = this;
  		this.$wrapper.on('click', '.destroy-list', function(){ //live event listener
    		var listId = parseInt($(this).parents('h2').next('ul').data('id'));
    		List.all.splice(listId, 1, null);
    		self.$selectListMenu.find('option[value="'+listId+'"]').remove();
    		$(this).parents('.list').remove();
 		 });

	}



	init(){
		this.hideTaskForm()
		this.addListForm()
		this.deleteList()

	}
}


