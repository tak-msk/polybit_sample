'use strict';

const Nodal = require('nodal');

class CreateUsers extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016071410103171;
  }

  up() {

    return [
      this.createTable("users", [{"name":"email","type":"string","properties":{"unique":true}},{"name":"password","type":"string"},{"name":"username","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("users")
    ];

  }

}

module.exports = CreateUsers;
