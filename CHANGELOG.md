# CHANGELOG
The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## 2.3.1 - 2026-04-13
### Fixed
- [@dbucki]: Fixed signature validation for URL-safe base64 (`-`/`_`) encoded transformations.

## 2.3.0 - 2026-03-17
### Added
- [@alacki]: Added language-agnostic implementation specification in `docs/spec/SPECIFICATION.md` covering URL structure, encoding pipeline, transform/parameter schema tables, and error conditions.
- [@alacki]: Added deterministic test vectors in `docs/spec/TEST_CASES.md` for use when porting the library to other languages.
- [@alacki]: Added `docs/spec/SPEC_GUIDE.md` describing scope, maintenance rules, and a regeneration prompt for the spec.
- [@alacki]: Added `docs/spec/PORTING_GUIDE.md` with step-by-step instructions for generating a port using Claude Code or GitHub Copilot Chat.
- [@alacki]: Added `.github/copilot-instructions.md` with repository-level Copilot coding rules.
- [@alacki]: Added `.github/pull_request_template.md` with a contribution checklist.

### Changed
- [@alacki]: API documentation output moved from `docs/` to `docs/api/` to separate auto-generated from hand-maintained content.
- [@alacki]: Improved JSDoc for all public methods and the class description of `AcceleratorImage`.
- [@alacki]: `saveAs` transform marked as `@deprecated`.

## 2.2.0 - 2026-02-04
### Added
- [@dbucki]: Added `clone` function to enable further transforms without mutating the base image.

## 2.1.0 - 2025-11-03
### Added
- [@rmusial2]: Added `setFocalPoint` transformation to set focal point of the image.

## 2.0.0 - 2025-10-02
### Added
- [@mdulawa]: Added support for Node v24.

### Changed
- [@mdulawa]: Upgraded `msgpackr` to newest `v1` with support for Node v24.

### Removed
- [@mdulawa]: Dropped support for Safari ≤13 (minimum supported version is now Safari 14) due to upgrade to `msgpackr` v1.10+ in version 2.0.0.
- [@mdulawa]: Removed support for Node v18.

## 1.3.1 - 2025-09-30
### Removed
- [@mdulawa]: Removed support for Node v24 as it's not working with `msgpackr@1.9`.

## 1.3.0 - 2025-09-26
### Added
- [@mdulawa]: Added support for Node v24.

## 1.2.0 - 2025-07-07
### Changed
- [@wreszelewski]: Added metadata transformation.

## 1.1.1 - 2025-01-28
### Fixed
- [@mdulawa]: Fixed workflow - publish to `npmjs` registry.

## 1.1.0 - 2025-01-28
### Changed
- [@mdulawa]: Tested on Node 22.

## 1.0.4 - 2024-11-28
### Changed
- [@pfarys]: Migrated repository to GitHub.

## 1.0.3 - 2024-05-24
### Fixed
- [@mwoloszyn]: Fixed on Safari < 14, by downgrading `msgpackr` from 1.10 which used unsupported BigInt syntax.

## 1.0.2 - 2024-05-10
### Added
- [@pniewiejski]: Quick start section of README contains an example of external image transformation.
- [@pniewiejski]: Fixed `ReferenceError` when checking environment in `Decoder`.

## 1.0.1 - 2024-04-23
### Changed
- [@mdulawa]: Added repository info to package.json.

## 1.0.0 - 2024-04-15
### Changed
- [@pniewiejski]: Approved 1.0.0 release.
- [@pniewiejski]: When encoding numbers that are expected to be integers disregard fractions.

## 0.1.4 - 2024-04-11
### Fixed
- [@mdulawa]: Fixed link to available transformations in README.md.

## 0.1.3 - 2024-04-02
### Changed
- [@pniewiejski]: Removed typedoc RST and HTML documentation generation scripts. Preserve markdown documentation in the repository.

### Fixed
- [@pniewiejski]: `auto` setting for `imageFormat` and `imageQuality`.

## 0.1.2 - 2024-04-02
### Fixed
- [@pniewiejski]: Export `LegacyImage`.

## 0.1.1 - 2024-04-02
### Fixed
- [@mdulawa]: Repository cleanup.

## 0.1.0 - 2024-04-01
### Added
- [@pniewiejski]: Initial version.
