/**
 * Reads the `guest` query param (e.g. ?guest=Habibur%20Rahman)
 * and returns a safe, display-ready name.
 */
export function getGuestName(searchParams: { [key: string]: string | string[] | undefined }): string {
  const raw = searchParams?.guest;
  const value = Array.isArray(raw) ? raw[0] : raw;

  if (!value) return "Guest";

  const decoded = decodeURIComponent(value).trim();
  if (!decoded) return "Guest";

  // Basic sanitation: strip anything that isn't a letter, space, dot or hyphen
  const cleaned = decoded.replace(/[^\p{L}\p{M}\s.'-]/gu, "").trim();

  if (!cleaned) return "Guest";

  // Title-case each word
  return cleaned
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function buildInvitationLink(baseUrl: string, guestName: string): string {
  return `${baseUrl}/?guest=${encodeURIComponent(guestName)}`;
}
