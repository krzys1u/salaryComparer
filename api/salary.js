const admin = require('firebase-admin')

const serviceAccount = require('path/to/serviceAccountKey.json')

//AIzaSyB4lDjS0HqqaFzikYtlq42M1YxCELgL3xk

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://salario-a6a4b.firebaseio.com',
})

module.exports = (req, res) => {
  const {query} = req;

  const cityRef = db.collection('meta').doc('version');
  const doc = await cityRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
