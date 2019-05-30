import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const iconColor = {
  color: '#CADB30'
}

const linkStyle = {
  display: 'flex',
  padding: '20px',
  textDecoration: "none",
  color: '#fff'
}

const menuStyle = {
  background: '#343A40',
  height: '100vh'
}

const flex = {
  display: 'flex',
  flexDirection: 'Column',
  alignItems: 'center'
}

const iconStyle = {
  marginLeft: '10px'
}

const xStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '20px'
}

const xIconStyle = {
  fontSize: '30px',
  color: '#fff'
}

const dividerStyle = {
  background: '#fff'
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
      <div style={menuStyle}>
        <div style={xStyle}>
          <i style={xIconStyle} className="fas fa-times"></i>
        </div>
        <div style={flex}>
          <Link to="/about" style={linkStyle}>
            <i className="far fa-address-card" style={iconStyle}></i>
            <p className="hover">אודות</p>
          </Link>
          <Link  to="/jobs" style={linkStyle}>
            <i className="fas fa-briefcase" style={iconStyle}></i>
            <p className="hover">לוח משרות</p>
          </Link>
          <Link  to="/realEstate" style={linkStyle}>
            <i className="far fa-building" style={iconStyle}></i>
            <p className="hover">לוח דיור</p>
          </Link>
          <Link  to="/youthCenter" style={linkStyle}>
            <i className="fas fa-child" style={iconStyle}></i>
            <p className="hover">מרכז צעירים</p>
          </Link>
          <Link  to="/settlement" style={linkStyle}>
            <i className="fas fa-home" style={iconStyle}></i>
            <p className="hover">התיישבות</p>
          </Link>
          <Link  to="/reducingGaps" style={linkStyle}>
            <i className="fas fa-users" style={iconStyle}></i>
            <p className="hover">צמצום פערים</p>
          </Link>
          <Link to="/kolna" style={linkStyle}>
            <i className="fas fa-guitar" style={iconStyle}></i>
            <p className="hover">כולנא</p>
          </Link>
          <Link to="/forTheCommunity" style={linkStyle}>
            <i className="fas fa-people-carry" style={iconStyle}></i>
            <p className="hover">בשביל הקהילה</p>
          </Link>
        </div>
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
