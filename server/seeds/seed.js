const db = require('../config/connection');
const {User, Application, CoverLetter } = require('../models');

const userData = require('./userData.json');
const applicationData = require('./applicationData.json');
// const coverletterData = require('./coverletterData.json');


db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Application.deleteMany({});
  // await CoverLetter.deleteMany({});

  // bulk create each model
  const users = await User.create(userData);
  const applications = await Application.create(applicationData)
  // const coverletter = await CoverLetter.create(coverletterData)

  for (newApplication of applications) {
    // randomly add an application to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.applications.push(newApplication._id);
    await tempUser.save();

    // // randomly add a cover letter to an application
    // const tempCoverletter = coverletter[Math.floor(Math.random() * coverletter.length)];
    // newApplication.coverletter = tempCoverletter._id;
    // await newApplication.save();
  }

  console.log(users);
  console.log(applications);
  console.log('all done!');
  process.exit(0);
});
