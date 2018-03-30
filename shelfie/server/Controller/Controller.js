module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, price, imageurl } = req.body;
  
      dbInstance.create_shelfiedb([ name, price, imageurl ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_shelfiedb()
        .then( shelfiedb => res.status(200).send( shelfiedb ) )
        .catch( () => res.status(500).send() );
    },

  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;
  
      dbInstance.delete_shelfiedb([ params.id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.update_shelfiedb([ params.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
};
