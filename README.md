# FLASHCARD - GENERATOR

### Overview

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

#### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is [a common device in educational applications](https://en.wikipedia.org/wiki/Cloze_test).

A flash card built this way has three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._

### Examples

Constructors works as follows.

```
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
```
