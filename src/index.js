import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App"
import { BrowserRouter as Routers } from "react-router-dom";
import { store } from './components/store/index'
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Routers>
      <App />
    </Routers>
  </Provider>
);
