'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function refresh() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  startTransition(() => {
    router.refresh()
  })
}
