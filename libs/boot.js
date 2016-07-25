module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
            app.db.sequelize.sync().done(() => {
            app.listen(app.get("port"), () => {
            console.log(`Atende sem espera API - porta ${app.get("port")}`);
        });
    });
    }    
};