a simple scientific computer
the buttons are divided into two types,
-buttons2 containing special functions like cos()
-buttons containing a normal computer 

each button has a name used for the display and a value used to calculate the result (html)
        // e.target.value = Math.sin( (this is used for result)
        // e.target.value = "sin(" (used for displaying)

removeSpecialButton() this function is used to delete the entire special equation 
(for ex.  without using this function, the user would need delete each letter from Math.sin())
removeSpecialButton() => if user press CE(remove) and last input is one of the specialButtons 
then delete the entire value of the last input

