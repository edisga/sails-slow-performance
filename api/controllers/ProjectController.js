/**
 * ProjectController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var path = require('path');

module.exports = {

    getAll: async (req, res) => {
        try{
            let projects = await Project.find({});
            if (projects.length <= 0)
                Utils.GetDataSet();
            else 
                res.json(projects);

        } catch(e){
            return res.json({ message: "Not Found"});
        }
    } ,
    getByProject: async (req, res) => {
        try {
            if(req.params.id){
                let projects = await Project.find({});
                if (projects.length <= 0)
                    Utils.GetDataSet();

                let project = await Project.findOne({id: req.params.id});
                return res.send(project);
            } 
        } catch(e){
            console.log(e);
            return res.badRequest(`Project ${req.params.id} not found`);
        }
    },
    displayAll: async function(req, res){
        try{
            let projects = await Project.find({});
            if (projects.length <= 0)
                Utils.GetDataSet();
            else 
                res.view('pages/home', { projects: projects});
        } catch(e){
            res.view('pages/home', { projects: []});
        }
    }
};

