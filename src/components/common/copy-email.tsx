"use client";

import { useState } from "react";
import { mono } from "@/app/fonts";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Clipboard unavailable (e.g. insecure context) — the mailto button still works.
        }
    };

    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="flex flex-1 items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3">
                <span className={`${mono.className} truncate text-sm md:text-base text-ink`}>{email}</span>
                <button
                    onClick={copy}
                    className={`${mono.className} shrink-0 rounded-md border border-white/20 px-2.5 py-1 text-xs text-ink/80 transition-colors hover:border-accent hover:text-accent`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <a
                href={`mailto:${email}`}
                className={`${mono.className} inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-[#1B2A2B] transition-colors hover:bg-accent-hover`}
            >
                Send me an email →
            </a>
        </div>
    );
}
