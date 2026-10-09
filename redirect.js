// The ONE place the support portal's address is set.
// Change TARGET (and the meta-refresh fallback in index.html and 404.html) to move support elsewhere.
// Temporary target while the Atlassian custom domain is re-created: https://cloudscript.atlassian.net
// Final target once www.support.cloudscript.io is active again: https://www.support.cloudscript.io
var TARGET = "https://cloudscript.atlassian.net";
var HOME_PATH = "/helpcenter/support/";
(function () {
  var p = window.location.pathname;
  var path = (p === "/" || p === "/index.html") ? HOME_PATH : p;
  window.location.replace(TARGET + path + window.location.search + window.location.hash);
})();
