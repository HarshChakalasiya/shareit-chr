const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const fileSchema = new Schema({
	filename:{
		type:String,
		required: true

	},
	path:{
		type:String,
		required: true
	},
	size:{
		type: Number,
		required: true
	},
	uuid:{
		type:String,
		required: true
	},
	sender:{
		type:String,
		required: false
	},
	receiver:{
		type:String,
		required: false
	}	

}, {timestamps:true});


module.exports= mongoose.model('File',fileSchema)

// mongo "mongodb://cluster0-shard-00-00.y30d2.mongodb.net:27017,cluster0-shard-00-01.y30d2.mongodb.net:27017,cluster0-shard-00-02.y30d2.mongodb.net:27017/shareFile?replicaSet=atlas-cv2d7x-shard-0" --ssl --authenticationDatabase admin --username shareIT --password OejFgONDVK8aT3aw