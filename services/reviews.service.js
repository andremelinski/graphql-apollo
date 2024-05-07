import db from './_db.js';

export default class ReviewsService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.reviews;
	}

	findById(id) {
		return db.reviews.find((el) => el.id === id);
	}
}
