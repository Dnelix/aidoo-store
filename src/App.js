import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home";
import Nav from "./routes/nav";
import Shop from "./routes/shop";
import Error404 from "./routes/error404";
import Login from './routes/auth/login';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default App;
