const _ = require('lodash');

const validateAndSave = (req, Model) => new Promise(async (resolve, reject) => {
  try {
    const fields = Object.keys(Model.schema.paths)
      .filter(value => !value.includes('__v'))
      .filter(value => !value.includes('_id'));
    const example = new Model(_.pick(req.body, fields));
    await example.save();
    resolve(example);
  } catch (e) {
    reject({
      code: 422,
      message: e.message
    });
  }
});

module.exports = { validateAndSave };
