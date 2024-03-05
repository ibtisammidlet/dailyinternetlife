import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
import { fileURLToPath } from 'url';

const path = require('path'); // Import the path module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html')); // Use path.join to resolve the file path
});

app.listen(81, () => {
  console.log('Server is running on port 81');
});
