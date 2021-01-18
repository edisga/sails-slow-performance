module.exports.GetDataSet = async function () {
    var data = require(process.cwd() + '/projects.json');
    return await Project.createEach(data).fetch();
};