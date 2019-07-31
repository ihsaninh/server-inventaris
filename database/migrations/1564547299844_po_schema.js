'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoSchema extends Schema {
  up () {
    this.create('pos', (table) => {
      table.increments()
      table.string('kd_trans', 5).notNullable().unique()
      table.date('tgl_trans').notNullable()
      table.integer('kd_sup').unsigned().references('id').inTable('supliers')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('total_item').notNullable()
      table.string('total_harga').notNullable()
      table.string('discount').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pos')
  }
}

module.exports = PoSchema
