import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MyNavbar from './Components/myNavbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Example from './Pages/Example';


function App() {  
  return (
    <>
      <Router>
          <div className='main' style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            flexShrink: '0'
          }}>
            <MyNavbar/>
            <div className='content' style={{ flexGrow: '1' }}>
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/example' component={Example} />
                <Route exact path='/home' component={Home} />
                <Route path='/'>
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </div>
            <div className='footer' style={{ flexShrink: '0' }}>
              <Footer/>
            </div>
          </div>
      </Router>
    </>
  );
}

export default App;
