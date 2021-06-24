import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';

export default function EventDashboard(){
    const {events} = useSelector(state => state.event);
        
    


    // function handleCreateEvent(event) {
    //     setEvents([...events, event])
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    //     selectEvent(null);
    
    // }

    function handleDeleteEvent(eventID){
        // setEvents(events.filter(e => e.id !== eventID));
    }
    return(
        <Grid>
            <Grid.Column width={10}>
                <EventList 
                events={events} 
                deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>event filters</h2>
            </Grid.Column>
            
        </Grid>

    )
}
