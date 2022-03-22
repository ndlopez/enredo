#!/bin/ruby
=begin
Jumble this word if you can
=end
datFile = File.open("en_words.txt")

file_data = datFile.readlines.map(&:chomp)

datFile.close

jdx=0
jumble_words = Array.new
myTries = Array.new

while jdx < 4
  count = 0
  idx = rand 0..file_data.length
  #puts file_data[idx]
  word = file_data[idx]
  jumble_words << word
  jumbleWord = word.split('').shuffle.join(' ')
  print jdx + 1," Jumble this: ",jumbleWord
  puts ""
  print "  your input: "
  myWord = gets.chomp
  #puts word
  count += 1
  
  while myWord != word and myWord != ""
    if count > 2
      print "Hint: the word starts with... ",word[0]
      puts ""
    end
    puts "Try again..."
    myWord = gets.chomp
    count += 1
  end
  myTries << count
  if myWord == word
    puts "Correct."
  end
  jdx += 1
end
puts "Congrats!! you solved today's jumble"
puts jumble_words, myTries
