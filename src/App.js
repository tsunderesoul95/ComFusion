
import { render } from '@testing-library/react';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./components/MenuCompenent";
import { Dishes } from "./shared/Dishes";
import Main from './components/MainComponents';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: Dishes
    };
  }
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
      </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
 // <div className="App">
      //   <Navbar dark color="primary">
      //     <div className="container">
      //     <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      //   <Menu dishes={this.state.dishes}/>
      // </div>