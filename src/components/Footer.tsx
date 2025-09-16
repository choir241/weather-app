import { labels } from "../static/labels";

export default function Footer() {
  return (
    <footer className="attribution">
      {labels.footer.challengeBy}{" "}
      <a href="https://www.frontendmentor.io?ref=challenge">
        {labels.footer.link}
      </a>
      . {labels.footer.codedBy}{" "}
      <a href="https://github.com/choir241">{labels.footer.name}</a>.
    </footer>
  );
}
