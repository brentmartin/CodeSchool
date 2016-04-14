###2.2 Searching the DOM
**Played video**

###2.3 Descendant Selector
_250 PTS_
We're getting ready to change some content on the Guided Tours page below. First, select all of the li elements within the #tours list using a descendant selector.

###2.4 Selecting Direct Children
_250 PTS_
Uh oh, it looks like we selected more than we wanted. We've also selected all the voting nav list items. Let's use a direct child selector to only select the li items that are direct children of #tours.
console:
```
$("#tours > li")
```

###2.5 Selecting Multiple Elements
_250 PTS_
To sort the tours on the page, let's select all tours that are from Asia and all tours that are On Sale. You'll need to use multiple selectors for this, with the classes for .asia and .sale.
console:
```
$(".asia, .sale")
```
