# support-redirect

Serves support.cloudscript.io from GitHub Pages and forwards visitors to the Cloudscript help centre,
so the published support address never depends on an Atlassian plan or custom-domain setting.

- Root (`/`) goes to the help centre home (`/helpcenter/support/`).
- Any other path is preserved (404.html), so old deep links such as
  `support.cloudscript.io/helpcenter/support/article/123` keep working.
- To move support elsewhere (e.g. the 2027 plan change), edit `TARGET` in `redirect.js`
  and the two fallback URLs in `index.html` and `404.html`, then push.
