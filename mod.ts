// From Python
export function html(string: string, quotes?: boolean) {
  string = string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
    />/g,
    "&gt;",
  );
  if (quotes) {
    string = string.replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  return string;
}

// Should work for both normal Markdown and Telegram's MarkdownV2.
export function md(string: string) {
  for (
    const [exp, repl] of [
      [/_/g, "\\_"],
      [/\*/g, "\\*"],
      [/\[/g, "\\["],
      [/\]/g, "\\]"],
      [/\(/g, "\\("],
      [/\)/g, "\\)"],
      [/~/g, "\\~"],
      [/`/g, "\\`"],
      [/>/g, "\\>"],
      [/#/g, "\\#"],
      [/\+/g, "\\+"],
      [/-/g, "\\-"],
      [/=/g, "\\="],
      [/\|/g, "\\|"],
      [/{/g, "\\{"],
      [/}/g, "\\}"],
      [/\./g, "\\."],
      [/!/, "\\!"],
    ] // source: https://core.telegram.org/bots/api#markdownv2-style
  ) {
    string = string.replace(exp, repl as string);
  }
  return string;
}
