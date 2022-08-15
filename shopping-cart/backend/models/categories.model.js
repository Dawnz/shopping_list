const db = require('mongoose')

let itemsSchema = new db.Schema(
	{
		name: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = db.model('categories', itemsSchema)
