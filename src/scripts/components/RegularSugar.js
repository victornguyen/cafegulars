import React, { Component, PropTypes } from 'react';
import { times } from 'lodash';
import { MAX_SUGAR } from 'constants/Settings';

import 'styles/regular-sugar';

// TODO: make these SVGs
const SugarIcon = () => (
  <span
    className="regular-sugar__icon glyphicon glyphicon-tint"
    aria-hidden="true"
  />
);

class RegularSugar extends Component {
  static propTypes = {
    count:       PropTypes.number.isRequired,
    updateSugar: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { count, updateSugar } = this.props;
    // TODO: should this logic happen here? or in Action Creator? or in Reducer?
    const newCount = (count + 1 > MAX_SUGAR) ? 0 : count + 1;
    updateSugar(newCount);
  }

  render() {
    let { count } = this.props;
    return (
      <button className="regular-sugar pull-left" onClick={this.handleClick}>
        <div className="regular-sugar__count">
          {count}
        </div>
        <div className="regular-sugar__icons">
          {this.renderSugarIcons(count)}
        </div>
      </button>
    );
  }

  renderSugarIcons(count) {
    return count === 0
      ? 'No Sugar'
      : times(count, n => <SugarIcon key={n} />);
  }
}

export default RegularSugar;
