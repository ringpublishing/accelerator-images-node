# Porting Guide — Generating a Compatible Implementation with AI

This guide shows how to use an AI coding assistant to generate a working port of the
`AcceleratorImage` URL encoding logic in a target language (PHP, Kotlin, Swift/Objective-C,
Python, Go, etc.).

The specification in this repository is precise enough that a capable AI model can produce a
correct, tested implementation in one session.

---

## What You Need

1. The files in `docs/spec/`:
   - [`SPECIFICATION.md`](./SPECIFICATION.md) — the protocol spec
   - [`TEST_CASES.md`](./TEST_CASES.md) — deterministic test vectors
2. The [published npm README](https://www.npmjs.com/package/@ringpublishing/accelerator-images) —
   useful for giving the AI a sense of the intended public API shape and real usage examples
   (the spec alone covers the wire protocol; the README shows what the library looks like from
   a caller's perspective).
3. Access to an AI coding assistant. The examples below use **Claude Code** (`claude`) and
   **GitHub Copilot Chat**, but any capable model works.

---

## Option A: Claude Code (recommended for a full project)

Claude Code runs in your terminal and can create a complete project structure, write code,
run tests, and iterate until they pass — all in one session.

### Step 1 — Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### Step 2 — Start a session in your target project directory

```bash
mkdir accelerator-images-php   # or kotlin, swift, etc.
cd accelerator-images-php
claude
```

### Step 3 — Paste the following prompt

Replace `<TARGET_LANGUAGE>` with your target (e.g. `PHP 8.2`, `Kotlin`, `Swift 5.9`).

```
I want you to implement the AcceleratorImage URL encoding library in <TARGET_LANGUAGE>.

Before writing any code, read the following for context:
- npm README (public API shape and usage examples):
  https://www.npmjs.com/package/@ringpublishing/accelerator-images
- The complete specification and test vectors are provided below.

--- SPECIFICATION ---
<paste the full contents of docs/spec/SPECIFICATION.md here>

--- TEST CASES ---
<paste the full contents of docs/spec/TEST_CASES.md here>

---

Please:
1. Create a complete, idiomatic <TARGET_LANGUAGE> implementation that covers all public API
   described in the specification (constructor, all transformation methods and global parameters.
2. Implement the full encoding pipeline exactly as described in Section 5:
   - MessagePack serialization
   - URL-safe Base64 (no padding)
   - 3-character signature prefix from MD5 hash of the string "${base64data}/${key}"
3. Write a test suite that verifies every test case in TEST_CASES.md, using the exact
   input/output values listed there.
4. Make sure all tests pass before finishing.
5. Choose dependencies that are available in the standard ecosystem for <TARGET_LANGUAGE>
   and are compatible with the target environment.
```

Claude Code will create the files, run the tests, and iterate until everything passes.

---

## Option B: GitHub Copilot Chat (for an existing project)

If you are adding the implementation to an existing project, use Copilot Chat in your IDE.

### Step 1 — Open a new chat

In VS Code or JetBrains, open a new Copilot Chat window.

### Step 2 — Attach the spec files

Use the **Attach file** / **Add context** button to attach:
- `docs/spec/SPECIFICATION.md`
- `docs/spec/TEST_CASES.md`

The [npm README](https://www.npmjs.com/package/@ringpublishing/accelerator-images) is also worth
sharing as additional context — it shows real usage examples that help the model understand the
intended shape of the public API.

### Step 3 — Send the prompt

```
I need to implement the AcceleratorImage URL encoding library in <TARGET_LANGUAGE>.

Additional context on the library's intended API and usage:
  https://www.npmjs.com/package/@ringpublishing/accelerator-images

I've attached the full specification and test vectors. 

Please:

1. Implement all public API from the specification including constructor, transformation methods and global parameters.
2. Follow the encoding pipeline in Section 5 exactly (MessagePack → URL-safe Base64 →
   3-char MD5 signature prefix).
3. Write tests for every TC-XX test case from TEST_CASES.md.
4. Make sure all tests pass before finishing.
5. Choose dependencies that are available in the standard ecosystem for <TARGET_LANGUAGE>
   and are compatible with the target environment.
```

---

## Tips for Getting a Good Result

### Read the npm README first

Before running the prompt, skim the
[npm README](https://www.npmjs.com/package/@ringpublishing/accelerator-images). It shows
concrete TypeScript usage examples (chaining transforms, using `clone`, parsing an existing URL)
that help the AI model understand the expected developer experience — things the spec alone
doesn't convey. You can paste the URL directly into the prompt or attach the content as extra
context.

### Verify the encoding pipeline first

The most error-prone part is Section 5 (token encoding). After the AI generates code, verify
TC-04 or TC-05 first — they have exact expected URLs. If those match, the rest usually follows.

### Check MessagePack library choice

The spec uses **MessagePack** for serialization. Make sure the AI picks a library that:
- Serializes arrays as arrays (not objects/maps).
- Handles booleans as MessagePack booleans, not integers.
- Is available in the standard package registry for the target language.

### URL-safe Base64 — padding matters

The spec is explicit: **strip all `=` padding**. Some standard library Base64 encoders include
padding by default. Make sure the AI-generated code strips it.

### MD5 signature — standard Base64, not URL-safe

The MD5 hash is Base64-encoded using **standard** Base64 first, then the `+`/`/` characters are
replaced with `-`/`_`. This is subtle — verify with TC-15 (signature verification).

### Run the full test suite

All TC-XX test cases should pass. Pay special attention to:
- **TC-04** — chained transforms with exact URL
- **TC-11** — `setName` with MD5 slug and path segment
- **TC-13** — round-trip decode
- **TC-15** — invalid signature error
