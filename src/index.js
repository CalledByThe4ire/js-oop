/* eslint-disable no-unused-vars, no-console */

import express from 'express';
import app from './consts';

// here routes defined
import './routes';

import Stack from './stack';

const stack = new Stack();
// console.log(stack.isEmpty);
// console.log(stack.push(5));
// console.log(stack.push(10));
// console.log(stack.push(15));
// console.log(stack.size);
// console.log(stack.isEmpty);
// console.log(stack.pop());
// console.log(stack.peek());

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
