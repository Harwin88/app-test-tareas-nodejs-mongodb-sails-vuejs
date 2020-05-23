module.exports = {


  friendlyName: 'View create tareas',


  description: 'Display "Create tareas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/tareas/create-tareas'
    }

  },


  fn: async function () {
   console.log('estoy a qui jajajaj');
    // Respond with view.
    return {};

  }


};
