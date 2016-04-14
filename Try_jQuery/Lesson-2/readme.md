##2.2 Searching the DOM
**Played video**

##2.3 Descendant Selector
_250 PTS_
We're getting ready to change some content on the Guided Tours page below. First, select all of the li elements within the #tours list using a descendant selector.

##2.4 Selecting Direct Children
_250 PTS_
Uh oh, it looks like we selected more than we wanted. We've also selected all the voting nav list items. Let's use a direct child selector to only select the li items that are direct children of #tours.

console:
```
$("#tours > li")
```

##2.5 Selecting Multiple Elements
_250 PTS_
To sort the tours on the page, let's select all tours that are from Asia and all tours that are On Sale. You'll need to use multiple selectors for this, with the classes for .asia and .sale.

console:
```
$(".asia, .sale")
```

##2.6 The :first Pseudo Selector
_250 PTS_
Let's try a selector for finding the first tour. Use the :first pseudo selector to select the first tour in the list.

console:
```
$("#tours li:first")
```

##2.7 The :even Selector
_250 PTS_
Part of our design wishlist is to add row striping to our list. We could do this with CSS, but doing it with JavaScript also sounds fun. Within our #tours list, find the direct children li elements, and then use the :even pseudo selector to select every other li element.

console:
```
$("#tours > li:even")
```

##2.8 Traversing the DOM
**Video**

##2.9 Using find()
_250 PTS_
In a previous section, we learned how to select all vacations from America using $("#vacations .america"). This works, but let's change the previous code to use traversal instead with the find method.

console:
```
$("#vacations").find(".america");
```

##2.10 Using first()
_250 PTS_
We've decided to add a "feeling lucky" feature to our site where the first vacation is selected by default. Using traversal or filtering, select the first vacation li element from the list.

console:
```
$("#vacations").find("li").first();
```

##2.11 Using last()
_250 PTS_
As you are looking through your code, you notice that someone else is selecting the last vacation with $("#vacations li:last"). You can refactor this code to find the last li within #vacations using traversal instead.

console:
```
$("#vacations").find(".vacation").last("li");
```

##2.12 Using prev()
_250 PTS_
The vacation that is previous to the last one will always be on sale. Use traversal with the prev() method to select the vacation that is right before the last one.

console:
```
$("#vacations li").last().prev();
```

##2.13 Traversing Up
_250 PTS_
You need to add some effects to all featured vacations, but there is a problem, only titles have the .featured class. You don't flinch, since you know how to traverse. Using traversal, select all tours that have a .featured class on their title by getting the parent() of featured titles.


console:
```
$("#tours li").find(".featured").parent();
```
