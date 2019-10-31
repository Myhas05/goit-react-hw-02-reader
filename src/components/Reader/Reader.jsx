import React, { Component } from 'react';
import T from 'prop-types';
import styles from '../../styled-components.module.css';

import Counter from '../Counter';
import Controls from '../Controls';
import Publication from '../Publication';

class Reader extends Component {
  static propTypes = {
    publications: T.arrayOf(T.shape().isRequired).isRequired,
  };

  state = {
    publicIdx: 0,
  };

  handleNextClick = () => {
    this.setState(({ publicIdx }) => {
      return {
        publicIdx: publicIdx + 1,
      };
    });
  };

  handlePrevClick = () => {
    this.setState(({ publicIdx }) => {
      return {
        publicIdx: publicIdx - 1,
      };
    });
  };

  render() {
    const { items } = this.props;
    const { publicIdx } = this.state;
    const isNextBtnDisabled = publicIdx === items.length - 1;
    const isPrevBtnDisabled = publicIdx === 0;
    return (
      <div className={styles.reader}>
        <Controls
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
          isNextBtnDisabled={isNextBtnDisabled}
          isPrevBtnDisabled={isPrevBtnDisabled}
        />
        <Counter publicIdx={publicIdx + 1} totalCount={items.length} />
        <Publication publication={items[publicIdx]} />
      </div>
    );
  }
}
export default Reader;
