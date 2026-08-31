# Kotlin Command — Roadmap Status

Updated: 31 August 2026

Status meanings: PASS = executed and verified for the stated gate; PARTIAL = implementation exists but required acceptance is incomplete; OPEN = not yet completed; EXTERNAL = requires credentials/device/signing or another external condition.

## Phase 0 — Baseline and reproducible build
PARTIAL

Completed: Kotlin Command identity baseline, API 36 target, Gradle 8.11.1 GitHub build route, JDK 17 hosted build, source checksum reconstruction, real JUnit execution, lint, debug APK generation, identity/alignment/signature checks.

Open: committed canonical Gradle wrapper JAR/source-native wrapper closure and final release identity/version decision.

## Phase 1 — Architecture and data
PARTIAL

Completed/materially present: normalized SQLite schema through later EXEC002 migrations, repository/domain layers, Keystore secrets, migration audit, DataStore remediation in active verification.

Open: decide/complete Room migration if retained as a hard BuildSpec requirement; migration fixture coverage.

## Phase 2 — Native shell/navigation/UX
PARTIAL

Completed/materially present: Compose native shell, four-primary-destination navigation model, Navigation Compose graph/state saving, edge-to-edge foundation.

Open: tablet/foldable layouts, complete IME/focus/accessibility/reduced-motion closure.

## Phase 3 — Chats/providers/streaming
PARTIAL

Completed/materially present: OpenRouter + Together isolation, SSE parser, streaming, stop/cancellation, provider error foundations, model cache/selection foundations.

Open: build #5 provider preference verification, richer model UX, retry/regenerate closure, live credential/provider acceptance.

## Phase 4 — Offline/context/usage
PARTIAL

Completed/materially present: immutable outbox snapshots, idempotency identity, WorkManager/connectivity retry foundations, deterministic/model-aware context assembly, usage events and budget guardrails.

Open: full retry/reconnect acceptance, complete token/cost accounting and reporting UI.

## Phase 5 — Full Voice
PARTIAL

Completed/materially present: SpeechRecognizer/TTS state machine, interruption/stop flow, hands-free loop foundations, partial-result/audio-focus improvements.

Open: physical-device microphone/TTS/barge-in lifecycle acceptance and accessibility validation.

## Phase 6 — Prompts/skills/memory
PARTIAL

Completed/materially present: CRUD/search, protected items, built-in skills, prompt transfer format, workspace memory and deterministic context injection.

Open: deeper import/conflict UX, memory limit/search refinements and runtime/instrumentation acceptance.

## Phase 7 — Documents/PDFs/attachments
PARTIAL

Completed/materially present: SAF import metadata, extraction state/cancellation/error foundations, persisted document-message relationships, open/share foundations.

Open: full PDF text extraction/preview/export, camera/gallery/multimodal workflow and large/corrupt file acceptance.

## Phase 8 — Scheduled tasks/notifications
PARTIAL

Completed/materially present: persisted AI jobs, task edit/list/enable-disable/delete foundations, run history, notification permission/deep-link foundations.

Open: recurrence editor/semantics, reboot/update reconciliation, Doze/background acceptance.

## Phase 9 — Backup/restore/legacy import
PARTIAL

Completed/materially present: versioned backup foundations, transactional restore with rollback/readback, exact known legacy ordinary-backup and prompt-library import contracts, migration audit records.

Open: comprehensive fixture suite, file inclusion policy closure, physical-device backup/restore and legacy roundtrip acceptance.

## Phase 10 — PIN/privacy/accessibility
PARTIAL

Completed/materially present: 6-digit PIN setup/unlock/change, throttling/relock foundations, backup exclusion rules, no-cleartext setting, Keystore provider key storage.

Open: PIN recovery policy, complete logging/URI security audit, TalkBack/dynamic text/reduced motion/keyboard acceptance.

## Phase 11 — Production build/sign/device acceptance
PARTIAL

PASS for debug CI: dependency resolution, compilation, real JUnit execution, lint, debug APK, package/version verification, zipalign, debug signature verification.

EXTERNAL/OPEN: production keystore/release APK/AAB, physical Android 16 install/launch/upgrade, live provider/voice/files/background/accessibility acceptance.

## Phase 12 — Release/handover
OPEN

Blocked by remaining EXEC002 local work plus external production/device acceptance gates.

## Current release verdict

NO-GO for production release.
