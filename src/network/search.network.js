import { api } from "./api.network";

export default function makeSearch(params) {
  const searchParams = new URLSearchParams(params);
  
  return fetch(
    `${api.baseUrl}/search?${searchParams}` , {
    method: "GET"
  }).then(r => r.json());
}
