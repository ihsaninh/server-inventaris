'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Po extends Model {
	supliers () {
    	return this.belongsTo('App/Models/Suplier')
  	}	
  	users () {
    	return this.belongsTo('App/Models/User')
  	}	
}

module.exports = Po
