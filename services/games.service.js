import db from './_db.js';
export default class GamesService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.games;
	}

	findById(id) {
		return db.games.find((el) => el.id === id);
	}
}
