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
            viewTemplatePath: 'pages/tareas/tareas-view'
          }
  
    },
  
  
    fn: async function(inputs) {
      if (!sails.config.custom.internalEmailAddress) {
        throw new Error(
  `Cannot deliver incoming message from contact form because there is no internal
  email address (\`sails.config.custom.internalEmailAddress\`) configured for this
  app.  To enable contact form emails, you'll need to add this missing setting to
  your custom config -- usually in \`config/custom.js\`, \`config/staging.js\`,
  \`config/production.js\`, or via system environment variables.`
        );
      }
  
    
  
    }
  
  
  
  
  };
  