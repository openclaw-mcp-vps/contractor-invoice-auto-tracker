import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CommitBill — Auto-track billable hours from GitHub commits',
  description: 'Automatically generate invoices by tracking time spent on GitHub repos. Commit-based hour estimation, client project mapping, and professional invoices.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69adbe0d-8f31-418b-be59-a7fc5f2fb703"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
