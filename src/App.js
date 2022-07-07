import "./App.css";
import PhoneComponent from "./components/PhoneComponent";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div id="container">
        <PhoneComponent />
      </div>
    </Provider>
  );
}

export default App;
