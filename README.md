# Taneet Marine Platform - Official Website

The official product landing and showcase website for **Taneet**, the next-generation maritime fleet and crew management platform.

![Taneet](assets/images/taneet-logo.png)

## Overview

Taneet is built for commercial vessel operators, technical managers, crewing agencies, and ship owners. This website showcases the platform's core capabilities:

- **Interactive Product Tour & Simulator**: Real-time fleet simulator with AIS tracking, vessel technical particulars, crew STCW compliance matrices, and class survey timelines.
- **Dynamic Fleet ROI Calculator**: Live calculations of administrative hours saved, PSC detention risk mitigation, and annual operational cost reduction.
- **Core Maritime Capabilities**: Detailed breakdowns of STCW compliance, telemetry, planned maintenance (PMS), owner portals, and offline shipboard sync.
- **Interactive Consultation Booking**: Seamless multi-tier demo request modal with real-time feedback.

## Tech Stack

- **HTML5** semantic structure
- **Tailwind CSS** (dark marine aesthetic with deep slate blues and cyan/teal accents)
- **Vanilla JavaScript** for high-performance, dependency-free interactivity
- **Lucide Icons** for crisp modern iconography
- **Plus Jakarta Sans & JetBrains Mono** typography

## Quick Start / Local Preview

You can open `index.html` directly in any web browser, or serve it using any local HTTP server:

```bash
# Using Python
python -m http.server 3000

# Or using Node / npx
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This website is a zero-build static site ready for instant deployment to:
- **GitHub Pages** (Settings -> Pages -> Branch: `main`, folder: `/ (root)`)
- **Vercel** (`vercel --prod`)
- **Netlify**
