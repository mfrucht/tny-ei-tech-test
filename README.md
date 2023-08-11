# *The New Yorker* Editorial Infrastructure Technical Test

Hello and welcome to *The New Yorker* Editorial Infrastructure Technical Test! Within this README and repository, you will find the technical assessment required for the completion of *The New Yorker* Editorial Infrastructure interviewing process.

## The Procedure
1. Clone—**do not fork**—this repository. Add the clone to your GitHub account as a **public** repository.

2. Make your changes in the cloned repository. Incremental commits are encouraged to show how your work evolved during development. 

3. The turnaround time for this test is **7 days (168 hours)**; any commits added after that window will not be considered. While you are welcome to spend as much time on this test as you feel is appropriate, we estimate it will require no more than **10 hours** of working time. 

4. Once you have completed the assignment, share the repository link with your recruiting contact.

## The Assignment
Many of the projects that the *The New Yorker’s* Editorial Infrastructure team work on involve analyzing the current workflows of other departments at the magazine. As such, it is important to be able to examine how data are currently being stored and used and determine how they should be stored and used, according to best practices. One of the purposes of this assignment is to showcase those skills. The other purpose is to gauge your comfort level with the various aspects of full-stack development.

In [this spreadsheet][data], you will find some poorly-arranged data. The general idea is to keep a list of books and information about them. Adjust the ‘schema’ to something more sensible that could conceivably be accessed and updated via an API. For your convenience, the current schema and data have been translated into SQL files, which can be found in [server/db/tables][sql]. These files have been loaded into a SQLite database, [tny-ei-tech-test.db][db]. Your submission should include new SQL files that reflect your schema and contain the updated SQLite database.

After cleaning up the data, you will build out a small application that uses that data. This application, which has been bootstrapped in this repository, contains a back-end service, powered by [Express](https://expressjs.com/), that should serve up some RESTful endpoints that provide JSON representations of the data. It also contains a front-end client, written in [React](https://react.dev/), which should display that data to a user.

The front-end should be based on these [wireframes](https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=2%3A723&mode=design&t=ZAgUCyAoE5wJAQWl-1). You can deviate from these designs as much as you like, but be prepared to discuss your design choices. The front-end repo includes [Tailwind](https://tailwindcss.com/), but you can use any CSS framework or library (or none at all.)

Your submission will be evaluated by cloning your clone of the repository and running all the commands [provided below](#running-locally) in order (starting with `nvm use`). (So make sure they produce the intended results!)

### Requirements
You’ll need [Node](https://nodejs.org/en), [NPM](https://www.npmjs.com/), [NVM](https://github.com/nvm-sh/nvm/tree/master), and [sqlite3](https://www.sqlite.org/cli.html).

### Running Locally

```
nvm use
npm install --workspaces
```

Seed the SQLite database:
```
npm run seed:db
```

In separate terminals, start the server:
```
npm run start:server
```
and the client:
```
npm run start:client
```

The server should be accessible at [http://localhost:3001](http://localhost:3001) and the client should be accessible at [http://localhost:3000](http://localhost:3000).

### Required Tasks

- [ ] Update the database schema defined in [server/db/tables][sql] and import the newly-structured data into the [tny-ei-tech-test.db][db].
- [ ] Build a back-end service with at least two routes that respond to GET requests:
  - [ ] `/books`, which must return a JSON representation of all of the books in the database
  - [ ] `/books/:isbn`, which must return a JSON representation of the book with the given ISBN
- [ ] Build a front-end client, written in React, with two corresponding routes:
  - [ ] `/books`, which has a [search page][search] that matches the search string against book titles and authors
  - [ ] `/books/:isbn`, which has a [detail page][book-detail] for an individual book

### Optional

If you have successfully completed the required tasks, you can also choose the extend the app however you see fit (time allowing; it’s more that the required tasks have been completed successfully and your code and commit history are organized and legible). Be prepared to discuss your decisions! A few ideas:

To the back-end:
- Add a POST route that creates a book
- Add a PUT route to update a book
- Add any other sensible collection or individual entity routes
- Add tests

To the front-end:
- Make the design responsive across different screen sizes
- Add any relevant `<meta>` tags to the `<head>`
- Add tests


## The End
Please be creative! An attempt has been made to reduce the amount of boilerplate you have to write to complete the assignment, but feel free to adjust as you see fit. Need Typescript? ESLint? An extremely custom Webpack config? Add them! The only library requirements are [React](https://react.dev) on the front-end and [Express](https://expressjs.com) on the back-end. And, JavaScript or supersets of JavaScript (i.e. TypeScript) only, please (sorry, CoffeeScript fans).

And, finally, thank you for taking the time to complete this test—we look forward to viewing your submission.

## Resources
- [TNY EI Technical Test — Source Data][data]
- [TNY EI Technical Test — Wireframes][wireframes]

[data]: https://docs.google.com/spreadsheets/d/1ec2OSWYjXENyRd9JKilCrJfBzwGxHBJh9hP8d8paRRU/edit#gid=158941343 "TNY EI Technical Test — Source Data"
[sql]: server/db/tables/ "SQL Table Definitions"
[db]: server/db/data/tny-ei-tech-test.db "SQLite Database"
[wireframes]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=2%3A723&mode=design&t=ZAgUCyAoE5wJAQWl-1 "Figma Wireframes"
[search]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=7645-1446&mode=design "Figma Wireframes — Search Page"
[book-detail]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=17-121&mode=design "Figma Wireframe — Detail Page"
