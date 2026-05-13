"use client"

import { useEffect, useState } from "react"
import { getCMS } from "@/lib/cms"

export default function Home() {
  const [cms, setCms] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await getCMS()
      setCms(data)
    }
    load()
  }, [])

  if (!cms) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    )
  }

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold text-center">
        {cms.home.title}
      </h1>

      <p className="text-gray-400 mt-4 text-center max-w-xl">
        {cms.home.subtitle}
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 px-4 py-2 rounded">
          {cms.home.cta_primary}
        </button>

        <button className="border px-4 py-2 rounded">
          {cms.home.cta_secondary}
        </button>
      </div>

    </main>
  )
}
