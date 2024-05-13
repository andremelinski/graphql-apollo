import db from '../model/database/_db.js';

export default class AuthorsService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.authors;
	}

	findById(id) {
		return db.authors.find((el) => el.id === id);
	}

	findAuthorByReviewId(reviewId) {
		const reviewInfo = db.reviews.find((el) => el.id === reviewId);
		return db.authors.find((el) => el.id === reviewInfo.author_id);
	}
}
