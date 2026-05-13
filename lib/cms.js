export async function getCMS() {
  try {
    const res = await fetch("/cms.json")
    if (!res.ok) throw new Error("CMS not found")
    return await res.json()
  } catch (error) {
    console.error("CMS load error:", error)
    return null
  }
}
