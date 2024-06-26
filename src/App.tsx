import { Buttom } from "./components/Buttom"
import './sass/App.scss'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";



//crear componente
const App = () =>{
  return(
  <>
      {/* tarjetas */}
      <div className="buttons-container">
      <Buttom text= {<TiArrowLeftOutline />} />
      <Buttom text= {<TiArrowRightOutline />}/>
      </div>
      
  </>
  )
}

export{App}