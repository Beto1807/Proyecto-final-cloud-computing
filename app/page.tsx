import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Palabra del día de:
        <Image width="15%" height="15%"
            src="/logo.svg"
            alt="MIKU Logo"
          />
      </h1>
      <div className="flex justify-center">
      <Image 
            src="/miku.png"
            alt="Miku Sign"
          />
        </div>
      <Suspense fallback={<TablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>

      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
      <Link
        href="https://vercel.com/templates/next.js/postgres-starter"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
        >
          <p>Iniciar sesión</p>
          <ExpandingArrow />
      </Link>
      </div>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href=""
        className="flex items-center space-x-2"
        >
          <Image
            src="/samos.svg"
            alt="SAMOS Logo"
            width={50}
            height={50}
            priority
          />

          <h2 className="text-xl font-semibold">SAMOS.</h2>
        </Link>
        
        <Link
          href="https://github.com/Beto1807/Proyecto-final-cloud-computing"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          /> 
            
          <p className="font-light">Código</p>
        </Link>
      </div>
    </main>
  )
}
