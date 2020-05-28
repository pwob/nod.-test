import React from 'react';

import PropTypes from 'prop-types';

import {Container, Bar, Progress} from './ProgressBarStyles';

const ProgressBar = ({ progress }) => {
  return <>
    <Container>
      <Bar />
      <Progress progress={progress}/>
    </Container>
  </>
};

ProgressBar.defaultProps = {
  progress: 0
};

ProgressBar.propTypes = {
  progress: PropTypes.number
};

export default ProgressBar;
