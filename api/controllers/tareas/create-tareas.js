module.exports = {

    friendlyName: 'crear y administrador de tareas',
  
  
    description: 'crear tarreas nuevas cada segundo ',
  
    inputs: {
      
        nameTarea: {
        required: true,
        type: 'string',
        description: 'The full name of the human sending this message.',
        example: 'Hermione Granger'
      },
  
      descricion: {
        required: true,
        type: 'string',
        description: 'The custom message, in plain text.'
      },
  
      prioridad: {
        required: true,
        type: 'number',
        description: 'prioridad de la tarea.'
      }
  
    },
        
    exits: {
  
        success: {
            viewTemplatePath: 'pages/tareas/tareas-overview'
          }
  
    },
    fn: async function(inputs, res) {
    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    try {
      var newUserRecord = await Tareas.create({
        nameTarea: inputs.nameTarea,
        descricion: inputs.descricion,
        prioridad: inputs.prioridad,
        id_use: this.req.me.id
      }).fetch();
  
      sails.log('Finn\'s tarea creada:', newUserRecord.id);

    } catch (err) {
      sails.log('Finn\'s error:', err)
      return err
    }
  

  
  }
  
  
  
  
  };
  