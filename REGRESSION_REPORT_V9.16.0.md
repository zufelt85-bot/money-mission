# Regression Review — Money Mission V9.16.0

## Automated browser regression (synthetic data, 390px viewport unless specified)

**11 of 11 test groups passed** using headless Chromium:

1. Seven main tabs and application startup, with no JS page errors.
2. Field info dialog → linked How-To Guide → original screen; search and navigation.
3. Credit-card purchase moves budgeted cash reservation correctly, including deletion/reversal.
4. Credit-card payments alter cash and debt correctly, including deletion/reversal.
5. Card overpayment is rejected without recording changes.
6. Transfers into a debt account reduce debt and reverse correctly.
7. Editing linked debt minimum updates automatic envelope; deleting account removes unused envelope.
8. Deleting an account leaves a funded envelope as a standalone allocation.
9. Invalid import payloads do not replace existing records; valid backups restore.
10. HTML-special-character transaction category is displayed without HTML/script execution.
11. Screen layout has no document-level horizontal overflow at 320, 390 and 768 px.

## Static/package validation

- Main app and service-worker JavaScript pass syntax compilation.
- 41 topic IDs, 56 contextual help field IDs, 18 screenshot files and their service-worker cache references are consistent.
- ZIP integrity and file enumeration checked after packaging.
- Original uploaded baseline preserved byte-for-byte; changes were made to a separate V9.16.0 folder.
- PWA installation **not browser-verified** due to `net::ERR_BLOCKED_BY_ADMINISTRATOR` when Chromium attempted localhost; this is an environment limitation, not a claim the PWA is broken.

## Intentional behavioral changes

Overpayment rejection, debt-transfer handling, credit-card envelope reallocation, account/debt linked envelope synchronization, unsafe backup rejection, removal of broken guided overlays in favor of a browseable How-To Guide, and version/cache update.

## Regression caveat

The automated matrix verifies representative workflows, **not every possible user-record combination or device-specific behavior**. After deploying, keep the exported V9.15.1 backup until you verify data, calculations and installation with your actual records.
