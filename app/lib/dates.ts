// Format event dates and date strings.

// Dates of the event:
const weekday = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const dayOneDate = new Date(2026, 10, 14);
const dayTwoDate = new Date(2026, 10, 15);

// Create date strings:
const longDateOptions: Intl.DateTimeFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

export const dayOneLongDateString = dayOneDate.toLocaleDateString(
	'en-US',
	longDateOptions
);
export const dayTwoLongDateString = dayTwoDate.toLocaleDateString(
	'en-US',
	longDateOptions
);

export const dayOneDayOfWeek = weekday[dayOneDate.getDay()] as string;
export const dayTwoDayOfWeek = weekday[dayTwoDate.getDay()] as string;

// Get current year for copyright.
export const currentYear = new Date().getFullYear();
