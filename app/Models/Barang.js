'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barang extends Model {
	barang_supliers () {
    	return this.hasMany('App/Models/BarangSuplier')
  	}	

  	po_details () {
    	return this.hasMany('App/Models/PoDetail')
  	}
}

module.exports = Barang
