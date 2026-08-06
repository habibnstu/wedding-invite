"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FileImage, FileText } from "lucide-react";

export default function DownloadInvitation({
  guestName = "",
}: {
  guestName?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<"png" | "pdf" | null>(null);

  const capture = async () => {
    if (!cardRef.current) return null;

    return await html2canvas(cardRef.current, {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
    });
  };

  const downloadPNG = async () => {
    setBusy("png");

    try {
      const canvas = await capture();

      if (!canvas) return;

      const link = document.createElement("a");

      link.download = "Wedding_Invitation.png";
      link.href = canvas.toDataURL("image/png");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setBusy(null);
    }
  };

  const downloadPDF = async () => {
    setBusy("pdf");

    try {
      const canvas = await capture();

      if (!canvas) return;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5",
      });

      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0, 148, 210);

      pdf.save("Wedding_Invitation.pdf");
    } finally {
      setBusy(null);
    }
  };

  return (
    <section className="py-20 px-4 bg-[#f7f3ec]">
      <div className="max-w-xl mx-auto">

        {/* Invitation Preview */}
        <div
          ref={cardRef}
          className="relative mx-auto shadow-2xl rounded-xl overflow-hidden bg-white"
          style={{
            width: "420px",
            height: "594px",
          }}
        >
          <img
            src="/images/InvitationImage.png"
            alt="Wedding Invitation"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />

          {guestName && (
            <div
              className="absolute left-0 right-0 bottom-8 text-center"
              style={{
                color: "#6d4c1d",
                fontSize: "18px",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Dear {guestName}
            </div>
          )}
        </div>

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={downloadPNG}
            disabled={busy !== null}
            className="flex items-center gap-2 rounded-full bg-yellow-700 text-white px-6 py-3 disabled:opacity-50"
          >
            <FileImage size={18} />
            {busy === "png" ? "Generating PNG..." : "Download PNG"}
          </button>

          <button
            onClick={downloadPDF}
            disabled={busy !== null}
            className="flex items-center gap-2 rounded-full border border-yellow-700 text-yellow-700 px-6 py-3 disabled:opacity-50"
          >
            <FileText size={18} />
            {busy === "pdf" ? "Generating PDF..." : "Download PDF"}
          </button>

        </div>

      </div>
    </section>
  );
}