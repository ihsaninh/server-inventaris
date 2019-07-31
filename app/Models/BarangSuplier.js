'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BarangSuplier extends Model {
	barangs () {
    	return this.belongsTo('App/Models/Barang')
  	}	
  	supliers () {
    	return this.belongsTo('App/Models/Suplier')
  	}	
}

module.exports = BarangSuplier
