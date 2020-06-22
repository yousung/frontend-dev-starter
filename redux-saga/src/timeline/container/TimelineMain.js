import React, { Component } from 'react';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

class TimelineMain extends Component {
  state = {
    currentText: '',
  };

  onChangeText = (e) => {
    const text = e.currentTarget.value;
    this.props.trySetText(text);
    this.setState({ currentText: text });
  };

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

    const { timelines, isLoading, error, text } = this.props;
    const { currentText } = this.state;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={timelines} onLike={this.onLike} />
        <ClipLoader size={150} color={'black'} loading={!!isLoading} />
        {!!error && <p>에러 발생...</p>}

        <input type='text' value={currentText} onChange={this.onChangeText} />
        {!!text && <p>text: {text}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { timelines, isLoading, error, text } = state.timeline;
  return {
    timelines,
    isLoading,
    error,
    text,
  };
};

export default connect(mapStateToProps, actions)(TimelineMain);
