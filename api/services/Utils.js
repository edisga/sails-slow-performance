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