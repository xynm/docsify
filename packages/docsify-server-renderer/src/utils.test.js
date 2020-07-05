/* eslint-disable no-global-assign */
require = require('esm')(module /* , options */);
const { expect } = require('chai');
const { initJSDOM } = require('../../../test/_helper');
const { isExternal } = require('./utils');

describe('isExternal', () => {
  it('detects whether links are external or not', async () => {
    initJSDOM('', {
      url: 'http://127.0.0.1:3000',
      runScripts: 'dangerously',
      resources: 'usable',
    });

    expect(isExternal).to.be.instanceOf(Function);
    expect(isExternal('/foo.md')).to.be.false;
    expect(isExternal('//foo.md')).to.be.true;
    expect(isExternal('//127.0.0.1:3000/foo.md')).to.be.false;
    expect(isExternal('http://127.0.0.1:3001/foo.md')).to.be.true;
    expect(isExternal('https://google.com/foo.md')).to.be.true;
    expect(isExternal('//google.com/foo.md')).to.be.true;
    expect(isExternal('/google.com/foo.md')).to.be.false;
  });
});
