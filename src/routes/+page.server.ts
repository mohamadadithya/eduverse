import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ fetch }) => {
  const resourceUrl = `https://restcountries.com/v2/all`;
  const res = await fetch(resourceUrl);

  if (res.ok) {
    return {
      status: res.status,
      countries: await res.json()
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load url`)
  };
}