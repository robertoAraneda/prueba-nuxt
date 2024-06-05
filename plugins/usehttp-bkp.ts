import type { UseFetchOptions } from "#app";
import { defu } from "defu";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      useHttp: <T> (url: string, options: UseFetchOptions<T> = {}) => {
        const { $localStorage } = useNuxtApp()
        const accessToken = $localStorage.getItem("access_token")

        const defaults: UseFetchOptions<T> = {
          baseURL: "https://jsonplaceholder.typicode.com",
          key: url,
          headers: accessToken
            ? { Authorization: `Bearer ${accessToken}` }
            : {},
          onResponse: async ({ response, options }) => {
            if (response.status === 401) {
              try {
                const newToken = await refreshToken();

                options.headers = { Authorization: `Bearer ${newToken}` };
                useFetch(url, options as UseFetchOptions<T>);
              } catch (error) {
                console.error("Token refresh failed:", error);
              }
            }
          },
        };

        const params = defu(options, defaults);

        return useFetch(url, params);
      }
    }
  }
})

async function refreshToken() {
  const refreshToken = useCookie("refreshToken");

  const { data, status } = await useFetch<{ access: string }>(
    "http://127.0.0.1:8000/api/token/refresh/",
    {
      method: "POST",
      body: { refresh: refreshToken.value },
    }
  );

  if (status.value === "success") {
    return data.value?.access;
  } else {
    throw new Error("Token refresh failed");
  }
}