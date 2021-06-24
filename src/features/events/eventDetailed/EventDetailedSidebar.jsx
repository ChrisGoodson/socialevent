import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

export default function EventDetailedSidebar({attendees}) {
    return (
        
<>
<Segment
    textAlign="center"
    style={{border: 'none'}}
    attached="top"
    secondary
    inverted
    color="teal"
>
    {attendees.length} {attendees.length > 1 ? 'People' : 'Person'} Going
</Segment>
<Segment attached>
    <Item.Group relaxed divided>
        <Item style={{position: 'relative'}}>
            <Item.Image size="tiny" src='/assets/user.png'/>
            <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                    <span>Tom</span>
                </Item.Header>
            </Item.Content>
        </Item>
        <Item style={{position: 'relative'}}>
            <Item.Image size="tiny" src='/assets/user.png'/>
            <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                    <span>Bob</span>
                </Item.Header>
            </Item.Content>
        </Item>
    </Item.Group>
</Segment>
</>
    )
}