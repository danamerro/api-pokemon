import { Buttom } from "./components/Buttom"
import './sass/App.scss'



//crear componente
const App = () =>{
  return(
  <>
      {/* tarjetas */}
      <div className="buttons-container">
      <Buttom text= 'Anterior'/>
      <Buttom text= 'Siguiente'/>
      </div>
      
  </>
  )
}

export{App}