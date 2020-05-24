module.exports = {


  friendlyName: 'View tareas view',


  description: 'Display "Tareas view" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/tareas/tareas-overview'
    }
  },


  fn: async function (input) {
   let resp=  await Tareas.find({id_use: this.req.me.id});
     console.log('este metodo se ejecuto en echo resp'+ resp[1].id);
     return {resp};
  }
};  
