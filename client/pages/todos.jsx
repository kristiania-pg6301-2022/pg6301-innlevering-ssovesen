import React, { useEffect, useState } from 'react';
import { Todo } from '../components/todo';
import { AddTodo } from '../components/AddTodo';

export function Todos() {
	const [todos, setTodos] = useState([]);

	function onDelete(todo) {
		console.log(todo, 'todo');
		fetch(`/api/todo/${todo.id}`, { method: 'DELETE' }).then(response =>
			response.json().then(data => console.log(data))
		);
		getTodos();
	}

	function onComplete(todo) {
		let status = undefined;
		todo.completed ? (status = false) : (status = true);

		console.log('onComplete works', todo.completed);

		const requestOptions = {
			method: 'Put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ completed: status }),
		};

		fetch(`/api/todo/${todo.id}`, requestOptions).then(response =>
			response.json().then(data => console.log(data))
		);
		getTodos();
	}

	const getTodos = () => {
		fetch('/api/getAll')
			.then(response => response.json())
			.then(data => setTodos(data));
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<AddTodo getTodo={getTodos} />
			<div>
      {
				<ul>
					{todos.length > 0
						? todos.map(todo => {
								if (!todo.completed) {
									return (
										<Todo
											key={todo.id}
											todo={todo}
											whenDeleted={onDelete}
											whenCompleted={onComplete}
										/>
									);
								}
						  })
						: 'Du har ingen gjøremål'}
				</ul>
			}
			<h1>Completed</h1>
			<ul>
				{todos.length > 0
					? todos.map(todo => {
							if (todo.completed) {
								return (
									<Todo
										key={todo.id}
										todo={todo}
										whenDeleted={onDelete}
										whenCompleted={onComplete}
									/>
								);
							}
					  })
					: ''}
			</ul>
      </div>
		</>
	);
}
