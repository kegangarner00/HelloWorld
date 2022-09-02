/**
 * @file index.js
 * @module index
 * @description The entry point for HelloWorld.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Kegan Garner
 * @date 2022/09/02
 * @copyright Copyright © 2022-… by Kegan Garner. All rights reserved
 */

// Internal imports

// External imports
import path from 'path';
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));

console.log('Hello World Kegan Garner');
console.log('baseFileName is: ' + baseFileName);