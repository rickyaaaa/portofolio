import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Appends a content hash to a file served from public/.
 *
 * Agenko's CSS and JS filenames carry no hash of their own, and Hostinger puts
 * a CDN in front of the site: with a long Cache-Control those edges kept
 * serving a stale stylesheet for hours after a deploy, so a change could ship
 * and still not be what visitors saw. HTML is never cached (the CDN reports it
 * DYNAMIC), so putting the hash in the URL is enough - fresh markup points at a
 * URL no edge has seen, and the new file is fetched immediately.
 *
 * It also means the files can be cached for a year rather than a day, since a
 * changed file is a changed URL. See public/.htaccess.
 *
 * Build-time only. Reading is cached because the layout asks for the same
 * twenty or so files on every one of the nine pages.
 */
const hashes = new Map<string, string>();

export function asset(path: string): string {
  let hash = hashes.get(path);

  if (hash === undefined) {
    // process.cwd() is the project root during both `astro dev` and `astro build`.
    const file = join(process.cwd(), 'public', path);
    hash = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 8);
    hashes.set(path, hash);
  }

  return `${path}?v=${hash}`;
}
