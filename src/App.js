/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"
function App(){
  return(
    <section>
    <p>hello</p>
    <h1>learn about react</h1>
    <img  src="https://i.pinimg.com/474x/9e/2d/35/9e2d35f9d1cc9c75c5616ecbde232eed.jpg" alt="hero img"/>
    <ClassComponent/>
    <ClassComponent2/>
    
    </section>

    )
}
export default App*/
/*import PropsExample from "./PropsExample"
import FuncPropsExample from "./FuncPropsExample"
import StateExample from "./StateExample"
import Events from "./Events"*/
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'
import NotFound from './Component/NotFound'
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      {/*<h1>learn about events</h1>
      <Events/>
       <StateExample/>
   
    <h1>this is about PropsExample</h1>
    <PropsExample name="ravi" age="20"/>
    <PropsExample name="aadhi" age="18"/>
    <PropsExample name="guru" age="19"/>
    <img src="https://i.pinimg.com/474x/9e/2d/35/9e2d35f9d1cc9c75c5616ecbde232eed.jpg" alt="img1"/>
 
    <FuncPropsExample framework="react" number="2"/>
    <FuncPropsExample framework="nodejs" number="4"/> */}
    </div>
    )
}
export default App