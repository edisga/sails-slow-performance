const getNumber = require('random-int');

module.exports.GetDataSet = async function () {
    var data = require(process.cwd() + '/projects.json');
    return await Project.createEach(data).fetch()
    .catch({ code: 'E_UNIQUE' }, function (err) {
    })
    .catch({ name: 'UsageError' }, function (err) {
    })
    .catch(function (err) {
    });
};

module.exports.Filter = async function (objects) {
    var objectstmp = objects.sort();
    var objectsRevert = objectstmp.reverse();
    var resultFilter = objectsRevert;
    return resultFilter;
};

module.exports.GetNumber = function () {
    return getNumber(10,5000);
};