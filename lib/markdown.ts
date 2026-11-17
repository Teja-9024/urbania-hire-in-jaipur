/**
 * Tiny markdown-to-HTML converter for the blog content in `blogData.ts`.
 *
 * Supports headings (#–###), paragraphs, bold/italic, links, bullet and
 * numbered lists, blockquotes and pipe tables. All text is HTML-escaped first,
 * and links are limited to site-relative paths and http(s) URLs.
 * Output is unstyled semantic HTML; the article wrapper's `prose` classes style it.
 */

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inline(raw: string): string {
  return escapeHtml(raw)
    .replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g, (_m, text: string, href: string) => {
      const external = href.startsWith("http");
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}

const isTableRow = (line: string) => line.trim().startsWith("|");
const isTableDivider = (line: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
const splitCells = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const at = (n: number) => lines[n] ?? "";
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = at(i).trim();

    if (!trimmed) {
      i++;
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(trimmed);
    if (heading) {
      // Page already has an <h1>; demote "#" so the outline stays valid.
      const level = Math.max((heading[1] ?? "").length, 2);
      out.push(`<h${level}>${inline(heading[2] ?? "")}</h${level}>`);
      i++;
      continue;
    }

    if (isTableRow(trimmed)) {
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(at(i))) {
        if (!isTableDivider(at(i))) rows.push(splitCells(at(i)));
        i++;
      }
      const [head = [], ...body] = rows;
      out.push(
        `<div class="overflow-x-auto"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead>` +
          `<tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
      );
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && at(i).trim().startsWith(">")) {
        quote.push(at(i).trim().replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    const ordered = /^\d+\.\s+/.test(trimmed);
    if (ordered || /^[-*]\s+/.test(trimmed)) {
      const itemPattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
      const items: string[] = [];
      while (i < lines.length && itemPattern.test(at(i).trim())) {
        items.push(at(i).trim().replace(itemPattern, ""));
        i++;
      }
      const tag = ordered ? "ol" : "ul";
      out.push(`<${tag}>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</${tag}>`);
      continue;
    }

    const paragraph: string[] = [];
    while (
      i < lines.length &&
      at(i).trim() &&
      !/^(#{1,3}\s|>|[-*]\s|\d+\.\s)/.test(at(i).trim()) &&
      !isTableRow(at(i))
    ) {
      paragraph.push(at(i).trim());
      i++;
    }
    out.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }

  return out.join("\n");
}
