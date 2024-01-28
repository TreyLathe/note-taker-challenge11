# LOGO CREATOR
Table of Contents:
- [User Story/Challenge Goal](#user-storychallenge-goal)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)
- [Tests](#tests)

## USER STORY/CHALLENGE GOAL:
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## RESOURCES USED && CREDITS:
- Class instruction and office hours, specifically for assistance understanding file parsing, express get, etc.  .
- MDN and W3School sections on node.js, express.
- AI assistence to help figure out why first try at coding didn't work (parsing, paths incorrect, etc. )
- UUID documentation


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/note-taker-challenge11 

- Deployed Site: 

## SCREENSHOTS &&/|| SCREENCASTS:
ScreenShot: 


## USAGE && COMMENTS:

>GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page

Landing page opens as expected and links to notes page. 

>WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

Notes page opens as expected with UI as described above.

>WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page

When entering title and note, save and clear buttons appear at top right corner.

>WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear

Clicking the save button results in saved note in left column

>WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation

clicking on an existing note shows note to the right and a 'new note' button appears.

>WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears


## FUTURE DIRECTIONS AND CONTRIBUTING

-  UI changes to notes to allow for larger windows for note text and better positioning of save and clear buttons
-  Add functionality to edit existing notes
-  Add functionality to delete existing notes
-  Add Jest tests for current and future features

## TESTS

Currently, no Jest tests, console logs help with testing, type node server.js in appropriate directory to test functionality of application