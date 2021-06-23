import React from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content='Create a new event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title' />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Location' />
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