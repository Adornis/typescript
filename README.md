## TypeScript Compiler for Meteor

### Env Vars

- `TYPESCRIPT_EXTERNAL_PATH` can be set to the path of a typescript node package anywhere on your computer to be able to use a different version that is used in the package by default -- only works when you clone locally, ask Meteor why, I don't know
- `TYPESCRIPT_DISABLE_WARNINGS` can be used to only show lifecycle information and errors

### Default Compiler Information

TypeScript files are compiled into ES5 and CommonJS modules by default.

Default compiler options as JSON:

```json
{
  "module": "commonjs",
  "target": "es5",
  "moduleResolution": "node",
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "sourceMap": true,
  "importHelpers": true
}
```

## Package Structure

This package uses (directly or indirectly) another package which is worth mentioning:

[typescript-compiler](https://github.com/adornis/typescript-compiler) - exports a Meteor TypeScript compiler that implements Meteor compiler API to compile TypeScript source code incrementally on file changes.

## Credits

Thanks @barbatus for barbatus:typescript, which this package is based on, even as far as copying some parts.
Adornis doesn't claim any ownership of this code, we have merely taken over the repository after fruitless attempts to contact barbatus.
We love you, if you want to take this repo back, contact @yorrd.

## License

MIT
