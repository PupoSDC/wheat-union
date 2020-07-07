import React, {FunctionComponent} from 'react';
import {Box, CircularProgress, CircularProgressProps} from '@material-ui/core';

/**
 * Wraps the material-ui Circular progress in a div that fills all available space.
 * Circular progress is then displayed centered both vertically and horizontally.
 *
 * https://material-ui.com/api/circular-progress/#circularprogress-api
 */
const LoadingSpinner: FunctionComponent<CircularProgressProps> = (props) => (
  <Box height='100%' marginTop="50%" textAlign='center' width="100%">
    <CircularProgress {...props} />
  </Box>
);

export default LoadingSpinner;