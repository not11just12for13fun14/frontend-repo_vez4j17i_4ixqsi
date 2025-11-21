export const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed: ${res.status}`)
  }
  try {
    return await res.json()
  } catch (e) {
    return null
  }
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
}

export function getOrCreateDemoUser() {
  const key = 'driveshare_user'
  let u = localStorage.getItem(key)
  if (u) return JSON.parse(u)
  const id = crypto.randomUUID()
  const user = { id, name: 'Demo Investor', email: `${id.slice(0,6)}@demo.local`, role: 'investor' }
  localStorage.setItem(key, JSON.stringify(user))
  return user
}
