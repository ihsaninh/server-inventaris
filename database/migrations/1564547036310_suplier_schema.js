'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuplierSchema extends Schema {
  up () {
    this.create('supliers', (table) => {
      table.increments()
      table.string('kd_sup', 5).notNullable().unique()
      table.string('nama_sup').notNullable()
      table.string('alamat').notNullable()
      table.string('kota').notNullable()
      table.string('telp').notNullable().unique()
      table.string('email').notNullable()
      table.string('pic').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('supliers')
  }
}

module.exports = SuplierSchema
