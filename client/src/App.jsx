import Routing from "./config";

function App() {
  console.log(import.meta.env);
  console.log("Server is running in " + import.meta.env.MODE);

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
