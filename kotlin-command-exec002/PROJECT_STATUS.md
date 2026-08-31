# Kotlin Command — Current Project Status

Updated: 31 August 2026
Execution workflow: EXEC002 v1.2.0
Active branch: `kotlin-command-exec002`

## Current verified checkpoint

The last fully green Android CI checkpoint is build #4.

Verified on GitHub-hosted Ubuntu with JDK 17, Android API 36, Build Tools 36.0.0 and Gradle 8.11.1:

- exact source SHA reconstruction: PASS
- compiler remediation 2 integrity/application: PASS
- lint remediation 3 integrity/application: PASS
- JUnit remediation 4 integrity/application: PASS
- real `testDebugUnitTest` execution: PASS
- explicit non-NO-SOURCE test-result assertion: PASS
- Android lint: PASS
- debug APK assembly: PASS
- package identity: `com.nexarenew.aiconsole`
- versionCode: `21`
- versionName: `0.2.0-dev`
- zipalign verification: PASS
- apksigner verification: PASS
- verified APK artifact upload: PASS
- deterministic pure-domain regression: 64/64 assertions PASS

## Active remediation

Build #5 adds DataStore-backed application preferences required by the BuildSpec:

- remembered workspace
- remembered provider
- remembered model independently per provider
- provider switching restores that provider's remembered/default model
- current-chat provider switching from Settings
- AndroidX DataStore Preferences 1.2.1

The first build #5 attempt failed before compilation because the prior workflow compared the GitHub-stored patch against a stale external SHA-256 label. The patch now present on the branch is cryptographically pinned by its Git object identity and CI records its SHA-256 at runtime for the evidence artifact.

Pinned build5 Git blob:
`198b079a9e6ba1cb68095a52f6ff1fa3d997392f`

## Implemented source-level capabilities

Materially present in the current EXEC002 source line:

- Kotlin + Jetpack Compose native Android application
- four-primary-destination navigation model
- workspaces, chats and messages
- OpenRouter + Together providers with no automatic cross-provider fallback
- SSE streaming, stop/cancellation, retry foundations
- provider model cache/selection foundations
- Keystore-backed provider-key storage
- immutable offline outbox/request snapshots
- connectivity-triggered + WorkManager retry foundations
- deterministic context assembly
- model-aware context budgeting
- prompt library CRUD/search/import/export foundations
- protected skills and built-in skill provisioning
- workspace-isolated memory
- Full Voice SpeechRecognizer/TTS lifecycle foundations
- document SAF import/extraction-state foundations
- message/document attachment relationships
- scheduled task persistence/execution/history foundations
- notification permission/deep-link foundations
- transactional backup/restore foundations
- legacy ordinary-backup + prompt-library import foundations
- migration auditing
- usage events and usage-budget guardrails
- 6-digit PIN setup/unlock/change/relock foundations
- navigation state saving
- exact legacy migration format handling where source contracts were available

## Still open / not production-complete

Major remaining EXEC002 work includes:

- build #5 DataStore remediation verification
- deeper Room migration if retained as a BuildSpec requirement
- full PDF text extraction/preview/export workflow
- complete camera/gallery/multimodal attachment workflow
- richer provider model catalogue UX/error states
- complete usage/cost reporting UI
- stronger voice/audio-focus/device lifecycle acceptance
- scheduled-task recurrence/reboot/background acceptance
- backup/restore and legacy import fixture coverage
- Compose/navigation/permission instrumentation tests
- accessibility closure including TalkBack/dynamic text/reduced motion
- physical Android 16/API 36 install and functional acceptance
- live provider credential/model/streaming acceptance
- production signing/AAB/release provenance

## Release verdict

Production verdict remains **NO-GO** until the remaining locally actionable EXEC002 tasks are exhausted and all external/device/signing gates are either passed or explicitly recorded as external blockers.
