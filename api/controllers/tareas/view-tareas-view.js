module.exports = {


  friendlyName: 'View tareas view',


  description: 'Display "Tareas view" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/tareas/tareas-view'
    }

  },


  fn: async function () {

    if (this.req.me) {
      throw {redirect: '/tareas'};
    }

    return {};
  }
};
