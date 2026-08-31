# Kotlin Command — EXEC002 Catalogue Delta

Updated: 31 August 2026

This file records status changes against the previously catalogued 284 open/unverified items. It is a delta ledger, not a replacement for the authoritative BuildSpec.

## Closed or promoted to PASS by GitHub CI

- KC-MISS-002 Clean Gradle dependency resolution — PASS
- KC-MISS-003 Kotlin Android compilation — PASS
- KC-MISS-004 assembleDebug — PASS
- KC-MISS-005 exact-source debug APK — PASS for current verified checkpoint
- KC-MISS-232 Android lint/static analysis — PASS for build #4
- KC-MISS-233 current debug APK — PASS for build #4
- KC-MISS-234 APK package-name verification — PASS (`com.nexarenew.aiconsole`)
- KC-MISS-235 APK versionName verification — PASS (`0.2.0-dev`)
- KC-MISS-236 APK versionCode verification — PASS (`21`)
- KC-MISS-241 apksigner verification — PASS for debug build
- KC-MISS-242 zipalign verification — PASS
- KC-MISS-269 provider/domain contract tests — materially advanced into real Gradle/JUnit execution

## Materially advanced / still partial

- KC-MISS-013 DataStore-backed settings — active build #5 remediation
- KC-MISS-047/048/049 provider model catalogue/selection/per-provider memory — foundations present; DataStore persistence active in build #5
- KC-MISS-057/058/059 offline outbox/connectivity/retry — source foundations present
- KC-MISS-069 through KC-MISS-078 usage/accounting/guardrails — source foundations present; reporting remains incomplete
- KC-MISS-079 through KC-MISS-100 Full Voice — source lifecycle substantially advanced; physical-device acceptance remains open
- KC-MISS-101 through KC-MISS-116 prompts/skills/memory — core CRUD/search/context/import/export foundations substantially present; runtime/instrumentation acceptance incomplete
- KC-MISS-117 through KC-MISS-150 documents/PDFs/attachments — metadata/import/extraction-state/relationships present; PDF/camera/gallery and large-file acceptance remain incomplete
- KC-MISS-151 through KC-MISS-172 tasks/notifications — persisted AI jobs, task history and deep-link foundations present; recurrence/reboot/background acceptance remains incomplete
- KC-MISS-173 through KC-MISS-205 backup/restore/legacy import — transactional restore, exact known legacy contracts and migration audit foundations present; fixture/device acceptance remains incomplete
- KC-MISS-206 through KC-MISS-228 PIN/privacy/accessibility — PIN/relock/change foundations present; recovery policy, full accessibility and device validation remain incomplete

## Explicitly not closed

The following classes of work must not be represented as completed without further execution evidence:

- production release signing/AAB
- physical Android 16 install/launch/upgrade tests
- live OpenRouter acceptance with real credentials
- live Together acceptance with real credentials
- physical microphone/TTS/barge-in testing
- TalkBack/dynamic-text/reduced-motion acceptance
- camera/gallery/file-provider physical testing
- reboot/Doze/background task execution
- final backup/restore device roundtrip
- final release/handover provenance

## Evidence integrity note

Build #4 is the current fully green CI checkpoint. Build #5's first attempt stopped at the remediation-patch SHA gate before Android compilation; that is an integrity-transfer failure, not evidence that the DataStore source itself failed to compile. The updated branch pins the build #5 patch to Git blob `198b079a9e6ba1cb68095a52f6ff1fa3d997392f` and records the patch SHA-256 during CI for inclusion in the build evidence artifact.
