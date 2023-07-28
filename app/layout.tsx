import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Relate Connect',
  description: 'Made with love by the Relate Connect Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className=" flex items-center justify-between -mt-6 space-x-1 ">

          <Link href="/">
            <Image className="h-40 " src='/relate_connect_logo.png' alt='' width={250} height={200} />
          </Link>
        
        </div>
        {children}
      </body>
    </html>
  )
}
