import React, { PureComponent } from 'react';
import { getNextTimeline } from '../../common/mockData';
import * as actions from '../state';
import TimelineList from '../component/TimelineList';
import { connect } from 'react-redux';

class TimelineMain extends PureComponent {
  onAdd = () => {
    const timeline = getNextTimeline();
    this.props.addTimeline(timeline);
  };

  render() {
    console.log('timeline main render');
    const { timelines } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={timelines} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timelines: state.timeline.timelines,
  };
};

export default connect(mapStateToProps, actions)(TimelineMain);
