import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
//
chai.use(sinonChai);
chai.use(chaiAsPromised);


describe('Container::App', function () {
  let props;

  beforeEach(function () {
    props = {};
  });

  it('One equals one', function () {
    expect(props).to.be.an('object').that.is.empty;
  });
});
