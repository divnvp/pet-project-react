import { api } from "./api.network";

export default async function makeSearch(params) {
  const searchParams = new URLSearchParams(params);
  
  const r = await fetch(
    `${api.baseUrl}/search?${searchParams}`, {
    method: "GET"
  });
  
  return await r.json();
}
