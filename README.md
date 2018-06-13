
This game was created using HTML, JavaScript, CSS, SCSS, JQUERY and AJAX.

  I created a wireframe for what I wanted this project to look like before starting.
  <a href="https://imgur.com/P9veXzC"><img src="https://i.imgur.com/P9veXzC.jpg" title="source: imgur.com" /></a>
  but ending up modifying where my sign-in is to make the game board more viewable to the players.

  My user stories were:
  User stories:

As a developer I want to create a tic tac toe game I can invite users to.
As a gamer, I want to receive a URL where I can access a tic tac toe game.
As a user I would like to log in so that I can keep track of my score and wins
As a user, I would like to know my wins of total games I have played
As a user, I would like to know when the game is over and someone has won.

 Unsolved problems I would like to fix in future iterations are:
 - making my tic-tac-toe boxes not move when clicked on
 - creating a modal that pops up for sign-in and sign-up so users are prompted to do this first.
   I personally kept forgetting to sign-in before playing and information will not be sent to the API until this happens
   and I think users will do the same.


## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`config/environment.js`](config/environment.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt test`: runs any automated tests, depends on `grunt build`
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
