import dayjs from "dayjs";

import { ErrorResponse } from "@/lib/genericClass";

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
}

/**
 * @param {number} size
 */
export function randomBytes(size: number) {
  return crypto.getRandomValues(new Uint8Array(size));
}

/**
 * @param {Uint8Array} bytes
 */
export function base64url(bytes: number[] | Uint8Array) {
  return btoa(String.fromCharCode(...(bytes as number[])))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/**
 * https://tools.ietf.org/html/rfc7636#section-4.2
 * @param {string} code_verifier
 */
export async function generateCodeChallenge(code_verifier?: string) {
  const codeVerifierBytes = new TextEncoder().encode(code_verifier);
  const hashBuffer = await crypto.subtle.digest("SHA-256", codeVerifierBytes);

  return base64url(new Uint8Array(hashBuffer) as unknown as number[]);
}

/**
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 */
export async function fetchJSON(
  input: RequestInfo | URL,
  init: RequestInit | undefined
) {
  const response = await fetch(input, init);
  const body = await response.json();
  if (!response.ok) {
    throw new ErrorResponse(response, body);
  }
  return body;
}

/**
 * Generate a contextual greeting of time during the day
 * @param text optional text to add at the end of the string
 * @returns string type of "morning" | "afternoon" | "evening" + text
 */
const greetingByTime = (text = "") => {
  const today = dayjs();
  const curHr = today.hour();
  let result = "grieve, something went wrong!";
  if (curHr < 12) {
    result = "morning";
  } else if (curHr < 18) {
    result = "afternoon";
  } else {
    result = "evening";
  }
  return `${result}, ${text}`;
};

export { greetingByTime };
