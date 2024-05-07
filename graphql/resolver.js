import GamesService from '../services/games.service.js';
import ReviewsService from '../services/reviews.service.js';
import AuthorsService from '../services/authors.service.js';

const games = new GamesService();
const reviews = new ReviewsService();
const authors = new AuthorsService();

export const resolvers = {
	Query: {
		games() {
			return games.loadAll();
		},
		authors() {
			return authors.loadAll();
		},
		reviews() {
			return reviews.loadAll();
		},
		game(_, args, context) {
			return games.findById(args.id);
		},
		author(_, args, context) {
			return authors.findById(args.id);
		},
		review(_, args, context) {
			return reviews.findById(args.id);
		},
	},
};
