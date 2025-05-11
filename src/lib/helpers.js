import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a timestamp to a "time ago" format (e.g., "2 days ago").
 * @param date - The date or timestamp to convert.
 * @returns A human-readable string like "5 minutes ago".
 */
export function timeAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
