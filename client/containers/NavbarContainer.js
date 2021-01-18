import { connect } from 'react-redux';
import { logout } from '../reducer/user';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { searchProducts } from '../action-creators/products';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.id,
    isUserAdmin: !!state.user.isAdmin,
    user: state.user,
    cartId: state.user.cartId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      console.log('logging out');
      dispatch(logout());
    },
    findProducts (query) {
      console.log('query is: ', query)
      dispatch(searchProducts(query));
    }
  };
};

class NavbarContainer extends Component {

  constructor (props) {
    super(props);
    this.state = { query: ''};
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange (event) {
    this.setState({ query: event.target.value });
  }

  handleSearchSubmit (event) {
    event.preventDefault();
    // console.log('this.props is: ', this.props, 'state: ', this.state)
    this.props.findProducts(this.state.query)
  }

  render() {
    return (
      <Navbar
        {...this.props}
        handleSearchSubmit={this.handleSearchSubmit}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
