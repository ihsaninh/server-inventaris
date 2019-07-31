'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangSchema extends Schema {
  up () {
    this.create('barangs', (table) => {
      table.increments()
      table.string('kd_brg', 5).notNullable().unique()
      table.string('nama_brg').notNullable()
      table.string('satuan').notNullable()
      table.string('qty').notNullable()
      table.integer('harga').notNullable()
      table.integer('stok_min').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('barangs')
  }
}

module.exports = BarangSchema
