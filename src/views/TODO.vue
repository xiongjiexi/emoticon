<template>
    <section class="todoapp" v-cloak>
			<header class="header">
				<!-- <h1>todos</h1> -->
				<input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keydown.enter="addTodo">
			</header>
			<section class="main" v-show="todos.length">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo == editedTodo}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editTodo(todo)">{{todo.title}}</label>
							<button class="destroy" @click="removeTodo(todo)"></button>
						</div>
						<input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" 
							@blur="doneEdit(todo)" @keydown.enter="doneEdit(todo)" @keydown.esc="cancelEdit(todo)">
					</li>
				</ul>
			</section>
			<footer class="footer" v-show="todos.length">
				<span class="todo-count">
					<strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
				</span>
				<ul class="filters">
					<li><a href="#/all" :class="{selected: visibility == '#/all'}">All</a></li>
					<li><a href="#/active" :class="{selected: visibility == '#/active'}">Active</a></li>
					<li><a href="#/completed" :class="{selected: visibility == '#/completed'}">Completed</a></li>
				</ul>
				<button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
					Clear completed
				</button>
			</footer>
		</section>
</template>

<script>
import appjs from '@/js/app.js'
import routesjs from '@/js/routes.js'
import storejs from '@/js/store.js'
import aa from 'todomvc-common/base.css'
import bb from 'todomvc-app-css/index.css'

export default {
	name: 'todoapp',
	components: {
	},
	data(){
		return {
			todos: todoStorage.fetch(),
			newTodo: '',
			editedTodo: null,
			visibility: '#/all',
			currentRoute: window.location.hash,
		}
	},
	computed: {
		filteredTodos: function () {
			return filters[this.visibility](this.todos);
		},
		remaining: function () {
			return filters['#/active'](this.todos).length;
		},
		allDone: {
			get: function () {
				return this.remaining === 0;
			},
			set: function (value) {
				this.todos.forEach(function (todo) {
					todo.completed = value;
				});
			}
		}
	},
	watch: {
		todos: {
			deep: true,
			handler: todoStorage.save
		},
		currentRoute: {
			immediate: true,
			handler: function(){
				this.visibility = this.currentRoute
			}
		}
	},
	methods: {

		pluralize: function (word, count) {
			return word + (count === 1 ? '' : 's');
		},

		addTodo: function () {
			var value = this.newTodo && this.newTodo.trim();
			if (!value) {
				return;
			}
			// TODO: Use a proper UUID instead of `Date.now()`.
			this.todos.push({ id: Date.now(), title: value, completed: false });
			this.newTodo = '';
		},

		removeTodo: function (todo) {
			var index = this.todos.indexOf(todo);
			this.todos.splice(index, 1);
		},

		editTodo: function (todo) {
			this.beforeEditCache = todo.title;
			this.editedTodo = todo;
		},

		doneEdit: function (todo) {
			if (!this.editedTodo) {
				return;
			}
			this.editedTodo = null;
			todo.title = todo.title.trim();
			if (!todo.title) {
				this.removeTodo(todo);
			}
		},

		cancelEdit: function (todo) {
			this.editedTodo = null;
			todo.title = this.beforeEditCache;
		},

		removeCompleted: function () {
			this.todos = filters['#/active'](this.todos);
		}
	},
	directives: {
		'todo-focus': function (el, binding) {
			if (binding.value) {
				el.focus();
			}
		}
	},
	created() {
		window.addEventListener('popstate', () => {
			this.currentRoute = window.location.hash
		})
	}
}

var filters = {
	'': function (todos) {
		return todos;
	},
	'#/all': function (todos) {
		return todos;
	},
	'#/active': function (todos) {
		return todos.filter(function (todo) {
			return !todo.completed;
		});
	},
	'#/completed': function (todos) {
		return todos.filter(function (todo) {
			return todo.completed;
		});
	}
};

</script>