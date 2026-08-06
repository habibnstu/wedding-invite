"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Users, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { weddingConfig } from "@/lib/config";

type RSVPRow = {
  name: string;
  phone: string;
  attendance: "Yes" | "No" | "Maybe";
  guests: number;
  message: string;
  submittedAt: string;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rows, setRows] = useState<RSVPRow[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin-authed") === "true") setAuthed(true);
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      sessionStorage.setItem("admin-authed", "true");
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  useEffect(() => {
    if (!authed || !weddingConfig.googleAppsScriptUrl) return;
    setLoading(true);
    fetch(`${weddingConfig.googleAppsScriptUrl}?type=rsvp`)
      .then((r) => r.json())
      .then((data: RSVPRow[]) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-cream-50 dark:bg-[#151110]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={login}
          className="glass rounded-3xl p-8 w-full max-w-sm text-center"
        >
          <Lock className="mx-auto w-8 h-8 text-gold-500 mb-3" />
          <h1 className="font-display text-xl text-gold-800 dark:text-gold-200 mb-4">Admin Access</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full rounded-xl border border-gold-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full py-2.5 rounded-full bg-gold-gradient text-white font-medium"
          >
            Login
          </button>
        </motion.form>
      </div>
    );
  }

  const confirmed = rows.filter((r) => r.attendance === "Yes").length;
  const declined = rows.filter((r) => r.attendance === "No").length;
  const maybe = rows.filter((r) => r.attendance === "Maybe").length;

  const stats = [
    { label: "Confirmed", value: confirmed, icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
    { label: "Declined", value: declined, icon: <XCircle className="w-5 h-5 text-red-500" /> },
    { label: "Maybe", value: maybe, icon: <HelpCircle className="w-5 h-5 text-gold-500" /> },
    { label: "Total Responses", value: rows.length, icon: <Users className="w-5 h-5 text-blush-400" /> },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-cream-50 dark:bg-[#151110]">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-2xl text-gold-800 dark:text-gold-200 mb-6">RSVP Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center">
              <div className="flex justify-center mb-2">{s.icon}</div>
              <p className="text-2xl font-display text-gold-800 dark:text-gold-200">{s.value}</p>
              <p className="text-xs text-gold-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gold-600 border-b border-gold-200/50">
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Attendance</th>
                <th className="p-3">Guests</th>
                <th className="p-3">Message</th>
                <th className="p-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gold-500">
                    Loading responses...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gold-500">
                    No RSVP responses yet.
                  </td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={i} className="border-b border-gold-100/40 dark:border-white/5">
                    <td className="p-3">{r.name}</td>
                    <td className="p-3">{r.phone}</td>
                    <td className="p-3">{r.attendance}</td>
                    <td className="p-3">{r.guests}</td>
                    <td className="p-3 max-w-xs truncate">{r.message}</td>
                    <td className="p-3 text-xs text-gold-500">
                      {new Date(r.submittedAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
