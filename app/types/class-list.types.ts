export interface Day2Class {
	id: number;
	name: string;
}

export interface Day1Class {
	breedId: number;
	collectId: number;
	name: string;
}

export interface Section {
	id: number;
	name: string;
	notes: string;
	ribbon: string;
	classes: Day1Class[] | Day2Class[];
}

export interface Division {
	id: number;
	divNames: string[];
	divRibbons: string[];
	judge: string;
	notes: string;
	sections: Section[];
}
