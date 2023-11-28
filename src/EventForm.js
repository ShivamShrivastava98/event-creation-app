import React, { useState } from 'react'
import {FormWrapper,FormLabel,FormInput,FormButton} from './styles/EventFormStyles'
import './styles/styles.css'
const EventForm = ({createEvent}) => {
    const [eventName,setEventName]=useState('');
    const [eventStart,setEventStart]=useState('');
    const [eventEnd,setEventEnd]=useState('');
    const [eventLocation,setEventLocation]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!eventName || !eventEnd||!eventStart || !eventLocation) {
            alert('Please enter each event field.');
            return;
          }
        const newEvent={name:eventName,start:eventStart,end:eventEnd,location:eventLocation};
        createEvent(newEvent);    
        setEventName('');
        setEventStart('');
        setEventEnd('');
        setEventLocation('');
    }
  return (<>
<FormWrapper id='eventform'>
<form onSubmit={handleSubmit}>
    <h2>EventForm</h2>
         
            <FormInput className='eventname' type="text" value={eventName} onChange={(e)=>setEventName(e.target.value)} placeholder='Event Name'/>
        
        <FormLabel>Start 
            <FormInput type="datetime-local" value={eventStart} onChange={(e)=>setEventStart(e.target.value)} />
        </FormLabel>
        <FormLabel>Event End At: 
            <FormInput type="datetime-local" value={eventEnd} onChange={(e)=>setEventEnd(e.target.value)} />
        </FormLabel>
        <FormLabel>Location: 
            <FormInput type="text" value={eventLocation} onChange={(e)=>setEventLocation(e.target.value)} />
        </FormLabel>
        <FormButton type='submit'>Submit</FormButton>
    </form>
    <div></div>
    </FormWrapper>
    </>
  )
}

export default EventForm