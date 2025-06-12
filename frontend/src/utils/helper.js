/** @format */

// ✅ Format function with 12/24-hour toggle
export function formatTimestamp(isoString, is24HrFormat = false) {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24HrFormat, // ✅ 24-hour control
  });

  return `${day}${suffix} ${month}, ${formattedTime}`;
}

/**
 * Returns the current date and time in the format: D/M-HH:mmAM/PM
 * Example: "12/6-10:49PM" for 12th June, 10:49 PM (12-hour format)
 */
// export function getFormattedDateTime(input) {
//   let date;

//   // Handle string with invalid trailing characters (e.g., Z1, Z2, etc.)
//   if (typeof input === "string") {
//     // Attempt to fix malformed ISO string
//     const cleaned =
//       input.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)?.[0] + "Z";
//     date = new Date(cleaned);
//   } else if (input instanceof Date) {
//     date = input;
//   } else {
//     date = new Date();
//   }

//   if (isNaN(date.getTime())) {
//     return "Invalid Date";
//   }

//   const day = date.getDate();
//   const month = date.getMonth() + 1;

//   let hours = date.getHours();
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   const ampm = hours >= 12 ? "PM" : "AM";

//   hours = hours % 12 || 12; // Convert 0 → 12

//   return `${day}/${month}-${hours}:${minutes}${ampm}`;
// }

/**
 * Converts a date (ISO string, Date object, or undefined) to the format: D/M-HH:mm:ss
 * Example: "8/6-14:49:30" for 8th June, 2:49:30 PM
 *
 * If input is already formatted, returns it as-is.
 *
 * @param {string | Date} input - ISO string, Date object, or already-formatted string
 * @returns {string} Formatted date string or "Invalid Date"
 */
export function getFormattedDateTime(input) {
  // Return as-is if already in "D/M-HH:mm:ss" format
  if (
    typeof input === "string" &&
    /^\d{1,2}\/\d{1,2}-\d{2}:\d{2}:\d{2}$/.test(input)
  ) {
    return input;
  }

  let date;

  if (typeof input === "string") {
    try {
      date = new Date(input);
      if (isNaN(date.getTime())) throw new Error();
    } catch {
      return "Invalid Date";
    }
  } else if (input instanceof Date) {
    date = input;
  } else {
    date = new Date(); // fallback to now
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}-${hours}:${minutes}:${seconds}`;
}
