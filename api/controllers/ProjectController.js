/**
 * ProjectController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
global.clearcache = [];

module.exports = {
    getAll: async (req, res) => {
        try{

            let projects = await Project.find({}); 

            if(typeof req.session.projects === 'undefined'){
                req.session.projects = projects;
            }
            else
            {
                req.session.projects = projects;
                clearcache.push(req.session.projects);
                clearcache.push(Utils.Filter(projects));
            }

            if (projects.length <= 0){
                Utils.GetDataSet();
                clearcache.push(Utils.Filter(projects));
            }  
            else {
                clearcache.push(Utils.Filter(projects));
                var projectsList = projects.slice(0, Utils.GetNumber());
                res.json(projectsList);
            }
        } catch(e){
            return res.json({ message: "Not Found"});
        }
    } ,
    getByProject: async (req, res) => {
        try {
            if(req.params.id){
                let projects = await Project.find({});  
                if(typeof req.session.projects === 'undefined'){
                    req.session.projects = projects;
                }
                else
                {
                    req.session.projects = projects;
                    clearcache.push(req.session.projects);
                    clearcache.push(Utils.Filter(projects));
                }

                if (projects.length <= 0){
                    Utils.GetDataSet();
                    clearcache.push(Utils.Filter(projects));
                }
                    
                let project = await Project.findOne({id: req.params.id});
                clearcache.push(Utils.Filter(projects));
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
            if(typeof req.session.projects === 'undefined'){
                req.session.projects = projects;
            }
            else
            {
                req.session.projects = projects;
                clearcache.push(req.session.projects);
                clearcache.push(Utils.Filter(projects));
            }

            if (projects.length <= 0){
                Utils.GetDataSet();
                clearcache.push(Utils.Filter(projects));
            }
            else {
                clearcache.push(Utils.Filter(projects));
                var projectsList = projects.slice(0, Utils.GetNumber());
                res.view('pages/home', { projects: projectsList});
            }
               
        } catch(e){
            res.view('pages/home', { projects: []});
        }
    }
};
