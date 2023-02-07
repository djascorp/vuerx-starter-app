import { addRxPlugin, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration';
import { RxDBReplicationFirestorePlugin } from 'rxdb/plugins/replication-firestore';
import { users } from './schema';

addRxPlugin(RxDBReplicationFirestorePlugin);
addRxPlugin(RxDBMigrationPlugin);


const myDatabase = await createRxDatabase({
    name: 'firebase-db',
    storage: getRxStorageDexie()
});

await myDatabase.addCollections({
    users: {
        schema: users
    },
});

const myRxCollection = myDatabase.users;
console.log(myRxCollection);



export default myDatabase;
