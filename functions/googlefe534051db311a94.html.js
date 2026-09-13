// Serves the Google Search Console HTML-file verification at the exact,
// literal URL Google checks. Cloudflare Pages' static asset serving
// auto-redirects "/foo.html" -> "/foo" (308), which breaks Google's
// verifier (it does not treat a redirect as a valid response here).
// A Pages Function route is matched before static asset resolution, so
// this bypasses that redirect and returns the file content directly.
export function onRequestGet() {
  return new Response('google-site-verification: googlefe534051db311a94.html\n', {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
