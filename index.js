const _ = require('lodash');
const SmeeClient = require('smee-client')

function initSmee() {
  let source = _.get(process, 'env.SMEE_SOURCE', 'https://smee.io/new'); // https://smee.io/4apOwpICafgUENI
  if (source.length === 0) {
    source = 'https://smee.io/new';
  }
  const target = _.get(process, 'env.SMEE_TARGET', ''); // http://localhost:3000/events


  if (target.length === 0) {
    console.log('No smee target set, exiting.');
    return;
  }
  const smee = new SmeeClient({ source, target, logger: console });
  const events = smee.start();

  // Stop forwarding events
  // events.close()
}


(() => {
  initSmee();
})();
