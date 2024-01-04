const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");

// Item Schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for GET ALL ITEMS
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

// Options for GET SINGLE ITEM
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

// Options for POST AN ITEM
const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },

  handler: addItem,
};

// Options for DELETE AN ITEM
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

// Options for UPDATE AN ITEM
const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

const itemRoutes = (fastify, options, done) => {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOpts);

  // GET SINGLE ITEM
  fastify.get("/items/:id", getItemOpts);

  // ADD AN ITEM
  fastify.post("/items", postItemOpts);

  // DELETE AN ITEM
  fastify.delete("/items/:id", deleteItemOpts);

  // UPDATE AN ITEM
  fastify.put("/items/:id", updateItemOpts);

  done();
};

module.exports = itemRoutes;
