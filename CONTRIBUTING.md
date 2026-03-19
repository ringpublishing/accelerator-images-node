# CONTRIBUTING

This project is internally developed by Ring Publishing.

## Versioning

Version should follow [Semantic versioning](https://semver.org/) rules.

## Documentation

The `docs/` directory is split into two parts:

- `docs/api/` — auto-generated TypeDoc API reference. **Do not edit these files manually.**
- `docs/spec/` — hand-maintained language-agnostic implementation specification.

To regenerate the API reference run:

```bash
npm run docs
```

When issuing a pull request, make sure to:
- Run `npm run docs` and commit the updated `docs/api/` if any public API changed.
- Update `docs/spec/SPECIFICATION.md` and `docs/spec/TEST_CASES.md` if the URL encoding
  logic, schema codes, or public API changed.
