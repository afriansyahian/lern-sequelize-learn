const db = require("../../app/models");

const admin = db.admins;

module.exports = {
    getAdmin: (req, res) => {
        admin
            .findAll({ include: "blog" })
            .then(result => res.send(result))
            .catch(error => res.send(error));
    },
    addAdmin: (req, res) => {
        admin
            .create(req.body)
            .then(result => res.send(result))
            .catch(error => {
                console.log(error);
                res.send(error);
            });
    }
};
