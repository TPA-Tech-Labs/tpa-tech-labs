// Minimal markdown → HTML renderer for the blog's trusted, in-repo content.
// Covers exactly the syntax the posts use: headings, paragraphs, bold, inline
// code, links, ordered/unordered lists, multi-line blockquotes, fenced code
// blocks (with language label), pipe tables, and horizontal rules.
// Output uses .post-* classes styled in globals.css.

function esc(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string): string {
    let out = esc(s);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
    return out;
}

const TABLE_SEPARATOR = /^[|\s:-]+$/;

export function renderMarkdown(md: string): string {
    const lines = md.split("\n");
    const out: string[] = [];
    let i = 0;
    let droppedLeadingH1 = false;

    while (i < lines.length) {
        const t = lines[i].trim();

        // Fenced code block — consume raw lines until the closing fence.
        if (t.startsWith("```")) {
            const lang = t.slice(3).trim();
            const buf: string[] = [];
            i++;
            while (i < lines.length && !lines[i].trim().startsWith("```")) {
                buf.push(lines[i]);
                i++;
            }
            i++; // skip closing fence
            const label = lang ? ` data-lang="${esc(lang)}"` : "";
            out.push(
                `<div class="post-code"${label}><pre><code>${esc(buf.join("\n"))}</code></pre></div>`
            );
            continue;
        }

        // Pipe table — consecutive lines starting with "|".
        if (t.startsWith("|")) {
            const rows: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                rows.push(lines[i].trim());
                i++;
            }
            const cells = (r: string) =>
                r.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => inline(c.trim()));
            const bodyRows = rows.filter((r, idx) => !(idx === 1 && TABLE_SEPARATOR.test(r)));
            const [head, ...body] = bodyRows;
            out.push(
                '<div class="post-table"><table><thead><tr>' +
                cells(head).map((c) => `<th>${c}</th>`).join("") +
                "</tr></thead><tbody>" +
                body
                    .map((r) => "<tr>" + cells(r).map((c) => `<td>${c}</td>`).join("") + "</tr>")
                    .join("") +
                "</tbody></table></div>"
            );
            continue;
        }

        // Unordered list.
        if (t.startsWith("- ")) {
            const items: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("- ")) {
                items.push(lines[i].trim().slice(2));
                i++;
            }
            out.push("<ul>" + items.map((x) => `<li>${inline(x)}</li>`).join("") + "</ul>");
            continue;
        }

        // Ordered list.
        if (/^\d+\.\s/.test(t)) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
                items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
                i++;
            }
            out.push("<ol>" + items.map((x) => `<li>${inline(x)}</li>`).join("") + "</ol>");
            continue;
        }

        // Blockquote — group consecutive "> " lines.
        if (t.startsWith("> ") || t === ">") {
            const quote: string[] = [];
            while (i < lines.length && (lines[i].trim().startsWith("> ") || lines[i].trim() === ">")) {
                quote.push(lines[i].trim().replace(/^>\s?/, ""));
                i++;
            }
            out.push(`<blockquote>${quote.map(inline).join("<br/>")}</blockquote>`);
            continue;
        }

        // Headings. The content's leading H1 duplicates the page title — drop it;
        // demote any later H1 to H2 so the page keeps a single <h1>.
        if (t.startsWith("# ")) {
            if (!droppedLeadingH1) {
                droppedLeadingH1 = true;
            } else {
                out.push(`<h2>${inline(t.slice(2))}</h2>`);
            }
            i++;
            continue;
        }
        if (t.startsWith("## ")) {
            out.push(`<h2>${inline(t.slice(3))}</h2>`);
            i++;
            continue;
        }
        if (t.startsWith("### ")) {
            out.push(`<h3>${inline(t.slice(4))}</h3>`);
            i++;
            continue;
        }

        // Horizontal rule (Medium-style section break).
        if (t === "---") {
            out.push("<hr/>");
            i++;
            continue;
        }

        // Blank line — block boundaries are already explicit, nothing to emit.
        if (t === "") {
            i++;
            continue;
        }

        // Paragraph.
        out.push(`<p>${inline(t)}</p>`);
        i++;
    }

    return out.join("\n");
}
