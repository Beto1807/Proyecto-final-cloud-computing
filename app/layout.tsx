import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Proyecto final',
  description:
    'Una web que te dice la palabra del día de Hatsune Miku.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
