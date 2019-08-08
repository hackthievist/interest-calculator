const { calculateInvestment, cleanup } = require('../services/calculateInvestment');
module.exports = {
  async getInvestment(req, res) {
    try {
    let { subscription, rate, tenure } = req.body;
    subscription = parseInt(subscription);
    rate = parseInt(rate);
    tenure = parseInt(tenure);
    if (subscription < 0 || rate < 0 || tenure < 0) {
      return res.status(400).send({
      error: 'Data validation error. All values must be numbers',
    })
    }
    const investment = await calculateInvestment({ subscription, rate, tenure });
    const cleanedData = await cleanup(investment);
    return res.render('index', {
      title: 'SFS Fixed Investment Funds',
      ...cleanedData
    });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }
};