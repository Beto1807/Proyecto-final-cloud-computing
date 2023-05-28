import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import Login from '@/components/login'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-6 pb-4 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent">
        Las palabras del día de 
      </h1> 
      <div className="flex items-center mb-10">
        <Image 
            src="/logo.svg"
            alt="MIKU Logo"
            width={300}
            //height={15}
          />
      </div>

      <div className="flex items-center w-screen">
      <Suspense fallback={<TablePlaceholder />}>
          {/* @ts-expect-error Async Server Component */}
          <Login />
        </Suspense>
        
        <Suspense fallback={<TablePlaceholder />}>
          {/* @ts-expect-error Async Server Component */}
          <Table />
        </Suspense>
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
