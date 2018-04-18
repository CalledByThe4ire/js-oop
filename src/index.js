/* eslint-disable no-unused-vars, no-console */

import express from 'express';
import app from './consts';

// here routes defined
import './routes';

import Stack from './stack';
import Queue from './queue';

const stack = new Stack();
const queue = new Queue();

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
