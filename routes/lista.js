module.exports = app => {
    const Lista = app.db.models.Lista;
    app.route("/lista")
    .get((req, res) => {
        Lista.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })
    .post((req, res) => {
        Lista.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
    app.route("/lista/:id")
    .get((req, res) => {
        Lista.findOne({where: req.params})
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
        Lista.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
        Lista.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
};