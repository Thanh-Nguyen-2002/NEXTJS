import { baseURL } from "./config";

function buildQuery(params: Record<string, any> = {}): string {
    const search = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
        search.append(key, String(value));
        }
    });

    return search.toString() ? `?${search.toString()}` : "";
}

interface RequestOptions extends RequestInit {
    params?: Record<string, any>;
}

export async function apiFetch({
    url,
    params,
    ...options
}: RequestOptions & { url: string }) {
    const query = buildQuery(params);
    const res = await fetch(`${baseURL}${url}${query}`, {
        cache: "no-store",
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function apiCached({
    url,
    params,
    revalidate = 60,
    ...options
}: RequestOptions & { url: string; revalidate?: number }) {
    const query = buildQuery(params);
    const res = await fetch(`${baseURL}${url}${query}`, {
        next: { revalidate },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}
