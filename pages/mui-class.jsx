import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const styles = (theme) =>({
  root: {

  }
});

class MUIClass extends Component {
  state = {

  };

  render(){
    const { classes, theme } = this.props;
 
    return (
      <Box style={{marginTop: '64px'}}>
        <Typography variant='h3'> mui-class </Typography>
      </Box>
    );
  };
};

export default withStyles(styles, { withTheme: true })(MUIClass);
