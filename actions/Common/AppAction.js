class AppAction {
  doAction(req, res) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.executeAction(req);
        res.send({ data: result });
      } catch (e) {
        res.status(e.code).send(e);
      }
    });
  }
  executeAction() {
    throw new Error('executeAction method has to be implemented.');
  }
}

module.exports = { AppAction };
