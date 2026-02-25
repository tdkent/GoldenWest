/** LAYOUT & UI */

export interface NavLink {
	label: string;
	to: string;
}

export interface AccordionItem {
	label: string;
	slot: 'ring-data';
	division: Division;
}

/** PAGE ELEMENTS */

export interface Division {
	id: number;
	divNames: string[];
	divRibbons: string[];
	judge: string;
	notes: string;
	sections: Section[];
}

export interface Section {
	id: number;
	name: string;
	notes: string;
	ribbon: string;
	classes: Day1Class[] | Day2Class[];
}

export interface Day1Class {
	breedId: number;
	collectId: number;
	name: string;
}

export interface Day2Class {
	id: number;
	name: string;
}

interface Venue {
	name: string;
	url: string | null;
}

export interface VenueList {
	label: string;
	items: Venue[];
}
