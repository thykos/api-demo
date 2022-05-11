class IntegrationController {
  static async webhooks(req, res) {
    console.log(JSON.stringify(req.body, null ,2));

    return res.json({ status: 'ok' })
  }
}

module.exports = IntegrationController;
