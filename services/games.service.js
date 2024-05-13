import db from '../model/database/_db.js';
export default class GamesService {
	// private readonly dbConnection
	constructor() {}

	loadAll() {
		return db.games;
	}

	findById(id) {
		return db.games.find((el) => el.id === id);
	}

	findGameByReviewId(reviewId) {
		const review = db.reviews.find((el) => el.game_id === reviewId);
		return db.games.find((el) => el.id === review.game_id);
	}
}
