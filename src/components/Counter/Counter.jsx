import React from 'react';
import T from 'prop-types';
import styles from '../../styled-components.module.css';

const Counter = ({ currentIdx, totalCount }) => {
  return (
    <p className={styles.counter}>
      {currentIdx}/{totalCount}
    </p>
  );
};

Counter.propTypes = {
  currentIdx: T.number.isRequired,
  totalCount: T.number.isRequired,
};

export default Counter;
