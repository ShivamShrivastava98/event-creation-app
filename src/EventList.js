import React, { useEffect } from 'react'
import {EventListWrapper,EventListItem,EventListTitle,NoEventsMessage} from './styles/EventListStyles'
const EventList = ({events}) => {
    console.log(events);
   
  return (
 <EventListWrapper id='eventlist'>
     <EventListTitle>Event List</EventListTitle>
      {events.length === 0 ? (
        <NoEventsMessage>No events to display.</NoEventsMessage>
      ) : (
        <ul>
          {events.map((event, index) => (
            <EventListItem key={index}>

              <h1>event name{event.name}</h1> 
              <h5>
              start {event.start.slice(0,10)}
                 {event.start.slice(11,event.start.length)}
                </h5>
              <h5>
                 end {event.end.slice(0,10)}
                 {event.end.slice(11,event.end.length)}
                </h5>
              <h5>
                 location {event.location}
                </h5>              
            </EventListItem>
          ))}
        </ul>
      )}
 </EventListWrapper>
  )
}

export default EventList