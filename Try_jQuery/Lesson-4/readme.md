##4.3 On Load I
_250 PTS_
After the DOM has loaded, alert the number of images we have available by using the length property.

##4.4 On Load II
_250 PTS_
After the DOM has loaded, let's add an event handler to watch for a click on button elements. Just to make sure this doesn't impact anything else on the page, only watch for clicks on buttons within the #tour element.

##4.5 Slide Effect I
_250 PTS_
Inside the click event handler, show the .photos element by querying the DOM for it and calling the slideDown() method.

##4.6 Slide Effect II
_250 PTS_
The photos will now be shown, but we have no way of hiding them. Let's change this to use slideToggle so that the photos will be hidden if they click again.

##4.7 Expanding on on()
**Video**

##4.8 Mouseover I
_250 PTS_
Our tour page is going great! Let's add a bit more behavior to the page. Write an event handler that

##4.9 Mouseover II
_250 PTS_
Inside our new mouseenter event handler, call the slideToggle() method on the span tag within the picture description. You'll need to traverse down from the current element, $(this), and then find() the span tag.

##4.10 Mouseleave
_250 PTS_
When the mouse leaves the li element, we'll want to hide the description of the photo as well. Write another event handler that targets the same elements, but calls slideToggle() only on the mouseleave event.

##4.11 Named Functions
_250 PTS_
It looks like both of our event handlers on the .photos li elements are exactly the same! Let's go ahead and refactor these into a new function named showPhotos() and change our event handlers to reference that instead.

##4.12 Keyboard Events
**Video**

##4.13 Keyup Event
_250 PTS_
We've made a few changes to our tour page. Now we'll allow travelers to specify how many nights they want to book for their vacation. Write an event handler that will fire whenever the value within the keyup event is triggered on the #nights form field. The function can be empty now, then we'll implement it later.

##4.14 Keyup Event Handler I
_250 PTS_
Within our event handler, update the number of nights in the #nights-count element to whatever the traveler entered in the #nights form field.

##4.15 Keyup Event Handler II
_250 PTS_
Set the content of the #total element to the number the traveler has entered into the form field multiplied by the daily price.
