# ★ NexusCAD — Law Enforcement Dispatch System
### Setup & User Guide

---

## 📦 Files Included
```
index.html   — Main application (open this)
style.css    — Stylesheet (must be in same folder)
app.js       — Application logic (must be in same folder)
README.md    — This guide
```

---

## 🚀 Quick Start

1. **Download** all 3 files into the same folder.
2. **Open** `index.html` in any modern browser (Chrome, Firefox, Edge recommended).
3. On first launch you'll see the **Setup Wizard** — fill in:
   - Your **Department Name**
   - Your **Discord Webhook URL** (see below)
   - A new **Admin Password**
4. Log in with:
   - Username: `admin`
   - Password: `nexus1234` (or what you set in setup)

> ✅ No server required. Works 100% offline. Data is saved in your browser's localStorage.

---

## 🌐 Hosting on Google Sites

Since Google Sites doesn't allow raw HTML uploads directly, use one of these methods:

### Method A — GitHub Pages (Recommended, Free)
1. Create a free account at https://github.com
2. Create a new **public repository**
3. Upload all 3 files (`index.html`, `style.css`, `app.js`)
4. Go to **Settings → Pages → Source: main branch**
5. Your CAD will be live at: `https://yourusername.github.io/reponame`
6. In Google Sites, embed it via **Insert → Embed → URL**

### Method B — Direct Browser Use
Just open `index.html` directly in Chrome/Edge. No hosting needed.

### Method C — Any Web Host
Upload all 3 files to any web host (Netlify, Vercel, etc.) and share the URL.

---

## 🔔 Discord Webhook Setup

1. Open your Discord server
2. Go to the channel you want logs sent to
3. Click ⚙ **Edit Channel → Integrations → Webhooks**
4. Click **New Webhook**, name it `NexusCAD`, copy the URL
5. In NexusCAD → **Settings → Discord Webhook**, paste the URL
6. Click **Test Webhook** to verify it works

### Log Levels (Settings)
| Level | What gets logged |
|---|---|
| All Events | Everything (calls, units, warrants, BOLOs, logins) |
| Calls Only | Only dispatch calls |
| Critical Only | Only calls, warrants, and BOLOs |

---

## 👤 Managing Officer Accounts

### Default Admin
- Username: `admin`
- Password: `nexus1234` ← **Change this immediately in Settings!**

### Adding Officers
1. Go to **Settings → Manage Officers**
2. Enter an Officer ID (e.g. `SGT-114`) and password
3. Click **Add Officer**
4. The officer can now log in with those credentials

### Changing Admin Password
Settings → Change Password

---

## 🖥 Features Overview

| Module | What it does |
|---|---|
| **Dashboard** | Live stats, recent calls, units on duty, active alerts |
| **Active Calls** | Create and manage dispatch calls with priority levels |
| **Units** | Sign on/off officers, update status in real-time |
| **Civilians** | Search/add civilian records with flags and license status |
| **Vehicles** | Plate lookup, registration and insurance status |
| **Warrants** | Issue and clear arrest/search/bench warrants |
| **BOLOs** | Issue Be-On-The-Lookout alerts, mark armed/dangerous |
| **10-Codes** | Full searchable reference of police radio codes |
| **Penal Codes** | California-style penal code reference (felony/misdemeanor) |
| **Logs** | Full in-session activity log |
| **Settings** | Department name, webhook, passwords, officer accounts |

---

## 📡 Call Priority Levels
| Priority | Color | Use For |
|---|---|---|
| P1 — CRITICAL | 🔴 Red | Active shooter, officer down, life threat |
| P2 — HIGH | 🟡 Amber | Robbery, assault, pursuit, weapons |
| P3 — MEDIUM | 🔵 Blue | Disturbance, theft, suspicious activity |
| P4 — LOW | 🟢 Green | Welfare check, parking, non-urgent |

---

## 📋 10-Status Codes
| Code | Meaning |
|---|---|
| 10-8 | Available / In Service |
| 10-6 | Busy |
| 10-7 | Off Duty |
| 10-4 | Acknowledged |
| 10-97 | Arrived on Scene |
| 10-15 | Prisoner in Custody |

---

## 🔒 Data & Privacy
- All data is stored **locally in your browser** (localStorage)
- Nothing is sent to any server except your **Discord webhook**
- Clearing browser data will erase CAD records (export first if needed)
- Each browser/device has its own separate data

---

## ⚠ Notes
- Use **Chrome or Edge** for best compatibility
- If data disappears, check that cookies/storage aren't being cleared
- For a shared department, host on GitHub Pages so everyone uses the same URL
- Each officer logs in separately; their sessions don't sync live (use Discord for real-time coordination)

---

## 🛠 Customization
Open `app.js` to customize:
- `TEN_CODES` array — add/edit 10-codes
- `PENAL_CODES` array — add your server's penal codes
- `state.officers` — add pre-made officer accounts

---

*NexusCAD — Built for FiveM/RP communities and training departments.*
*Version 1.0 | No license required — use freely.*
