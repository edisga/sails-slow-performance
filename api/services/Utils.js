const getNumber = require('random-int');

module.exports.GetDataSet = async function () {
    var data = require(process.cwd() + '/projects.json');
    return await Project.createEach(data).fetch()
    .catch({ code: 'E_UNIQUE' }, function (err) {
        res.sendStatus(409);
    })
    .catch({ name: 'UsageError' }, function (err) {
        res.badRequest();
    })
    .catch(function (err) {
        res.serverError(err);
    });
};

module.exports.Filter = async function (objects) {
    var objectstmp = objects.sort();
    var objectsRevert = objectstmp.reverse();
    return objectsRevert;
};

module.exports.GetNumber = function () {
    return getNumber(10,5000);
};