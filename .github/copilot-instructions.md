# Copilot instructions for this repository

## Protected Winefunday social section

The Winefunday social/community block in `insight.js` is an approved UI and must be treated as **protected**.

Protected marker:
- `WINEFUNDAY_SOCIAL_V2`

Do not redesign, replace, remove, restyle, reorder, compress, or regenerate this block unless the user explicitly asks to change the Winefunday social/community section itself.

In particular, preserve these approved behaviors and layout rules:
- On mobile, the social block must keep generous inner spacing and must not sit tightly against its frame.
- Keep the mobile margins and padding defined in `WINEFUNDAY_SOCIAL_V2`.
- Keep the Polaroid compact and centered on mobile.
- The Polaroid must automatically show the current wine image when an image exists for the wine ID.
- Image lookup must continue to support `Weinbilder/<wine-id>.jpeg`, `.jpg`, and `.png` plus any explicit image field in the wine object.
- If the guest takes/selects a photo, that local photo may replace the bottle preview for the current browser session only.
- Do not remove the placeholder fallback when no wine image can be found.
- Do not alter the Instagram handle, CTA order, button labels, privacy text, or overall Winefunday color treatment unless explicitly requested.

## General editing rule

Make the smallest possible change for each request. Do not rewrite unrelated sections of `index.html`, `insight.js`, `wines.json`, filters, search, wine IDs, or image mappings as collateral cleanup.

Before changing a protected section, compare the requested task with these instructions. If the task does not explicitly require a protected-section change, leave it byte-for-byte unchanged where practical.
