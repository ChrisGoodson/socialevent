import React, { useState } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

export default function EventForm({setFormOpen, setEvents, createEvent }) {
    const initialValues = {
        title: '',
        category:'',
        description:'',
        city: '',
        venue: '',
        date: ''
    }
    const [values, setValues] = useState(initialValues);
    
    function handleFormSubmit() {
        createEvent({...values, id: cuid(), hostedBy: 'Linh', attendees: []});
        setFormOpen(false);
    }
    
    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value}) //changed to spread opperator for efficiancy
    }

    return (
        <Segment clearing>
            <Header content='Create a new event' />
            <Form onSubmit ={handleFormSubmit}>
                <Form.Field>
                    <input type='text'
                    placeholder='Event title' 
                    name='title'
                    value={values.title} 
                    onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='date'
                    placeholder='Date' 
                    name='date'
                    value={values.date} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text'
                     placeholder='Category' 
                     name='category'
                    value={values.category} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text'
                    placeholder='Description' 
                    name='description'
                    value={values.description} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' 
                    placeholder='City' 
                    name='city'
                    value={values.city} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' 
                    placeholder='Venue' 
                    name='venue'
                    value={values.venue} 
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button 
                onClick={() => setFormOpen(false)} 
                type='submit' 
                floated='right' 
                content='Cancel' />
            </Form>
        </Segment>
    )
}