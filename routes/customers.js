module.exports = app => {
    const Customers = app.db.models.Customers;
    app.route("/customers")
    .get((req, res) => {
        Customers.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })
    .post((req, res) => {
        Customers.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
    app.route("/customer/:id")
    .get((req, res) => {
        Customers.findOne({where: req.params})
        .then(result => {
            if (result) {
                res.json(result)
            } else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .put((req, res) => {
        Customers.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
        Customers.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
};