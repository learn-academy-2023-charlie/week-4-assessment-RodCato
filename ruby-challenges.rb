# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def num_test(value)
    if value.even?
        p "#{value} is even"
    else 
        p "#{value} is odd"
    end
end   

reposts1 = 7
# Expected output: '7 is odd'
num_test(reposts1)
# output: '7 is odd'

reposts2 = 42
# Expected output: '42 is even'
num_test(reposts2)
# output: '42 is even'

reposts3 = 221
# Expected output: '221 is odd'
num_test(reposts3)
# output: '221 is odd'

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

### What I came up with first based on the resource and it works the same as the second method I came up with 
# def vowel_removal(string)
#     p string.delete("aeiouAEIOU")
# end

def vowel_removal(string)
    p string.gsub(/[aeiou]/i, '')
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
vowel_removal(beatles_album1)
# output: 'Rbbr Sl'

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
vowel_removal(beatles_album2)
# output: 'Sgt Pppr'

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
vowel_removal(beatles_album3)
# output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palin_check (string)
    if string.downcase == string.downcase.reverse
        p "#{string} is a palindrome"
    else 
        p "#{string} is not a palindrome"
    end
end
palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palin_check(palindrome_test_case1)
# output: 'Racecar is a palindrome'

palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palin_check(palindrome_test_case2)
# output: 'LEARN is not a palindrome'


palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
palin_check(palindrome_test_case3)
# output: 'Rotator is a palindrome'