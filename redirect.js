// The ONE place the support portal's address is set.
// Change TARGET (and the meta-refresh fallback in index.html and 404.html) to move support elsewhere.
// Fallback if the Atlassian custom domain is ever unavailable: https://cloudscript.atlassian.net
var TARGET = "https://www.support.cloudscript.io";
var HOME_PATH = "/helpcenter/support/";
(function () {
  var p = window.location.pathname;
  var path = (p === "/" || p === "/index.html") ? HOME_PATH : p;
  window.location.replace(TARGET + path + window.location.search + window.location.hash);
})();
