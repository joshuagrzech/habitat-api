const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'whatbill-aac15',
  keyFilename: './whatbill-aac15-firebase-adminsdk-cxa9o-92c2f0049b.json'
  
});

exports.firestore = firestore;