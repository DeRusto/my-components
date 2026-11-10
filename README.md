# @derusto/my-components — starter sketch

DRAFT, prepared 2026-11-09. No fork created, nothing published.
Route decided 2026-11-11: standalone repo — this folder becomes its own
repo, no fork.

## The model (what Brandon confirmed Nov 9)

My own package, separate from WebAwesome. It lists WebAwesome as a normal
dependency and imports the free components alongside my own. WebAwesome stays
upstream's code, untouched, in its own package. My components live in my own
folder/package with my own `dw-` prefix. No rebase: updating WebAwesome is a
version bump in `package.json`, not a merge.

## Two ways to hold it

1. **Standalone repo (cleanest — the route I'd pick).** This folder becomes
   its own repo. No fork needed at all: `npm install @awesome.me/webawesome`
   like any other dependency, build my stuff on top.
2. **Own package inside the forked monorepo.** Clone this into
   `packages/my-components` in a fork of shoelace-style/webawesome and run
   `npm install` at the root. Same separation, but I carry the fork and its
   upstream merges. Only worth it if I want my package sitting inside their
   monorepo for some reason.

## What's here

- `package.json` — `@derusto/my-components`, private, deps pinned to the
  verified npm name `@awesome.me/webawesome` (verified 2026-11-10: current
  version 3.14.0, Lit 3.2.1; install: `npm install
  @awesome.me/webawesome`; import e.g.
  `@awesome.me/webawesome/dist/components/button/button.js` plus the theme
  CSS). Lit 3 for my own components.
- `src/dw-card.ts` — one example: a `dw-card` that wraps `wa-card`.
  Shows the pattern: import only the `wa-*` pieces I use, own prefix,
  theme via CSS variables.
- `src/index.ts` — barrel export.

## To try it

```bash
npm install
npm run build   # tsc → dist/
```

Then import `dist/index.js` from a site (Sweetwater, PuppyPad, whatever) or
publish the package to npm. `setBasePath()` / the `data-webawesome` attribute
is needed for asset resolution when self-hosting — see the WebAwesome install
docs. Pro components are NOT included: they're in private repos, forking
doesn't unlock them.

## Open decisions

- Route: standalone repo — decided 2026-11-11.
- Package scope/name: `@derusto/my-components` — confirmed 2026-11-11.
- Which components first, and whether the showcase/docs page lives here or
  in a separate static site (the CodeStitch Eleventy kit would fit that).
