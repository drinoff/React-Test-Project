import Container from '@material-ui/core/Container';
import UlComponent from './Components/UlComponent';

import Button from '@material-ui/core/Button';

import './App.css';

function App() {

  
  return (
    <div className="App">
      <Container style={{ backgroundColor: '#cfe8fc', height: '100vh' }} maxWidth="xl">
        <Button className = 'mainButton' variant="contained" color="primary">
          Home
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          Bet Slip
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          More Bets
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          Contact
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary" href="#contained-buttons">
          Archive
        </Button>
        
        <UlComponent />

      </Container>
    </div>
  );
}

export default App;
