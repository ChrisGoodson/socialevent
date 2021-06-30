import React, { useState } from 'react';
import { Header, Segment, Button, FormField, Label } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {createEvent, updateEvent} from '../eventActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export default function EventForm({match, history}) {
    const dispatch = useDispatch();

    const selectedEvent = useSelector(state => state.event.events.find( e => e.id === match.params.id));
    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title')
    })
    

    const initialValues = selectedEvent ?? {
        title: '',
        category:'',
        description:'',
        city: '',
        venue: '',
        date: ''
    }


    const [values, setValues] = useState(initialValues);

   
    // function handleFormSubmit() {
    //     selectedEvent 
    //     ? dispatch(updateEvent({...selectedEvent, ...values}))
    //      : dispatch(createEvent({...values, 
    //         id: cuid(), 
    //         hostedBy: 'Linh', 
    //         attendees: [],
    //         hostPhotoURL: '/assets/user.png'
    //     }));
    //     history.push('/events');
    // }


    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create a new event'} />
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
            >
                <Form className='ui form'>
                    <FormField>
                        <Field name='title' placeholder='Event title' />
                        <ErrorMessage name='title' render={error => <Label basic color='red' content ={error} />} />
                    </FormField>
                    <FormField>
                        <Field name='category' placeholder='Category'/>
                    </FormField>
                    <FormField>
                        <Field name='description' placeholder='Description'/>
                    </FormField>
                    <FormField>
                        <Field name='city' placeholder='City'/>
                    </FormField>
                    <FormField>
                        <Field name='venue' placeholder='Venue'/>
                    </FormField>
                    <FormField>
                        <Field name='date' placeholder='Event Date' type='date' />
                    </FormField>
                   
                <Button type='submit' floated='right' positive content='Submit' />
                <Button 
                as={Link}
                to='/events'
                type='submit' 
                floated='right' 
                content='Cancel' 
            />
            </Form>
            </Formik>
        </Segment>
    );
}