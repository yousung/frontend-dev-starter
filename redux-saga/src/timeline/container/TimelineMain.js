import React, { PureComponent } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';

export default class TimelineMain extends PureComponent {
  state = {
    timelines: store.getState().timeline.timelines,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({
        timelines: store.getState().timeline.timelines,
      })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };

  render() {
    console.log('timeline main render');
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={this.state.timelines} />
      </div>
    );
  }
}
