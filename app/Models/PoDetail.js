'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PoDetail extends Model {
	pos () {
    	return this.belongsTo('App/Models/PO')
  	}
  	barangs () {
    	return this.belongsTo('App/Models/Barang')
  	}		
  	barang_supliers () {
  		return this.belongsTo('App/Models/BarangSuplier')
  	}
}

module.exports = PoDetail
