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
	// adding relations
	// how to get the reviews from A game? relation: 1 game to many reviews.
	// when we select games or game
	// for this apollo will query to get that single game query game info than query the reviews to get all reviews info
	Game: {
		// tells apolo how to get reviews info based on pair inquerity for the single Game.
		reviews(parent) {
			return reviews.findReviewsByGameId(parent.id);
		},
	},
	Author: {
		reviews(parent) {
			return reviews.findReviewsByAuthorId(parent.id);
		},
	},
	Review: {
		author(parent) {
			console.log(parent.id);
			return authors.findAuthorByReviewId(parent.id);
		},
		game(parent) {
			return games.findGameByReviewId(parent.id);
		},
	},
	// all data comes from args
	Mutation: {
		deleteGame(_, args) {
			return games.deleteGame(args.id);
		},
		addGame(_, args) {
			return games.addGame(args.game);
		},
		updateGame(_, args) {
			return games.updateGame(args.id, args.edits);
		},
	},
};
