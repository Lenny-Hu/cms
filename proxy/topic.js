/**
 * Created by renkun on 2016/12/12.
 */
const models     = require('../models');
const Topic      = models.Topic;


exports.newAndSave = function (title, content, tab, authorId, callback) {
    const topic       = new Topic();
    topic.title     = title;
    topic.content   = content;
    topic.tab        = tab;
    topic.author_id = authorId;

    topic.save(callback);
};


exports.getTopicsByQuery = function (query, opt, callback) {
    query.deleted = false;
    Topic.find(query, {}, opt, function (err, topics) {
        if (err) {
            return callback(err);
        }
        if (topics.length === 0) {
            return callback(null, []);
        }
        callback(null, topics);
    });
};
