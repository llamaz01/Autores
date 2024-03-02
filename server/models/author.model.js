const { default: mongoose } = require("mongoose");


const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Author Name is mandatory"],
        minLength: [3, "Author Name must be at least 3 characters"]
    }


}, { timestamps: true, versionKey: false });


const Author = new mongoose.model("Author", AuthorSchema);

module.exports = Author;