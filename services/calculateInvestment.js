module.exports = {
  async calculateInvestment ({ subscription, rate, tenure }) {
  try {
    let totalInvestment = 0, interest, totalInterest = 0, totalSubscription = 0;
    rate /= tenure;
    for(let i = 0; i < tenure; i++) {
      totalInvestment += subscription;
      interest = (rate/100) * totalInvestment;
      totalInvestment += interest;
      totalInterest += interest;
      totalSubscription += subscription;
    }
    const result = { totalSubscription, totalInterest, totalInvestment }
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
},
  async cleanup (values) {
    values['totalSubscription'] = `₦${values.totalSubscription.toFixed(4)}`;
    values['totalInterest'] = `₦${values.totalInterest.toFixed(4)}`;
    values['totalInvestment'] = `₦${values.totalInvestment.toFixed(4)}`;
    console.log(values);
    return values;
  }
}