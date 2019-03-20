import React, { PropTypes } from 'react';


class SchedulesPage extends React.Component {

  /*constructor(props) {
    super(props);
    let schedulerData = new SchedulerData('2017-12-18', ViewTypes.Week);
    schedulerData.localeMoment.locale('en');
    this.state = {
      viewModel: schedulerData
    };
  }
  */


  render() {
    const {viewModel} = this.state;
    return (
      <div>
        <h1>Schedules</h1>
      </div>
    );
  }
}


export default SchedulesPage;
