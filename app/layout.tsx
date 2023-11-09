import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathan | Portfolio',
  description: 'Nathan is a front-end developer and designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} pt-28 sm:pt-36 bg-gray-50 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#DBD7FE] -z-10 absolute top-[1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:-[-5rem]'></div>
        <Header />
        {children}
        </body>
    </html>
  )
}
