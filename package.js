Package.describe({
  name: 'majus:string-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'JavaScript String related Spacebars helpers.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use(['templating', 'underscore', 'majus:helpers-core@0.0.1'], 'client');
  api.mainModule('string-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('majus:string-helpers', 'client');
  api.mainModule('string-helpers-tests.js', 'client');
});