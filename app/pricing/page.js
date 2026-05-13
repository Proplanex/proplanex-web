"use client"

import { useEffect, useState } from "react"
import { getCMS } from "@/lib/cms"

export default function Pricing() {
  const [cms, setCms] = useState(null)

  useEffect(() => {
    getCMS().then(setCms)
  }, [])

  if (!cms) return <div>Loading...</div>

  return (
    <div className="p-10 bg-black text-white min-h-screen">

      <h1 className="text-3xl font-bold mb-8">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded">
          <h2>{cms.pricing.basic.name}</h2>
          <p className="text-2xl">{cms.pricing.basic.price}</p>
          <p>{cms.pricing.basic.desc}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded border border-blue-500">
          <h2>{cms.pricing.pro.name}</h2>
          <p className="text-2xl">{cms.pricing.pro.price}</p>
          <p>{cms.pricing.pro.desc}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded">
          <h2>{cms.pricing.enterprise.name}</h2>
          <p className="text-2xl">{cms.pricing.enterprise.price}</p>
          <p>{cms.pricing.enterprise.desc}</p>
        </div>

      </div>

    </div>
  )
}
