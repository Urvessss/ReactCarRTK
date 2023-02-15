import "bulma/css/bulma.css";
import './style.css'
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Store/Slices";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <Provider store={store}>
   <App />
 </Provider>
 
);
