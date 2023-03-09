import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function distanceToNow(
  dateTime: number | Date,
  suffix?: boolean
) {
  try {
    return formatDistanceToNowStrict(dateTime, {
      addSuffix: suffix ?? false
    });
  } catch {
    // some kinda error handling here
    return "Few years back ...";
  }
}
