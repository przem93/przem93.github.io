/** @type {import('next').NextConfig} */

const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

module.exports = stylexPlugin({
  rootDir: __dirname,
})({});
