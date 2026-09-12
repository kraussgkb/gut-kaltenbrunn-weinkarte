# Copilot instructions for this repository

## IMPORTANT: Shared repository ownership

This repository is edited by **both GitHub Copilot and ChatGPT/OpenAI**. Changes committed directly to `main` by ChatGPT/OpenAI are intentional production changes and are part of the current approved codebase.

**Never assume that code not created by Copilot is obsolete, temporary, generated incorrectly, or safe to revert.**

Before every edit:
1. Read the current version of every file you intend to modify from the repository.
2. Treat the current `main` branch as the source of truth.
3. Preserve all existing changes from other editors unless the user's current request explicitly asks to change that exact behavior.
4. Make a narrow patch against the current file. Do not reconstruct a file from an older Copilot context, cached version, previous prompt, or remembered implementation.
5. Never restore an older version of `index.html`, `analytics.js`, `insight.js`, `wines.json`, or another file merely because it differs from an earlier Copilot-generated version.
6. Before committing, review the diff for accidental deletions or reversions of unrelated current code.

If current repository code conflicts with an older instruction or previous Copilot implementation, **preserve the current repository code** unless the user explicitly requests otherwise.

## Protected ChatGPT/OpenAI production changes

The following markers identify intentional production patches. They must not be removed, renamed, duplicated, rewritten, bypassed, or functionally undone unless the user explicitly asks to change the feature represented by that marker:

- `WINEFUNDAY_REQUEST_STORM_FIX_V1`
- `WINEFUNDAY_SOCIAL_V1`
- `WINEFUNDAY_SOCIAL_IMAGE_FIX_V1`
- `WINEFUNDAY_SOCIAL_FRAME_FIX_V1`
- any future marker beginning with `WINEFUNDAY_` or `WF_` that already exists on the current `main` branch

Also protect all selectors beginning with:
- `.winefunday-social-*`

The request-storm fix is especially critical. Do not reintroduce empty `<img src="">` elements or broad automatic image-extension probing across all wine cards. Such behavior previously generated excessive requests and triggered hosting protection. Image fallback changes must preserve the current request-safe behavior.

## PROTECTED: Winefunday social/community section

The Winefunday social/community block in `insight.js`, together with its supporting patches in `analytics.js`, is approved UI and must be treated as protected unless the user explicitly asks to change this exact section.

The currently active marker is `WINEFUNDAY_SOCIAL_V1`. Also treat any future version of this marker as protected.

Do not redesign, replace, remove, restyle, reorder, compress, or regenerate the Winefunday social block unless the user's request explicitly concerns the social/community section. Preserve its frame, cream background, spacing, editorial layout, Polaroid/photo card, current-wine name, CTA actions, Instagram handle, responsive behavior, local photo preview and bottle-image preview.

When the user explicitly asks for a social-section change, modify only the requested aspect and preserve the rest of the approved component.

## STRICT change-isolation rule

For every request, modify **only** the explicitly requested feature. Do not perform collateral cleanup, refactoring, formatting, minification, regeneration, dependency replacement, or broad rewrites of unrelated code.

In particular:
- A request about `PASST BESONDERS ZU`, pairing icons, radar values, tasting text, wine data, images, filters, search, ratings, analytics, or another detail component does not authorize unrelated changes.
- Do not replace the whole `insight.js`, `analytics.js`, or `index.html` just to change one component if a local edit is possible.
- Do not overwrite `wines.json` from a stale/local copy. Preserve all current wine records and fields unless the user explicitly requests data changes.
- Preserve current wine IDs and the `Weinbilder/<wine-id>.*` naming convention.
- Preserve Vercel-compatible relative asset paths and current production routing.
- Before committing, verify that unrelated protected code remains unchanged.

## Rules for index.html

`index.html` is production-critical and may contain changes made by ChatGPT/OpenAI as well as Copilot. Always fetch/read the current version before editing it.

- Never regenerate `index.html` wholesale from an earlier prompt or template.
- Never replace the complete one-line/minified file merely to implement a small UI change if a targeted edit is possible.
- Preserve script loading for `analytics.js` and `insight.js` and existing runtime safeguards.
- Preserve the current wine loading, filters, detail routing, ratings and error handling unless the request explicitly targets them.

## Rules for analytics.js and insight.js

These files are first-class production source files, not disposable patches. Changes made there by ChatGPT/OpenAI are intentional.

- Read the current file before every modification.
- Preserve existing modules and marker blocks.
- Add or edit only the smallest relevant module.
- Never delete a module because similar functionality exists elsewhere without first confirming the current user request requires consolidation.

## Collaboration / commit discipline

Assume another editor may have committed since Copilot last saw the repository. Immediately before writing a file, work from its latest current content.

A good change should:
- touch the minimum number of files,
- have a descriptive commit message,
- preserve unrelated current behavior,
- avoid reverting commits from other editors,
- and leave the repository deployable on Vercel.

If a requested change would require removing or substantially rewriting a protected/current module, explain the conflict before doing so instead of silently reverting it.
