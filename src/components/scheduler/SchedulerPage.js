import React from 'react';
import { Link } from 'react-router';
import AvailableTimes from 'react-available-times';

class HomePage extends React.Component {

  render() {
    return (
    <div>
      <p>Scheduler</p>
      <AvailableTimes
        weekStartsOn="monday"
        calendars={[
          {
            id: 'work',
            title: 'Work',
            foregroundColor: '#ff00ff',
            backgroundColor: '#f0f0f0',
            selected: true
          },
          {
            id: 'private',
            title: 'My private cal',
            foregroundColor: '#666',
            backgroundColor: '#f3f3f3'
          }
        ]}
        onChange={(selections) => {
          selections.forEach(({ start, end }) => {
            console.log('Start:', start, 'End:', end);
          });
        }}
        onEventsRequested={({ calendarId, start, end, callback }) => {
          //loadMoreEvents(calendarId, start, end).then(callback);
        }}
        initialSelections={[
        //  { start: aDateObject, end: anotherDateObject }
        ]}
        height={400}
        recurring={false}
        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday']}
        availableHourRange={{ start: 9, end: 19 }}
      />
    </div>
    );
  }

}

export default HomePage;
