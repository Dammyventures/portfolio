import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas, Works} from './components';


const App = () => {


  return (
   
     <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        
      </div>
     </div>
      </BrowserRouter>
   
  )
}
//<StarsCanvas/>

export default App
