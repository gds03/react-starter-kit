import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler';
import withDragDropContext from './withDnDContext';

class SchedulerPage extends React.Component {
  constructor(props){
     super(props);

      this.prevClick = this.prevClick.bind(this);
      this.nextClick = this.nextClick.bind(this);
      this.onViewChange = this.onViewChange.bind(this);

     let schedulerData = new SchedulerData(new Date(), ViewTypes.Week);
     schedulerData.localeMoment.locale('pt');



     let events = [
                {
                     id: 1,
                     start: '2018-12-18 09:30:00',
                     end: '2018-12-19 23:30:00',
                     resourceId: 'r1',
                     title: 'I am finished',
                     bgColor: '#D9D9D9'
                 },
                 {
                     id: 2,
                     start: '2018-12-18 12:30:00',
                     end: '2018-12-26 23:30:00',
                     resourceId: 'r2',
                     title: 'I am not resizable',
                     resizable: false
                 },
                 {
                     id: 3,
                     start: '2018-12-19 12:30:00',
                     end: '2018-12-20 23:30:00',
                     resourceId: 'r3',
                     title: 'I am not movable',
                     movable: false
                 },
                 {
                     id: 4,
                     start: '2018-12-19 14:30:00',
                     end: '2018-12-20 23:30:00',
                     resourceId: 'r1',
                     title: 'I am not start-resizable',
                     startResizable: false
                 },
                 {
                     id: 5,
                     start: '2018-12-19 15:30:00',
                     end: '2018-12-20 23:30:00',
                     resourceId: 'r2',
                     title: 'R2 has recurring tasks every week on Tuesday, Friday',
                     rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
                     bgColor: '#f759ab'
                 }
     ];
     schedulerData.setEvents(events);
     this.events = events;
     this.state = {
         viewModel: schedulerData
     };
  }

  prevClick(schedulerData) {
     schedulerData.prev();
     schedulerData.setEvents(this.events);
     this.setState({
         viewModel: schedulerData
     });
 }

 onViewChange(schedulerData, view) {
     schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
     schedulerData.setEvents(this.events);
     this.setState({
         viewModel: schedulerData
     });
 }

  nextClick(schedulerData) {
     schedulerData.next();
     schedulerData.setEvents(this.events);
     this.setState({
         viewModel: schedulerData
     });
 }

  render() {
    const {viewModel} = this.state;
    return (
      <div>
        <h1><p>Scheduler</p></h1>
        <Scheduler schedulerData={viewModel}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onViewChange={this.onViewChange}
        />
      </div>
    );
  }




}
export default withDragDropContext(SchedulerPage);
