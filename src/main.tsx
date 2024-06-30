import ReactDOM from "react-dom/client";
import { App } from "./App";
import './sass/index.scss'
const root = ReactDOM.createRoot(document.querySelector("#root")!);

//se dibuja los componentes de la app acá
root.render(<App />);
