import logo from './logo.svg';
import './App.css';
// import Greeting from "./components/pure/Greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskList from "./components/container/TaskList";
import ContactComponent from "./components/pure/ContactComponent";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              {/* Componente propio de Greeting.jsx */}
              {/*<GreetingF name="Indiana" age={25}/>*/}
              {/*<TaskList />*/}
              <ContactComponent />
          </header>

      </div>
  );
}

export default App;
