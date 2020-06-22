import React, { Component } from 'react';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

class TimelineMain extends Component {
  onAdd = () => {
    const timeline = getNextTimeline();
    this.props.addTimeline(timeline);
  };

  onLike = (e) => {
    const { timelines, requestLike } = this.props;
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    requestLike(timeline);
  };

  render() {
    console.log('timeline main render');

    const { timelines, isLoading, error } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={timelines} onLike={this.onLike} />
        <ClipLoader size={150} color={'black'} loading={!!isLoading} />
        {!!error && <p>에러 발생...</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { timelines, isLoading, error } = state.timeline;
  return {
    timelines,
    isLoading,
    error,
  };
};

export default connect(mapStateToProps, actions)(TimelineMain);
