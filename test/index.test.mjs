// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import assert from 'assert';
import { describe, it} from 'mocha';
/*
npm install esm --save-dev
npm install module-alias --save-dev
npm i esm module-alias mocha --save-dev
  "_moduleAliases": {
    "@":"."
  }
-r esm -r module-alias/register

test specific timeout
this.timeout(500);//500ms
*/

// import * as shit from 'utils/dist_index.js'
// import * as shit from 'dist_npm_package/dist_index.js'
// import * as shit from '~/dist_index.js'
import {printHelloWorld} from '~/dist_index.js'
// import {printHelloWorld} from '../dist_npm_package/dist_index.js'
describe('TestTitle', function(){
  it('actionHere', function(){
    //assert.strictEqual(1,1);//require assert
    printHelloWorld()
  });
  it('async action here', async function(){
    //this.timeout(500);
  });
});
