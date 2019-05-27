import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const iconColor = {
  color: '#CADB30'
}


const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <Link to="/about">
          <p className="hover">אודות</p>
        </Link>
        <Link  to="/jobs">
          <p className="hover">לוח משרות</p>
        </Link>
        <Link  to="/realEstate">
          <p className="hover">לוח דיור</p>
        </Link>
        <Link  to="/youthCenter">
          <p className="hover">מרכז צעירים</p>
        </Link>
        <Link  to="/settlement">
          <p className="hover">התיישבות</p>
        </Link>
        <Link  to="/reducingGaps">
          <p className="hover">צמצום פערים</p>
        </Link>
        <Link to="/kolna">
          <p className="hover">כולנא</p>
        </Link>
        <Link to="/forTheCommunity">
          <p className="hover">בשביל הקהילה</p>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
    <IconButton
      style={iconColor}
      aria-label="Open drawer"
      onClick={toggleDrawer('top', true)}
      edge="start"
    >
    <MenuIcon />
  </IconButton>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
