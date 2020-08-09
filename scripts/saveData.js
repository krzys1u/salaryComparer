const admin = require('firebase-admin');

const fetchData = require('./fetchData');
const { FIREBASE_URL } = require('../src/config');

admin.initializeApp({
  credential: admin.credential.cert(require('../authKey.json')),
  databaseURL: FIREBASE_URL,
});

const db = admin.firestore();

const createVersionData = (version, created) => ({
  version,
  created,
});

const getCollectionName = (version) => `salary-data-${version}`;

const getRecordId = (record) => `${record.brutto}-${record.type}`;

const saveRecord = async (collection, key, record) => {
  const document = db.collection(collection).doc(key);

  await document.set(record);
};

const getRecord = async (collection, key) => {
  const document = db.collection(collection).doc(key);
  const data = await document.get();

  return data.data();
};

const getCurrentVersion = async () => {
  const versionData = await getRecord('meta', 'version');

  return versionData.version;
};

const saveData = async (collectionName, data) => {
  return Promise.all(data.map((record) => saveRecord(collectionName, getRecordId(record), record)));
};

const updateVersion = async (version) => {
  const versionData = createVersionData(version, new Date().getTime());

  await saveRecord('meta', 'version', versionData);
};

const createNewVersion = async (data) => {
  const version = await getCurrentVersion();
  const nextVersion = version + 1;

  const collectionName = getCollectionName(nextVersion);

  try {
    await saveData(collectionName, data);
    await updateVersion(nextVersion);

    console.info('New data has been saved');
  } catch (e) {
    console.error('Error during saving data', e);
  }
};

(async () => {
  const data = await fetchData();

  await createNewVersion(data);
})();
