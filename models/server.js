const mongoose = require('mongoose');

const serverSchema = mongoose.Schema({
	serverID: String,
	prefix: String,
	delete_timeout: Number,
	roles: {
		owner: String,
		admin: String,
		dj: String,
		user: String,
		mute: String
	},
	announce_channel: String,
	announce: {
		add_member: Boolean,
		remove_member: Boolean
	},
	spam_channels: [String]
});

module.exports = mongoose.model('Server', serverSchema);
