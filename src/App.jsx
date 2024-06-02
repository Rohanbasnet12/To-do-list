import "./App.css";

import Form from "./Components/Form/Form";
import ListItem from "./Components/ListItems/ListItem";

function App() {
  return (
    <div id="app">
      <header className="w-full h-44 bg-purple-500"></header>
      <div
        id="form-wrapper"
        className="w-2/4 m-auto"
        style={{ position: "relative", top: "-45px" }}
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
