import './globals.css'
import { Homemade_Apple, Inter, Fugaz_One } from 'next/font/google'

// Fonts
const homemadeApple = Homemade_Apple({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'], weight: '400' })
const fugazOne = Fugaz_One({ subsets: ['latin'], weight: '400' })

// Metadata
export const metadata = {
  title: "sao's portfolio ⋆˙⟡",
  description: 'my personal portfolio',
}

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}