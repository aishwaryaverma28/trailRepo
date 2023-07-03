import React, {useState} from "react";
// import Calendar from "./Components/Calendar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="main">
      {/* <Calendar/> */}
      
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;