const path = require('path');
const dirname = process.cwd()
module.exports = {
  development: {
    sitename: 'Orlando Art Meetups [Development]',
    data: {
      speakers: path.join(`${dirname}`, '/server','/data/speakers.json'),
      feedback: path.join(`${dirname}`, '/server','/data/feedback.json'),
    }
  },
  production: {
    sitename: 'Orlando Art Meetups',
    data: {
      speakers: path.join(`${dirname}`, '/data/speakers.json'),
      feedback: path.join(`${dirname}`, '/data/feedback.json'),
    }
  },
}
