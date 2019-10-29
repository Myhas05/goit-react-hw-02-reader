import React from 'react';
import T from 'prop-types';
import styles from '../../styled-components.module.css';

const Controls = ({
  onPrevClick,
  onNextClick,
  isPrevBtnDisabled,
  isNextBtnDisabled,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onPrevClick}
      disabled={isPrevBtnDisabled}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={onNextClick}
      disabled={isNextBtnDisabled}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPrevClick: T.func.isRequired,
  onNextClick: T.func.isRequired,
  isPrevBtnDisabled: T.number.isRequired,
  isNextBtnDisabled: T.number.isRequired,
};

export default Controls;
