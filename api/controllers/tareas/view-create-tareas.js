module.exports = {


  friendlyName: 'View create tareas',


  description: 'Display "Create tareas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/tareas/create-tareas'
    }

  },


  fn: async function () {
     
    // Respond with view.
    return {};

  }


};
