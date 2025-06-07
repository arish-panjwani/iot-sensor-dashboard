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
