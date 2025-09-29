# CONTRIBUTING

This project is internally developed by Ring Publishing.

## Versioning

Version should follow [Semantic versioning](https://semver.org/) rules.

## Dependencies

| :warning: WARNING                                                                                                                                                                                            |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| https://www.npmjs.com/package/msgpackr dependency **should NOT** be updated above version 1.9.x. Version 1.10 uses BigInt notation, which causes Syntax Errors in older browsers, crashing the library code. |

## Documentation

Documentation is generated with [TypeDoc](https://typedoc.org/). To generate documentation run:

```bash
npm run docs
```

When issuing a pull request, please make sure to update the documentation if needed.
