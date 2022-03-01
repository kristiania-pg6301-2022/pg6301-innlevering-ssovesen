export const Todos = [
  {
    id: 1,
    title: "Legg til et gjøremål",
    text: "Nedenfor kan du legge til et nytt gjøremål, og krysse av at dette er gjort",
    completed: false,
  },
  {
    id: 2,
    title: "Gamle gjøremål",
    text: "gjøremål som du har gjort legger seg her.",
    completed: true,
  },
  {
    id: 3,
    title: "Lufte hunden",
    text: "Hunden må ut på tur i dag",
    completed: false,
  },
];

//TODO: bruker vi denne koden?

export const randomTodos = () => {
  return Todos[Math.floor(Math.random() * Todos.length)];
};
