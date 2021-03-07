module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define("collection", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Collection;
};