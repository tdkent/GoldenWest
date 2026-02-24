interface Venue {
	name: string;
	url: string | null;
}

export interface VenueList {
	label: string;
	items: Venue[];
}
