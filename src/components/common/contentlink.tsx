import Link from "next/link";

export default function ContentLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      className="text-accent link-glow link-glow-active hover:text-accent-hover cursor-pointer"
      target="_blank"
      href={link}
    >
      {text}
    </Link>
  );
}
