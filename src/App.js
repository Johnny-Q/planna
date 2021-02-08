import logo from './logo.svg';
import './App.css';

import Calendar from "./components/calendar/Calendar";
import QuestionsGrid from "./components/questions/QuestionsGrid";
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box p={10}>
        {/* <Calendar /> */}
        <QuestionsGrid />
      </Box>
    </div>
  );
}

export default App;
