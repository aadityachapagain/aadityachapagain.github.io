Title: My First Article
Date: 2020-07-12 00:00
Modified: 2020-07-12 00:00
Category: Blog
Slug: first-article
Summary: In this article, I have written my first article using Markdown.
Tags: pelican, markdown
Authors: Aaditya Chapagain
Status: published

This is an example from [https://markdown-it.github.io/](https://markdown-it.github.io/)

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` python
numbers = [9, 8, 4, 1, 5]
for i, number in enumerate(numbers):
    print (i, number)
message = "Hello World"
hello(message)

def hello(message):
    print (message)
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Minion](https://octodex.github.com/assets/img/sample/minion.png)
![Stormtroopocat](https://octodex.github.com/assets/img/sample/stormtroopocat.jpg "The Stormtroopocat")