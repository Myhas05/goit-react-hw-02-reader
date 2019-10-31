import React from 'react';
import T from 'prop-types';
import styles from '../../styled-components.module.css';

const Publication = ({ publication }) => (
  <article className={styles.publication}>
    <h2>{publication.title}</h2>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  pablication: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};

export default Publication;
