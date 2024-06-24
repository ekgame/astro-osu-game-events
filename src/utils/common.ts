
export interface Beatmap {
	beatmapId: number;
	beatmapSetId: number;
	creator: string;
	difficulty: number;
	artist: string;
	title: string;
	version: string;
}

export interface Player {
	username: string;
	userId: number;
    rank: number;
}

export interface PlayerScore {
	player: Player;
	score: number;
}

export function formatNumber(num: number, locale: string = 'en-US') {
    return new Intl.NumberFormat(locale).format(num);
}