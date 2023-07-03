import './globals.css'
import { Ubuntu } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'Marketplace Cars',
  description: 'Selling best cars around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
