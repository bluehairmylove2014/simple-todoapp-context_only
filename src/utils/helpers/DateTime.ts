function isDateGreaterThan(dateCheck: string, dateTarget: string): boolean {
  if (!dateCheck || !dateTarget) return false;
  const check = new Date(dateCheck);
  const target = new Date(dateTarget);

  return check > target;
}
function getCurrentDateTime(): string {
  const now = new Date();

  // Lấy thông tin ngày, tháng, năm, giờ và phút
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Thêm '0' ở trước nếu cần
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Tạo chuỗi ngày giờ theo định dạng "YYYY-MM-DDTHH:mm"
  const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  return currentDateTime;
}
function formatDate(dateObj: Date) {
  const dateRaw = new Date(dateObj);

  let days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayOfWeek: string = days[dateRaw.getDay()];
  let date: number = dateRaw.getDate();
  let month: number = dateRaw.getMonth() + 1;
  let year: number = dateRaw.getFullYear();

  let hours: number = dateRaw.getHours();
  let minutes: number = dateRaw.getMinutes();

  const formattedHours: string = hours.toString().padStart(2, "0");
  const formattedMinutes: string = minutes.toString().padStart(2, "0");

  return {
    dateMonthYear: `${date} - ${month} - ${year}`,
    days: dayOfWeek,
    time24: `${formattedHours}:${formattedMinutes}`,
  };
}

export { isDateGreaterThan, getCurrentDateTime, formatDate };
