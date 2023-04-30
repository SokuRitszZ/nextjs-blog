import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className={'text-7xl font-bold flex gap-5'}>
        <span>
          Learn 
        </span>
        <span className={'text-blue-600'}>
          Next.js!
        </span>
      </h1>
    </main>
  )
}
