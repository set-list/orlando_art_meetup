const path = require('path');

module.exports = {
  development: {
    sitename: 'Orlando Art Meetups [Development]',
    data: {
      speakers: path.join(__dirname, '../data/speakers.json'),
      feedback: path.join(__dirname, '../data/feedback.json'),
    }
  },
  production: {
    sitename: 'Orlando Art Meetups',
    data: {
      speakers: path.join(__dirname, '../data/speakers.json'),
      feedback: path.join(__dirname, '../data/feedback.json'),
    }
  },
}
