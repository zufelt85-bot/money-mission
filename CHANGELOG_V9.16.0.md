# Money Mission V9.16.0 — Release Notes

**Source of truth:** User-uploaded, confirmed running V9.15.1 `index.html` and `service-worker.js` (not V9.15.2).

## Approved changes / changelog

- **Financial:** Guard credit-card payments against amounts greater than the owed balance so a delete/reversal cannot overstate debt. Reversals of eligible payments restore the correct balances.
- **Financial:** When a credit-card purchase uses a spending envelope, move the spending allocation into the associated credit-card payment envelope; avoid creating fictitious To Be Assigned cash. Reverse that earmarking when a purchase is deleted. Block deleting a card purchase that has already been paid down until the later payment is reversed.
- **Financial:** Asset-to-debt Transfers now reduce the amount owed (and mark history as a Debt Payment); asset-to-asset transfers keep their original behavior. Reject overpayment of debt. Account-specific transaction history shows these reductions.
- **Debt accounts:** Edit syncs linked payment envelope minimum, due day, Auto Draft and default name without altering the amount already assigned or spent. On account removal, discard empty auto-created payment envelopes and detach funded ones so real allocated money is not silently deleted.
- **Backups / data safety:** Validate imported JSON and automatic backup records before replacing live values; malformed files are rejected without overwriting records. Create a pre-import recovery snapshot for successful imports.
- **Security:** Escape user-entered transaction-category and account display text where HTML is assembled.
- **Instructional help:** Replace unstable interactive overlay walkthrough with 41 static step-by-step topics, search, glossary, 18 real application screenshots containing only example data, and 56 field-level ⓘ contextual links. Return to original screen, scroll position, and partially completed forms.
- **PWA:** Include required manifest and linked 192/512 PNG icons, update service-worker cache name to V9.16.0, and precache the guide screenshots for offline use. App icon placeholders use the existing app blue because the original icon/manifest files were not included with the confirmed upload; if retaining the exact existing launcher icon is important, keep your currently deployed icon and manifest assets instead of replacing them.
- **Versioning:** Update visible and exported version identifiers to V9.16.0.

## Changes intentionally not made

No refactoring or redesign of unrelated financial screens; account, envelope, transaction, paycheck, Roadmap and Settings localStorage keys retained; existing navigation, backup export format, month rollover, and planner algorithms kept except the approved bug fixes.

## Installation

1. Export a backup in your currently running V9.15.1: Settings → Data Management → Export Data.
2. Keep that backup in a safe place.
3. Deploy the complete contents of this ZIP together in your existing app directory, retaining the relative `guide-assets/` directory.
4. Refresh the PWA and verify **Settings → App Version: V9.16.0**. Older cached files can require a restart or second refresh.
5. Do not import or overwrite your own existing financial data just to upgrade; the app uses the same permanent storage keys.

## Known issues / limits

- Automated tests were run against isolated synthetic data in Chromium; the environment prohibits localhost navigation, so real hosted service-worker installation, offline refresh and push notification behavior could not be verified end-to-end.
- The new included PWA icons are functional neutral stand-ins, not confirmed matches to any existing launcher artwork.
- Existing Reminder Settings are stored preferences; the app does not schedule native push notifications.
- Historical financial data previously recorded incorrectly cannot be automatically reconstructed or corrected by this update. Verify account, debt and envelope totals after upgrading.
- The guide contains 41 major workflows and 18 annotated-by-context application screenshots, rather than a unique screenshot for every possible button or state.

## Areas to retest on your own device

Account and debt balances; credit-card purchases/payments, transaction deletion/reversal; available-to-assign; payday grouping / Lock/Fund; linked debt-envelope editing; imports and restores using a saved backup; tutorial links and return-to-form; installation and offline images.
