const { expect } = require('chai');
const awsService = require('./awsService');

describe('src/services/awsService.js', () => {
  it('should get lambda instance successfully', () => {
    const lambdaInstanceKeys = Object.keys(awsService.getLambda());
    expect(lambdaInstanceKeys).to.deep.equal(['config', 'isGlobalEndpoint', 'endpoint', '_clientId']);
  });
});
