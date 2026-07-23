import Link from "next/link";
import type { Social } from "./social-icons";

export default function SocialIcon({ label, href, Icon }: Social) {
    return (
        <Link
            href={href}
            target="_blank"
            aria-label={label}
            title={label}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink/70 transition-colors hover:border-accent/50 hover:text-accent"
        >
            <Icon className="h-5 w-5" />
        </Link>
    );
}
