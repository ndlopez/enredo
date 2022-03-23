# Jumble Game in Ruby
## Motivation
The other day I was watching an episode of NewsRadio [S3EP04](https://youtu.be/gozYnV5bxL0) where Lisa (Maura Tierney) is reading the newspaper and then Matthew comes along having "the jumble fever" and wants to solve the Jumble of the day, at that moment Lisa joins in the game but she cant figure out the answer, Kathy who is in the back listening comes and joins the two and solves the jumble in a few seconds. Lisa asks her how did she do it, Kathy says, the letters say "pick me, I'm first".

In the same episode, they (Lisa and Dave) mention a book called <bf>Flowers for Algernon</bf> by Daniel Keyes about a super intelligent mouse. I oughta check it out.

Moving on... I made a quick duckduckgo search and I found Chicago Tribune's [Jumble Daily](https://fun.chicagotribune.com/game/tca-jumble-daily) page, free for anyone to play, in any way I decided to make my own.

I used the following list of [English Words](https://svnweb.freebsd.org/csrg/share/dict/words?view=log)

Ruby code reads the above TXT file and returns a JSON file with 4 words. JS code reads that remote JSON file and builds input and h2 tags to display the words.

---
Environment: MacBook Pro, MacOS 15.5

Language: Ruby, JavaScript

Editor: Emacs

