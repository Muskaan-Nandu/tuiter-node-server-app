import posts from "./tuits.js";
let tuits = posts;

const updateTuit = (req, res) => {
  const tuitdId = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
  tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  res.sendStatus(200);
}

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
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
  tuits.push(newTuit);
  res.json(newTuit);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) =>
    t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}

const findTuits = (req, res) =>
  res.json(tuits);

const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;