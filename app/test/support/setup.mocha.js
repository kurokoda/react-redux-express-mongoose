import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {config as configDotenv} from 'dotenv';
import jsdom from 'jsdom';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

configDotenv()
chai.use(sinonChai)
chai.use(chaiAsPromised)

global.sinon  = sinon
global.expect = chai.expect

global.document  = jsdom.jsdom('<html><head><script></script></head><body></body></html>')
global.window    = document.defaultView
global.navigator = global.window.navigator
