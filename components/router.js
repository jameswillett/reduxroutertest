import React from 'react';
import Input from './Input';
import Picture from './Picture';
import NotFound from './NotFound';

const routes = {
  'home': <Input />,
  'picture': <Picture />,
  'notfound': <NotFound />,
}

export const router = ({ component }) => {
  return routes[component];
}
