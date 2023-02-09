import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function distanceToNow(dateTime: number | Date) {
  try {
    return formatDistanceToNowStrict(dateTime, {
      addSuffix: true
    });
  } catch {
    // some kinda error handling here
    return "Few years back ...";
  }
}
