const admin = require('firebase-admin')

module.exports = async (req, res) => {
  admin.initializeApp({
    // apiKey: process.env.GCLOUD_CREDENTIALS
    // credential: admin.credential.applicationDefault()
  })

  const versionDocument = admin.firestore().db.collection('meta').doc('version')

  const version = (await versionDocument.get()).data()

  res.json({
    ...version,
  })
}
