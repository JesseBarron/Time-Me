import {
  AsyncStorage,
} from 'react-native';

function AsyncTable(name, values) {
  this.indxCnt = 0;
  this.name = name; // Name of the table
  this.rows = values || [];
};

AsyncTable.prototype.addRow = function (row) {
  if (typeof row === 'object') {
    let newRow = Object.assign({}, row, { id: this.indxCnt++ });
    this.rows.push(newRow);
  }
}

export default class AsyncStorageDB {
  constructor(dbName) {
    this.dbName = typeof dbName === 'string'
      ? dbName
      : null;
    this.tables = {};
  }

  // DB methods
  async fetchDatabase(tableName) { //returns a promise
    try {
      let fetchedDB = await AsyncStorage.getItem(this.dbName);
      fetchedDB = JSON.parse(fetchedDB);
      fetchedDB = tableName && fetchedDB[tableName]
      ? fetchedDB[tableName]
      : fetchedDB;
      return fetchedDB;
    }
    catch (err) {
      console.log(err);
    }
  }

  // Tries to persist the database to local storage // if there's already a db with the same name we dont create a new one and return the existing tables
  async sync(force=false) {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.indexOf(this.dbName) === -1) {
        let persistedDB = await AsyncStorage.setItem(this.dbName, JSON.stringify(this.tables));
        console.log(persistedDB, 'persist DB')
        return persistedDB;
      }
      else if (force) {
        await AsyncStorage.removeItem(this.dbName)
        await AsyncStorage.setItem(this.dbName, JSON.stringify(this.tables));
        const newDB = await AsyncStorage.getItem(this.dbName);
        console.log(newDB, 'merge test')
        return newDB;
      }
      else {
        console.log('Fetching Existing DB');
        let existedDB = await AsyncStorage.getItem(this.dbName);
        return existedDB;
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async clear() {
    try {
      const clearedDB = Object.assign({}, this);
      await AsyncStorage.removeItem(this.dbName);
      this.name = null;
      this.tables = {};
      return clearedDB;
    }
    catch (err) {
      console.log(err)
    }
  }

  // Table Methods.....

  // Defines a table, adds it to the tables object in the db object, persists that new object to db
  define(name, initialValues) {
    try {
      if (!this.tables[name]) {
        const defineTable = new AsyncTable(name, initialValues);
        this.tables[name] = defineTable;
        return defineTable;
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  dropTable(tableName) {
    if (!this.tables[tableName]) {
      return "Table does not exist"
    }
    delete this.tables[tableName];
    // console.log(this)
    this.sync({ force: true })
  }

  create(tableName, row) {
    this.tables[tableName].addRow(row);
    // console.log(this.tables[tableName], 'testing if it changes on the db object')
    return this.sync({ force: true });
  }
};
