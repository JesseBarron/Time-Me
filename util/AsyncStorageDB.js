import {
  AsyncStorage,
} from 'react-native';

export default class AsyncStorageDB {
  constructor(dbName) {
    this.dbName = typeof dbName === 'string'
    ? dbName
    : null;
    this.tables = {};
  }
  sync() {
    //syncs the database to the local storage....
  }
  define() {

  }
  save() {

  }
}
