import Container from '@material-ui/core/Container';
import UlComponent from './Components/UlComponent';
import { Switch, Route,  NavLink } from 'react-router-dom';
import Contact from './Components/Contanct';
import Details from './Components/Details';

import Button from '@material-ui/core/Button';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Container style={{ backgroundColor: '#cfe8fc', height: '100vh' }} maxWidth="xl">

        <NavLink  to='/'>
          <Button className='mainButton' variant="contained" color="primary">
            Bet Slip
          </Button>
        </NavLink>

        <NavLink  to='/contact'>
          <Button className='mainButton' variant="contained" color="primary">
            COntact
          </Button>
        </NavLink>

        <Switch>
          <Route path='/' exact component={UlComponent} />
          <Route path='/contact' component={Contact} />
          <Route path='/details/:id' component={Details} />


        </Switch>

      </Container>
    </div>
  );
}

export default App;
