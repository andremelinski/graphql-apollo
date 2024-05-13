import db from '../model/database/_db.js';

export default class ReviewsService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.reviews;
	}

	findById(id) {
		return db.reviews.find((el) => el.id === id);
	}

	findReviewsByGameId(gameId) {
		return db.reviews.filter((el) => el.game_id === gameId);
	}

	findReviewsByAuthorId(authorId) {
		return db.reviews.filter((el) => el.author_id === authorId);
	}
}
