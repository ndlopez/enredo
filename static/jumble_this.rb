#!/bin/ruby
=begin
Jumble this word if you can
=end
require 'json'

datFile = File.open("en_words.txt")
file_data = datFile.readlines.map(&:chomp)
datFile.close

jdx=0
jumble_words = Array.new
myTries = Array.new
while jumble_words.length < 4
  idx = rand 0..file_data.length
  word = file_data[idx]
  if word.length > 3 and word.length < 9
    jumble_words << word
  end
  jdx+=1
end
puts "Length",jumble_words.length
File.open("jumble_words.json","w") do |f|
  f.write(jumble_words.to_json)
end
jdx=0
#jumble_words = Array.new
while jdx < jumble_words.length
  count = 0
  #idx = rand 0..file_data.length
  #puts file_data[idx]
  word = jumble_words[jdx]
  #jumble_words << word
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

jdx=0
puts "Words   Your tries"
while jdx < jumble_words.length
  puts jumble_words[jdx], myTries[jdx]
  jdx+=1
end
