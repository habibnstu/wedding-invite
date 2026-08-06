"use client";

import { useState } from "react";
import { Facebook, Send, Link2, Share2, Check } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function SocialShare({ guestName }: { guestName: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${weddingConfig.socialShare.url}/?guest=${encodeURIComponent(guestName)}`;
  const shareText = weddingConfig.socialShare.title;

  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      icon: <Send className="w-4 h-4" />,
      color: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300",
    },
    {
      label: "Messenger",
      href: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=0&redirect_uri=${encodeURIComponent(shareUrl)}`,
      icon: <Send className="w-4 h-4" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: <Facebook className="w-4 h-4" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    },
    {
      label: "Telegram",
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      icon: <Send className="w-4 h-4" />,
      color: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: shareText, url: shareUrl });
    } else {
      copyLink();
    }
  };

  return (
    <section id="share" className="py-16 px-4 text-center">
      <h3 className="font-display text-2xl text-gold-800 dark:text-gold-200 mb-6">Share This Invitation</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${l.color}`}
          >
            {l.icon} {l.label}
          </a>
        ))}
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gold-100 text-gold-700 dark:bg-white/10 dark:text-gold-200"
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
        <button
          onClick={nativeShare}
          className="sm:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blush-100 text-blush-400"
        >
          <Share2 className="w-4 h-4" /> Share
        </button>
      </div>
    </section>
  );
}
