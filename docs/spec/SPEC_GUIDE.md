# Specification Guide

This document explains the purpose, scope, and maintenance process for the files in `docs/spec/`.

---

## Purpose

The files in `docs/spec/` form a **language-agnostic implementation specification** for the
`AcceleratorImage` URL generation logic. Their primary audience is:

- Developers porting the library to another language (Kotlin, Swift/Objective-C, PHP, Python, …).
- AI coding assistants generating a compatible implementation from scratch.
- Maintainers verifying that a reimplementation is correct.

The spec is intentionally separate from the auto-generated API reference (`docs/api/`) because it
describes *how* the encoding works at a protocol level, not *what* the TypeScript API looks like.

---

## Files

| File | Description |
|---|---|
| `SPECIFICATION.md` | Full language-agnostic protocol spec: data structures, encoding pipeline, schema tables, error conditions. |
| `TEST_CASES.md` | Deterministic test vectors with exact expected URLs, extracted from the library's own test suite. |
| `PORTING_GUIDE.md` | Step-by-step instructions for generating a port using Claude Code or GitHub Copilot Chat. |
| `SPEC_GUIDE.md` | This file. Explains scope, maintenance rules, and the regeneration prompt. |

---

## Scope

The spec covers **only `AcceleratorImage`**. The following are explicitly out of scope:

- `LegacyImage` — generates OCDN v3 URLs with a different encoding strategy.
- Internal helper classes (`Decoder`, `ImageTransformBuilder` internals).
- Browser vs. Node.js environment differences (the spec assumes a correct implementation handles both).
- **`@deprecated` methods** — methods marked `@deprecated` in JSDoc MUST NOT appear in
  `SPECIFICATION.md` or `TEST_CASES.md`. They are kept in the codebase for backwards
  compatibility but are not part of the target API for new implementations.

---

## Source Files That Drive the Spec

When any of the following **semantics** change, the spec MUST be reviewed and updated:

- **Encoding pipeline** — how the token is built (msgpack, base64, signature algorithm).
- **Transform/parameter schema** — new codes, renamed arguments, changed defaults or constraints.
- **URL structure** — path format, version segment, fileName segment.
- **`getUrl()` decision logic** — conditions under which a transformation URL is generated.
- **Error conditions** — new throws, changed messages.
- **Public non-deprecated API surface** — new methods or removed methods that affect what
  implementors need to support.

---

## When to Update

| Change | Action required |
|---|---|
| New transformation added | Update the transformations table in SPECIFICATION.md; add a corresponding test case in TEST_CASES.md |
| Transformation argument type/default changed | Update the transformations table in SPECIFICATION.md and any affected test vectors in TEST_CASES.md |
| New global parameter added | Update the global parameters table in SPECIFICATION.md; add a corresponding test case in TEST_CASES.md |
| Encoding pipeline changed (msgpack, base64, signature) | Rewrite the encoding pipeline section in SPECIFICATION.md; regenerate all test vectors in TEST_CASES.md |
| New error condition | Update the error conditions table in SPECIFICATION.md |
| `VERSION` constant changed | Update the URL structure section in SPECIFICATION.md |
| Method marked `@deprecated` | **Remove** it from SPECIFICATION.md and TEST_CASES.md |
| Deprecated method removed from codebase | No spec change needed (already excluded) |

---

## How TEST_CASES.md Is Derived from the Test Suite

Test vectors in `TEST_CASES.md` are extracted from the library's own Jest test suite.

### Which test cases assert URL strings

Test cases that involve **only transformations** (no global parameters) produce deterministic
URL strings regardless of msgpack library. For these, copy the expected URL directly from the
Jest `expect(...).toEqual(...)` assertion.

### Which test cases must use decode-based verification

Test cases that involve **global parameters** (`imageFormat`, `imageQuality`, `animation`,
`autoOrient`) encode a `params` map in the token. The exact Base64 token depends on how the
msgpack library serializes map keys and map format:

- The TypeScript implementation (`msgpackr`) serializes the `params` map with **string keys**
  (e.g. `"0"` for `imageFormat`) because JavaScript object keys are always strings, and uses
  compact `fixmap` format.
- Standard libraries in other languages (Kotlin, PHP, Swift, Python, …) will naturally use
  **integer keys** with `fixmap`. Both string and integer keys are valid msgpack and accepted
  by the server, but they produce **different byte sequences and therefore different Base64 tokens**.
- Both encodings are correct and will be accepted by the Ring Accelerator server.

Because of this, test cases with parameters in `TEST_CASES.md` are written as **decode-based
verifications**: generate the URL, extract the token, decode it, and assert the resulting data
structure (`transforms` array + `params` map) rather than the raw URL string. This makes the
test cases valid for any conforming msgpack library regardless of key type.

---

## How to Regenerate the Spec After Library Changes

The spec is maintained **manually**. There is no automated generation command.

After making changes to the library, use the following prompt with GitHub Copilot Chat (or any
capable AI assistant) to regenerate or update the spec:

---

### Regeneration Prompt

```
You are updating the language-agnostic implementation specification for the AcceleratorImage
URL encoding library.

Read docs/spec/SPEC_GUIDE.md first — it defines the scope, the exclusion rules (especially
regarding @deprecated methods), and the expected structure of the spec files.

The specification lives in:
  docs/spec/SPECIFICATION.md
  docs/spec/TEST_CASES.md

The source of truth for the spec is the behaviour defined by:
  src/AcceleratorImage.ts            (URL structure, getUrl logic, public API)
  src/ImageTransformBuilder.ts       (transformation methods — exclude @deprecated ones)
  src/internal/transforms/schema.ts  (transform codes, argument schemas, parameter schemas)
  src/internal/Decoder.ts            (encoding pipeline: msgpack, base64, signature)

Test vectors must be derived from the AcceleratorImage public API level, not from internal
classes.

Please:
1. Read all source files and the current spec files.
2. Update SPECIFICATION.md to reflect any changes, following the structure defined in SPEC_GUIDE.md.
3. Update TEST_CASES.md to add or correct test vectors. All vectors MUST be expressed using the
   AcceleratorImage public API (constructor, transformation methods, getUrl). Do not reference
   Decoder internals directly.
4. Exclude any method marked @deprecated from both files.
5. Do NOT change the scope — LegacyImage remains out of scope.
6. Update SPECIFICATION.md and TEST_CASES.md only if there are changes that affects implementors 
   (e.g. new transformation, changed encoding, new error condition). 
   Cosmetic changes to the TypeScript API that do not affect the target protocol do not require spec updates.
7. Keep all content in English.
```

---

## API Documentation

The `docs/api/` directory is auto-generated by TypeDoc and MUST NOT be edited manually.

To regenerate it:

```bash
npm run docs
```

Run this command and commit the result whenever any public TypeScript API changes (new methods,
changed signatures, updated JSDoc comments).
