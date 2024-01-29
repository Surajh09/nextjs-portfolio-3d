import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Home - Portfolio",
  description: 'Suraj Hemnani Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
