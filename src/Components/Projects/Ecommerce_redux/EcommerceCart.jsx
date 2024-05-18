 
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Headers';
import Home from './Components/Home';
import CardDetails from './Components/CardDetails';
import {Routes,Route} from "react-router-dom"


function EcommerceCart() {
  return (
    <div>
<Headers/>
<Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/cart' element={<CardDetails/>}  />

</Routes>
    {/* <CardDetails></CardDetails> */}
    </div>
  );
}

export default EcommerceCart;
