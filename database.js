const mongoose = require('mongoose');

const MONGO_HOSTNAME = process.env.HOSTNAME || 'localhost';
const MONGO_DB = 'apisign';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://${MONGO_HOSTNAME}/${MONGO_DB}`;

mongoose.connect(url, {useNewUrlParser: true});