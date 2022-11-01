const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
    toObject: { vituals: true },
    toJSON: { vituals: true },
});

File.set('toObject', { virtuals: true })
File.set('toJSON', { virtuals: true })

File.virtual('url').get(function() {
    const url = process.env.PORT || 'http://localhost:3333'

    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);