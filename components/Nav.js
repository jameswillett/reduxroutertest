import React, { Component } from 'react';
import Link from 'redux-first-router-link';
import { HOME, PICTURE } from '../actions/actionTypes';

export const Nav = () => {
  return (
  <div>
    <Link to={{ type: HOME }}>home</Link><span> - </span>
    <Link to={{ type: PICTURE, payload: { id: 1 } }}>picture</Link><span> - </span>
    <Link to={{ type: PICTURE, payload: { id: 2 } }}>maybe this picture is cooler</Link>
  </div>
  )
}

export default Nav;
