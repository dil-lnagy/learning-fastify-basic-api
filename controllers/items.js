let items = require("../Items");
const uuidv4 = require("uuid").v4;

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  reply.send(items.find((item) => item.id === req.params.id));
};

const addItem = (req, reply) => {
  const item = {
    id: uuidv4(),
    name: req.body.name,
  };

  items.push(item);

  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  items = items.filter((item) => item.id !== req.params.id);
  reply.send({ message: `Item ${req.params.id} has been removed` });
};

const updateItem = (req, reply) => {
  let updatedItem = {};
  items.map((item) => {
    if (item.id === req.params.id) {
      item.name = req.body.name;
      updatedItem = item;
    }
    return item;
  });
  reply.send(updatedItem);
};

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
};
