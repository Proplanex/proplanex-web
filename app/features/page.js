"use client"

import { useEffect, useState } from "react"
import { getCMS } from "@/lib/cms"

export default function Features() {
  const [cms, setCms] = useState(null)

  useEffect(() => {
    getCMS().then(setCms)
  }, [])

  if (!cms) return <div>Loading...</div>

  return (
    <div className="p-10 bg-black text-white min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Features
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {cms.features.map((f, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded">
            {f}
          </div>
        ))}

      </div>

    </div>
  )
}
