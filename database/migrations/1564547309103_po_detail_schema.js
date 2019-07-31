'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoDetailSchema extends Schema {
  up () {
    this.create('po_details', (table) => {
      table.increments()
      table.integer('kd_trans').unsigned().references('id').inTable('pos')
      table.integer('kd_brg').unsigned().references('id').inTable('barangs')
      table.string('qty').notNullable()
      table.integer('harga')
      table.integer('disc').unsigned().references('id').inTable('barang_supliers')
      table.string('total_disc').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('po_details')
  }
}

module.exports = PoDetailSchema
