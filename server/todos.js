export const Todos = [
  {
    id: 1,
    title: "Vaske gulvet",
    text: "Sigurd må vaske gulvet i dag",
    completed: false,
  },
  {
    id: 2,
    title: "Gå på tur",
    text: "Sigurd må tur i skogen i dag",
    completed: true,
  },
  {
    id: 3,
    title: "Lufte hunden",
    text: "Hunden må ut på tur i dag",
    completed: false,
  },
];

export const randomTodos = () => {
  return Todos[Math.floor(Math.random() * Todos.length)];
};
