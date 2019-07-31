'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Suplier extends Model {
	barang_supliers () {
  		return this.hasMany('App/Models/BarangSuplier')
  	}
	pos () {
  		return this.hasMany('App/Models/Po')
  	}
}

module.exports = Suplier
