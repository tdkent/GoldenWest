const dayOneDate = new Date(2026, 10, 14);
const dayTwoDate = new Date(2026, 10, 15);

const weekday = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const longDateOptions: Intl.DateTimeFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const briefDateOptions: Intl.DateTimeFormatOptions = {
	month: 'short',
	day: 'numeric',
	year: 'numeric',
};

// Format first day
export const dayOneLongDateString = dayOneDate.toLocaleDateString(
	'en-US',
	longDateOptions
);
export const dayOneBriefDateString = dayOneDate.toLocaleDateString(
	'en-US',
	briefDateOptions
);
export const dayOneDayOfWeek = weekday[dayOneDate.getDay()] as string;

// Format second day
export const dayTwoLongDateString = dayTwoDate.toLocaleDateString(
	'en-US',
	longDateOptions
);
export const dayTwoBriefDateString = dayTwoDate.toLocaleDateString(
	'en-US',
	briefDateOptions
);
export const dayTwoDayOfWeek = weekday[dayTwoDate.getDay()] as string;

export const currentYear = new Date().getFullYear();
