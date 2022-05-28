# Jumble Game in Ruby

[Live demo](https://ndlopez.github.io/jumble_game/)

## Motivation
The other day I was watching an episode of NewsRadio [S3EP04](https://youtu.be/gozYnV5bxL0) where Lisa (Maura Tierney) is reading the newspaper and then Matthew comes along having "the jumble fever" and wants to solve the Jumble of the day, at that moment Lisa joins in the game but she cant figure out the answer, Kathy who is in the back listening comes and joins the two and solves the jumble in a few seconds. Lisa asks her how did she do it, Kathy says, the letters say "pick me, I'm first".

In the same episode, they (Lisa and Dave) mention a book called <em>Flowers for Algernon</em> by Daniel Keyes about a super intelligent mouse. I oughta check it out.

Moving on... I made a quick duckduckgo search and I found Chicago Tribune's [Jumble Daily](https://fun.chicagotribune.com/game/tca-jumble-daily) page, free for anyone to play, in any way I decided to make my own.

I used the following list of [English Words](https://svnweb.freebsd.org/csrg/share/dict/words?view=log)

Ruby code reads the above TXT file and returns a JSON file with 4 words. JS code reads that remote JSON file and builds input and h2 tags to display the words.

## ScreenShot
![Mobile View](data/jumble_game_20220528.png)

## Needed Feature
1. Select some of the correct letters and build another phrase.
2. Summarize on the Success-window all the words and their meanings.

## Known Issues
1. ~~Sometimes 2 of the jumble words are the same. This issue is probably related to the random value. I need to fix this by asking for another word.~~
2. ~~When all the correct letters are finally inputted on the boxes it should display a message saying "Congratulations you finished!"~~
3. ~~I added a bar at the bottom of each word. It changes only for the first word. The global counter does not match the current word length.~~
4. On mobile none of the helping feature work. No correct letter coloring, no bottom bar coloring.<br>Probably: Element.setCapture() is deprecated. Use Element.setPointerCapture() instead. For more help https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture
5. If SPACEBAR is input after a correct input, is double counted as correct thus triggering early display of Success-Window.

---
Environment: MacBook Pro, MacOS 15.5

Language: JavaScript, Ruby

Editor: Emacs

