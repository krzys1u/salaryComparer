import React, {useState} from 'react';
import './App.css';

import { Grid, makeStyles, AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { GitHubRibbon } from './components/GitHubRibbon/GitHubRibbon';
import { Diagram } from './components/Diagram/Diagram';
import { Filters } from './components/Filters/Filters';

const useStyles = makeStyles(theme => ({
  grid: {
    padding: '20px',
  },
  filters: {
    padding: '10px',
    paddingLeft: '15px',
  },
  filtersHidden: {
    width:0,
    display: 'none',
  }
}));

export const App = () => {
  const classes = useStyles();

  const [state, setState] = useState(true);

  const gridConfig = {
    filters: {
      xs: 12,
      sm: 12,
      md: 3,
      lg: 3,
      xl: 2,
      className: state ? classes.filters : classes.filtersHidden,
    },
    diagram: {
      xs: 12,
      sm: 12,
      md: 9,
      lg: 9,
      xl: 10,
    },
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setState(!state);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Salary Comparer
          </Typography>
          <GitHubRibbon repository={'https://github.com/krzys1u/salaryComparer'}/>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.grid}>
        <Grid item {...gridConfig.filters}>
          <Filters/>
        </Grid>
        <Grid item {...gridConfig.diagram}>
          <Diagram/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
