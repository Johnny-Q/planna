import logo from './logo.svg';
import './App.css';

import Calendar from "./components/calendar/Calendar";
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box p={10}>
        <Calendar />
      </Box>
    </div>
  );
}

export default App;
