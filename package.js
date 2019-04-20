Package.describe({
  name: 'adornis:typescript',
  version: '0.9.11',
  summary: 'TypeScript for Meteor, based on barbatus:typescript',
  git: 'https://github.com/Adornis/typescript',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'typescript',
  use: ['adornis:typescript-compiler'],
  sources: ['plugin.js'],
  npmDependencies: {
    typescript: process.env.TYPESCRIPT_EXTERNAL_PATH ? 'file://' + process.env.TYPESCRIPT_EXTERNAL_PATH : '3.4.2',
  },
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('adornis:typescript-compiler@0.12.11');

  api.imply('modules@0.11.6');

  api.imply('barbatus:typescript-runtime@1.1.0');
});
