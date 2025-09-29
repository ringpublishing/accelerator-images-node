# CHANGELOG
The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

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
