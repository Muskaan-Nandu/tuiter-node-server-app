import * as tuitsDao from './tuits-dao.js';

const updateTuit = async (req, res) => {
  const tuitdId = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdId, updates);
  res.json(status);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  newTuit.liked = false;
  newTuit.replies = 0;
  newTuit.username = "NASA";
  newTuit.handle = "@nasa";
  newTuit.image = "/images/nasa.png";
  newTuit.topic = "Space";
  newTuit.time = "2h";
  newTuit.retuits = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);

}

const deleteTuit = async (req, res) =>{
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
   res.json(status);
}

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;