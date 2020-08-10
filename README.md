# api.recon.dev Subdomain Extractor

A simple Node.js script that extracts subdomains for a specified domain from https://api.recon.dev API by @nahamsec & @Static-Flow.

## How to use

```
npm install
node main.js github.com
```

## Output

Currently the output is only in an array as it best suites my needs to integrate with my recon workflow.

```
[
  '*.github.com',
  '*.registry.github.com',
  'api.github.com',
  'classroom.github.com',
  'import2.github.com',
  'importer2.github.com',
  'porter2.github.com',
  'registry.github.com',
  'render-lab.github.com',
  'render.github.com',
  'uploads.github.com',
  'www.github.com'
]
```