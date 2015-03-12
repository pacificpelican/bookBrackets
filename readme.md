[**BookBrackets**](http://djmcloud.danieljmckeown.com/bookbrackets/) is a [Mustache.js](https://github.com/janl/mustache.js)-powered template for books on the web by [Dan McKeown](http://danmckeown.info) created in March 2015.  It was forked from [bookScroll](http://djmcloud.danieljmckeown.com/bookscroll/), which was forked from the template for [Retirement Planning Like a Dinosaur](http://danmckeown.info/books/retirement/).

Along with Mustache.js it also uses the [Materialize CSS](http://materializecss.com/) library and [jQuery](http://jquery.com) to power its responsive table-of-contents left side navigation as well as fonts, and layout tools.  An [example on Codepen by Joe Watkins](http://codepen.io/joe-watkins/pen/ydbeB) was also helpful in building the template.

Book Brackets is (as are MaterializeCSS and jQuery and Mustache.js) licensed under the [MIT license](https://github.com/janl/mustache.js/blob/d4ba5a19d4d04b139bbf7840fe342bb43930aee3/LICENSE) [or alternatively Book Brackets is licensed under the [GNU GPL v2](http://www.gnu.org/licenses/gpl-2.0.html) or later].  

You can see the changes to the project in the [changelog.md](changelog.md) file and view the markup in the [index.html](index.html) file.

The template includes tags surrounded by double curly brackets {{}} that indicate what would go in that part of the template, for example {{title}} and {{authorURI}}.  These fields can be specified by putting data into the [BookContent.js](data/BookContent.js) file.
