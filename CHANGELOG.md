# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.0 - 2026-10-27
### Added
- The burger icon is shown in the frontend settings preview of the admin. It stays hidden in the CMS page preview.
### Changed
- 🔥 Breaking change: the extension now requires PWA 7.32.0 or newer.
- The burger icon is an `IconButton` styled through the theme (`makeStyles`) and reads its data via `useSelector` hooks instead of `connect`.
### Removed
- Removed the glamor styling and the `@shopgate-ps/pwa-extension-kit` dependency.

## 1.2.1 - 2026-05-04
### Added
- Added CSS classes to enable styling

## 1.2.0 - 2026-04-14
### Added
- App bar icon is hidden in CMS page preview
### Fixed
- App bar icon is positioned right when left app bar icon is missing

## 1.1.0 - 2026-02-27
### Added
- Portal around content of the App Bar Icon: `ext-add-browse-appbar-ios.app_bar_icon`

## 1.0.1 - 2019-09-06
### Fixed
- The AppBar Logo on the Startpage doesn't jump anymore when the BurgerIcon is rendered.

## 1.0.0 - 2019-09-03
### Added
- Adds Browse function to the AppBar for iOS.
