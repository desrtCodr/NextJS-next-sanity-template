import type { Metadata } from 'next'
import { Saira_Condensed, Gothic_A1 } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const sairaCondensed = Saira_Condensed({
  variable: '--font-saira-condensed',
  subsets: ['latin'],
  weight: ['400'],
})

const gothicA1 = Gothic_A1({
  variable: '--font-gothic-a1',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Next JS Sanity Template',
  description: 'A Sandbox for Next JS with Sanity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${sairaCondensed.variable} ${gothicA1.variable} ${sairaCondensed.className} ${gothicA1.className} antialiased`}
      >
        <Header />
        <div className="flex">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
