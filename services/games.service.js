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
	deleteGame(id) {
		db.games = db.games.filter((el) => el.id !== id);
		return db.games;
	}

	addGame(game) {
		const payload = { id: Math.floor(Math.random() * 10000).toString(), ...game };
		db.games.push(payload);
		return payload;
	}

	updateGame(id, edits) {
		db.games = db.games.map((game) => {
			if (game.id === id) {
				return { ...game, ...edits };
			}

			return game;
		});

		return db.games.find((game) => game.id === id);
	}
}
