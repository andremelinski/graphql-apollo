import db from './_db.js';

export default class AuthorsService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.authors;
	}

	findById(id) {
		return db.authors.find((el) => el.id === id);
	}
}
