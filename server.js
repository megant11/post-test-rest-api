const express = require('express');

const app = rexpress()

const bukuRoutes = require('./routes/buku');

app.use(express.json());

app.user(bukuRoutes);

app.listen(3000);