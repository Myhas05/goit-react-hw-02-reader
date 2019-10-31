import React from 'react';
import T from 'prop-types';
import styles from '../../styled-components.module.css';

const Counter = ({ publicIdx, totalCount }) => {
  return (
    <p className={styles.counter}>
      {publicIdx}/{totalCount}
    </p>
  );
};

Counter.propTypes = {
  publicIdx: T.number.isRequired,
  totalCount: T.number.isRequired,
};

export default Counter;
