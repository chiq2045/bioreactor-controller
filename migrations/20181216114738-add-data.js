'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('data', {
    id: { type: 'int', primaryKey: true },
    ph: 'decimal',
    temperature: 'decimal',
    co2: 'decimal',
    co2Down: 'decimal',
    tempDown: 'decimal',
    createdAt: 'int',
    updatedAt: 'int',
  });
};

exports.down = function(db) {
  return db.dropTable('data');
};

exports._meta = {
  "version": 1
};
