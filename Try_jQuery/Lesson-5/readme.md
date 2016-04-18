##5.1 Initialized files

##5.2 Taming CSS
**Video**

##5.3 CSS I
_250 PTS_
Let's try to make the .tour elements on this page stand out a bit more. Inside our event handler for the mouseenter event, set the background-color to #252b30 using the css() method.

##5.4 CSS II
_250 PTS_
Let's set the font-weight to bold as well by passing in a JavaScript object to the css() method.

##5.5 Show Photo
_250 PTS_
Let's see what the tour page would look like if we showed the .photos on mouseenter as well. Try using the show() method here to make it visible.

##5.6 Refactoring to CSS
_250 PTS_
We've extracted out our styles into a new CSS class called highlight. Go ahead and add this class when the .tour is moused over instead of using the css() method. Also, add another event handler for when the mouse leaves the .tour element to remove this class by watching for mouseleave.

##5.7 Animation
**Video**

##5.8 Animate I
_250 PTS_
Let's continue seeing what we can do to add more flavor to our tours page. When the mouse first goes over the .tour element, we need to show the price per night, .per-night, and to make it stand out. Let's animate() the opacity to be 1 in our same event handler. This allows us to fade the element in.

##5.9 Animate II
_250 PTS_
The price per night will now fade, but let's make it move a little as well. We can't use slideDown() for this with our animate() call, though. When the mouseenter event is triggered, animate() the top property to -14px in order to move it up a bit.
