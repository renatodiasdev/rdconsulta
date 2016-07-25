module.exports = app => {
    const Companies = app.db.models.Companies;
    app.route("/companies")
    .get((req, res) => {
        Companies.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })
    .post((req, res) => {
        Companies.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
    app.route("/company/:id")
    .get((req, res) => {
        Companies.findOne({where: req.params})
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
        Companies.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
        Companies.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
};