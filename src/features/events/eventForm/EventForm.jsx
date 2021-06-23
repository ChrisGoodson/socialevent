import React from 'react';
import { Header, Segment, Form } from 'semantic-ui-react';

export default function EventForm() {
    return (
        <Segment>
            <Header content='Create a new event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Date' />
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
            </Form>
        </Segment>
    )
}