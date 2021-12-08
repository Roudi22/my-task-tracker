import Header from "./components/Header";

const initialTasks = [
  {
    id: 1,
    text: "Tak 1",
    day: "Dec 10th at 2:00 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Tak 2 ",
    day: "Dec 12th at 5:00 pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Tak 3 ",
    day: "Dec 13th at 9:00 am",
    reminder: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
