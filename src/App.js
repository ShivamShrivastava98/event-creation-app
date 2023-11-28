import { useState } from 'react';
import EventForm from './EventForm.js'
import EventList from './EventList.js'
import GlobalStyles from './styles/GlobalStyles.js';

import './App.css';
function App() {
  const[events,setEvents]=useState([]);
  const[swap,setSwap]=useState('create');
  const createEvent=(event)=>{
    setEvents([...events,event]);
  }
  const element=()=>{
    if (swap==='list') {
      return  <EventList events={events} />
    }else{
      return <EventForm createEvent={createEvent}  />
    }
    }
  // console.log(events);
  return (<>
  <button onClick={()=>setSwap('list')}>eventlist</button>
  <button onClick={()=>setSwap('create')}>eventform</button>
    <GlobalStyles/>    
      {element()}     
    </>
  );
  
}

export default App;
