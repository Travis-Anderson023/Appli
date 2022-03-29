const db = require('../config/connection');
const {User, Application, CoverLetter } = require('../models');

const userData = require('./userData.json');
const applicationData = require('./applicationData.json');
const coverletterData = require('./coverletterData.json');


db.once('open', async () => {
  // clean database
  await User.deleteMany({});

  // bulk create each model
  const users = await User.create(userData);
  const applications = await Application.insertMany(applicationData)
  const coverletter = await CoverLetter.insertMany(coverletterData)

  for (newApplication of applications) {
    // randomly add each class to a school
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.applications.push(newApplication._id);
    await tempUser.save();

    // randomly add a professor to each class
    const tempCoverletter = coverletter[Math.floor(Math.random() * coverletter.length)];
    newApplication.coverletter = tempCoverletter._id;
    await newApplication.save();
  }

  console.log(users);
  console.log('all done!');
  process.exit(0);
});
