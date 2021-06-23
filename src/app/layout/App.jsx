import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {
  return (
   <> 
      <NavBar />
      <Container className='main'>
        <EventDashboard /> 
      </Container>
      

    </>
  );
}
