/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    //create task 
    create: function (req, res) {
        let data;
          // to convert category name's first letter capital
        data = { nameTask: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1), descriptionTask:  req.body.descriptionTask.charAt(0).toUpperCase(), prioritiTask:  req.body.prioritiTask.charAt(0).toUpperCase()  }
        Category.create(data).fetch().exec(function (err, category) {
          if (err) return (err);
          return res.json(category);
        })
       },

       //show task.
 show: function (req, res) {
   Task.find().exec(function (err, task) {
    throw {redirect:'/task-view/index'};
     return res.json(task);
   });
 },
  
};

