var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
    commenter:      { type: ObjectId,   required: true,     ref: 'User' },
    comment:        { type: String,     required: true }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

/**
 * Adds a comment.
 *
 * @param user {object} - the user making the comment, can be a User instance or a valid user id.
 * @param message {string} - the comment message.
 */
function add_comment (user, message) {
    this.comments.push({commenter: user, comment: message});
};

/**
 * Updates the message of a specific comment directly in the database. Does not require retrieving
 * the model.
 *
 * @param id {mongoose.ObjectId} - the id of the comment to update.
 * @param message {string} - the new message to update to.
 * @retuns {Promise} - the async update.
 */
function update_comment (id, message) {

};

/**
 * Deletes a comment directly in the database. Does not require retrieving the model.
 *
 * @param id {mongoose.ObjectId} - the id of the comment to update.
 * @retuns {Promise} - the async delete.
 */
function delete_comment (id) {

};

/**
 * Takes any target schema and adds an array of `Comment` field and utility
 * methods for adding/manipulating the comments.
 *
 * @param {mongoose.Schema} target - the schema to add comments to
 */
function make_commentable (target) {
    target.add({
        comments:       { type: [schema],          required: false }
    });
    target.methods.add_comment = add_comment;
};

exports.make_commentable = make_commentable;
exports.Schema = schema;
