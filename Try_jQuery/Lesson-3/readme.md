##3.2 Manipulating the DOM
**Video**

##3.3 Creating a DOM Node
_250 PTS_
When the page loads, we'll show a message to the traveler letting them know how to book this trip. To start out, let's create a <span> node with our phone number, 1-555-jquery-air and set it to the message variable.

##3.4 Adding to the DOM I
_250 PTS_
Let's add the phone number immediately before() the "Book Now" button. You can check out the HTML of the rendered page by clicking on the HTML tab below.

##3.5 Adding to the DOM II
_250 PTS_
On second thought, maybe we should append() our <span> to the bottom of the .usa element. Let's change the code to add it there instead.

##3.6 Removing From the DOM
_250 PTS_
We should probably remove that "Book Now" button until we can implement it. Go ahead and remove() it from the page.

##3.7 Acting on Interaction
**Video**

##3.8 Click Interaction
_250 PTS_
We're making progress on our page, and it's close to being useful. The next step will be moving the code we have been working on into a click handler. Let's start by wrapping all of our previous code in a click handler for any <button> elements using the on() method.

##3.9 Acting on Click
_250 PTS_
Now that we have a working click handler for the "Book Now" buttons, let's try something different. Try changing the click handler to trigger when the .tour list item is clicked instead.

##3.10 On Page Load
_250 PTS_
Our code seems to have an issue - it doesn't always work when the page is loaded. Wrap all of this code in a $(document).ready() block so that it won't run until the DOM has loaded.

##3.11 Refactor Using Traversing
**Video**

##3.12 Removing the Clicked Button
_250 PTS_
When we click on one of the buttons, it removes all buttons on the page. Instead, let's just remove the one button that was clicked by using this.

##3.13 Relative Traversing I
_250 PTS_
With multiple tours on the page, we're no longer appending the message in the right place. We really only want this message to be added after() the button we click on. Instead of appending the message to the .usa list, add it after() the button that was clicked.

##3.14 Relative Traversing II
_250 PTS_
It looks like someone changed our HTML. Now the <button> is inside a <div> tag. We don't want the message to go inside the <div> tag though, we want it to go at the bottom of the <li> element. Instead of using after(), let's change our code to find the closest() .tour element and append() the message to the bottom of it.

##3.15 Relative Traversing III
_250 PTS_
Rather than clicking on the button to show the message, we've decided to allow travelers to click on the entire <li> element. Change the call to on() to target .tour elements instead of button elements. After that change, $(this) will reference the clicked <li>. Let's remove the closest() method so that .append(message) still works. Then, use find to locate the button element and remove() it.

##3.16 Traversing and Filtering
_250 PTS_
**Video**

##3.17 Fetching Data From the DOM I
_250 PTS_
Let's add a bit more incentive to get people to book these tours by offering a discount if they book today. Create a discount variable, and then assign the discount that is stored in the data() attribute on the .tour element. To assign the correct data value, traverse from the clicked button, $(this), to the closest .tour element, and then use data() to find the discount. We don't need to do anything with the discount variable just yet.

##3.18 Fetching Data From the DOM II
_250 PTS_
We want to show this discount to the user in the message we show after the "Book Now" button is clicked. Go ahead and change the content of message to Call 1-555-jquery-air for a $<discount> discount., and swap out <discount> for the discount price.

##3.19 Refactoring
_250 PTS_
We're using this code twice: $(this).closest('.tour') to find the tour element. Refactor your code so that the element is set to a variable named tour, and then use that variable instead. This way, we only query the DOM once for the tours, instead of twice.
