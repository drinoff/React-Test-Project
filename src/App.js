import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container style={{ backgroundColor: '#cfe8fc', height: '100vh' }} maxWidth="xl">
        {/* <Typography component="div"  /> */}
        <Button className = 'mainButton' variant="contained" color="primary">
          Home
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          Work
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          Projects
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary">
          Contact
        </Button>
        <Button className = 'mainButton' variant="contained" color="primary" href="#contained-buttons">
          Galery
        </Button>
        <Container className="innerCo"><span>Mallorca FC - Lugo</span></Container>

      </Container>
    </div>
  );
}

export default App;
