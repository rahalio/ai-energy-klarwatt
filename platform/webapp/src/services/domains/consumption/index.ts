/**
 * Consumption domain webapp service barrel (baseline stub).
 * Generated index referenced missing service/facade modules; replaced with a
 * thin fetch client until handwritten clients are filled in.
 */

const API_BASE = (import.meta as any).env?.VITE_API_BASE ?? "";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  if (!headers.has("X-API-Key")) {
    headers.set("X-API-Key", (import.meta as any).env?.VITE_API_KEY ?? "klarwatt_demo_local_dev_key");
  }
  if (init?.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${path}: ${text.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

export const consumptionService = {
  fetch: apiFetch,
};

export const consumptionFacade = consumptionService;
