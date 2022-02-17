export const Todos = [
  {
    id: 1,
    title: "Vaske gulvet",
    text: "Sigurd må vaske gulvet i dag",
    completed: false,
  },
];

export const randomTodos = () => {
  return Todos[Math.floor(Math.random() * Todos.length)];
};
