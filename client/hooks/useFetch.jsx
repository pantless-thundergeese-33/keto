import { useState, useEffect } from 'react';

/** @typedef {string | number | boolean | null} JsonPrimitive */
/** @typedef {JsonPrimitive[]} JsonArray */
/** @typedef {Record<string, JsonPrimitive | JsonArray | JsonObject>} JsonObject */

/**
 * Custom hook for simplifying fetch calls and checking the state of a fetch call.
 *
 * @param {string} url
 * @param {object} [options]
 *   An optional set of options. If not provided, hook will default to fetch.
 *
 * @returns {JsonPrimitive | JsonArray | JsonObject, boolean, null | Error]}
 */
const useFetch = (url, options) => {
  const [responseJson, setResponseJson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // No need to check loading value before running; useEffect will only call this function if
    // the url changes
    setResponseJson(null);
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setResponseJson(json);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    }

    fetchData();
  }, [url]);

  return [responseJson, loading, error];
};

export default useFetch;
