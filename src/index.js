/* eslint-disable no-unused-vars, no-console */

import express from 'express';
import app from './consts';

// here routes defined
import './routes';

app.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});
