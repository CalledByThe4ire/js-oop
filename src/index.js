/* eslint-disable no-unused-vars, no-console */

import express from 'express';
import app from './consts';

// here routes defined
import './routes';

import Stack from './stack';
import Queue from './queue';
import Set from './set';

const stack = new Stack();
const queue = new Queue();
const set = new Set(1, 2, 3, 4, 5);
console.log(set.difference(new Set(3, 4, 5)));

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
