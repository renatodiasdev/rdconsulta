module.exports = app => {
    const Professionals = app.db.models.Professionals;
    app.route("/professionals")
    .get((req, res) => {
        Professionals.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })
    .post((req, res) => {
        Professionals.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
    app.route("/professional/:id")
    .get((req, res) => {
        Professionals.findOne({where: req.params})
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
        Professionals.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
        Professionals.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
};