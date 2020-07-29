const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
    {
        type: {
            type: String,
        },
        describe: {
            type: String,
        },
        income: {
            type: String,
            require: true
        },
        expend: {
            type: String,
        },
        cash: {
            type: String,
        },
        remark: {
            type: String,
        },
        identity: {
            type: String,
        }

    }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
