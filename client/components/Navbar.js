import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const styles = {
  AppBar: {
    backgroundColor: '#80ff0a'
  }
}
const MyNavLinks = (props) => (
  <ToolbarGroup>
    <div>
      <form onSubmit={props.handleSearchSubmit}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter an meme's name"
              onChange={props.handleSearchChange}
            />
          </div>
        </div>
        <button type="submit">
          Find the Meme
        </button>
      </form>
    </div>
    {props.cartId &&
      <div>
        {
          props.user && props.user.isGuest ?
          null :
          <FlatButton label="View Past Orders" containerElement={<Link to={`/orders/user/${props.user.id}`} />} />
        }
        <FlatButton label="View Cart" containerElement={<Link to={`/cart/${props.cartId}`} />} />
      </div>
    }
    {
      props.isUserAdmin ?
      <div>
        <FlatButton label="View All Users" containerElement={<Link to={'/users/'} /> } />
        <FlatButton label="View All Orders" containerElement={<Link to={'/allOrders'} /> } />      
      </div>
      : null
    }
    {
      props.cartId && !props.user.isGuest ?
      <FlatButton label="Log Out" onClick={() => {props.logOut()}}/>
      : <FlatButton label="Log In" containerElement={<Link to="/signup"/>} />
    }

  </ToolbarGroup>
);

MyNavLinks.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isUserAdmin: PropTypes.bool.isRequired
};

const MyAppbar = (props) => (
    <AppBar
      iconElementLeft={<FlatButton label="home" containerElement={<Link to="/"/>} />}
      title="MemeShopper"
      iconElementRight={<MyNavLinks {...props} />}
      style = {styles.AppBar}
    />
);

export default MyAppbar;
