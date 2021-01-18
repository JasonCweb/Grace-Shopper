import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import users from './users';
import orders from './orders';
import viewedUser from './viewedUser';
import reviews from './reviews';

export default combineReducers({
  user,
  viewedUser,
  users,
  products,
  orders,
  reviews
});
