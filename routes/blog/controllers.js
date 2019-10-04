const db = require("../../app/models");

const { blog } = db;

module.exports = {
    addBlog: (req, res) => {
        console.log(req.body);
        
        blog.create(req.body)
            .then(result => res.send(result))
            .catch(error => res.send(error));
    },
    getBlog: (req, res) => {
        blog.findAll()
            .then(result => res.send(result))
            .catch(error => res.send(error));
    }
};
