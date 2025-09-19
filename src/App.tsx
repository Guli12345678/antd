import { memo } from "react";
import Product from "./components/Product";
// import Login from './components/Login';
// import Main from './components/Main';
// import Animate from './components/Animate';

const App = () => {
  return (
    <div className="App">
      <Product />
      {/* <Main/> */}
      {/* <Animate/> */}
      {/* <Login/> */}
    </div>
  );
};

export default memo(App);
