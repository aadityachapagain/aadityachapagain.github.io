---
title: Guide to Data Structure in pythonverse
date: 2024-03-12 12:00
modified: 2024-04-11 12:00
category: Blog
slug: guide-to-python-data-structure
tags: basics, intermediate, python, datastructure, tech, programming language
summary: Datastructures are essential building blocks upon which any programs are constructed. Each data-structure offers a unique method of arranging data, So It can be retrieaved effectively. [Python's Standard Library](https://docs.python.org/3/library/index.html) contains a large collections of data structures.
authors: Aaditya Chapagain
status: published
---

**In this Blog, you'll learn:**

- about most common data structures in python that are built into standard library.
- python's abstract data type built into naming scheme.
- how to practically and efectively use these data structures.

## Table of contents

## Dictionaries, Maps, and Hash Tables

In Python, [Dicts](https://realpython.com/python-dicts/) are a central data strucure. Dicts store an arbitrary number of objects, each identified by a unique dictionary **key**.

Dictionaries are one of the most important and frequently used data structures in computer science. So, lets see what dictionaaries look like in python.

```py

>>> phonebook = {
  "sam": 74892,
  "shay": 7498,
  "jay": 2939
}

# then you can retrieve each Item from dictionary using Key

# retrieve phonebook of shay ?
>>> print(phonebook['shay'])
7498

```

**Python also provide some useful syntatic suger to work with dictionaries. You can use list comprehension on dictionary to modify the content of dictionary in single line of code.**

```py

# you can convert int value of the phonebook record  into string of each person using comprehension
str_phonebook = { str(x) for k,v in phonebook.items() }

```

### Concept of dictionaries

Dictionaries in python is hashed based on key, which means the key of pyton's dictionaries must be hashable. A hashable object has a hash value that never changes during its lifetime and hence it can be compared to other objects.

Immutable types like strings and int are hashable and work well as dictionaries keys. You can also use tuple objects as dictionary keys as long as they contain only hashable types themselves.

### Time and Space Complexity

Python dictionaries are based on a well-tested and finely tuned hash table implementation that provides the highly performant value retrival using key.
It has Time Complexity of **O(1)** for lookup, insert, update and delete operations in the average case.

**Its space complexity is O(n)**.

### Variant of dictionaries in Python.

> **collections.OrderedDict**: Remember the Insertion Order of keys

If key order is important for your algorithm to work, then Its bet to use OrderDict class to create dictionary.

```py
>>> import collections 
>>> d = collections.OrderedDict(one=1, two=2, three=3)
>>> d
OrderedDict([('one', 1), ('two', 2), ('three', 3)])

>>> d["four"] = 4
>>> d
OrderedDict([('one', 1), ('two', 2), ('three', 3), ('four', 4)])

>>> d.keys()
odict_keys(['one', 'two', 'three', 'four'])

```

> **collections.defaultdict** : Return Default Values for Missing Keys

The defaultdict class is another dictionary subclass that accepts a callable in its constructor whose return value will be used if a requested key cannot be found.

This can save you some typing and make your intentions clearer as compared to using get() or catching a `KeyError Exception` in regular dictionaries.

```py

>>> from collections import defaultdict
# creating default values of list type for each key in dictionary
>>> record = defaultdict(list)
# accessing a missing key creates it and 
# initializes it using the default factory,
# i.e. list() empty list in our case
>>> record['dogs'].append('Rufus')
>>> record['dogs'].append('Kathrin')
>>> record['dogs'].append('Mr Sniffles')

>>> record['dogs']
['Rufus', 'Kathrin', 'Mr Sniffles']

```

> **types.MappingProxyType**: A Wrapper for making Readonly Dict

[MappingProxyType](https://docs.python.org/3/library/types.html#types.MappingProxyType)  is a wrapper around standard dictionary in python that provides read-only view into the wrapped dictionary's data. 

It can be helpful if , for example, you'd like to return a dictionary carrying internal state from a clas or module while discouraging write access to this object.

```py
>>> from types import MappingProxyType
>>> writable = {"one": 1, "two": 2}
>>> read_only = MappingProxyType(writable)

>>> # The proxy is read-only:
>>> read_only["one"]
1
>>> read_only["one"] = 23
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'mappingproxy' object does not support item assignment

>>> # Updates to the original are reflected in the proxy:
>>> writable["one"] = 42
>>> read_only
mappingproxy({'one': 42, 'two': 2})

```

### Conclusion

If you’re looking for a general recommendation on which mapping type to use in your programs, I’d point you to the built-in dict data type. It’s a versatile and optimized hash table implementation that’s built directly into the core language.

If you want to have default value for a key without have to worry about **KeyError** in your dictionary use `collections.defaultdict`.

If you want to encapsulate your internal data, So, user can only view it but not modify it, use `types.MappingProxyType`.

If you want to have your dictionary ordered without worrying about order to insertion of items, use `collections.OrderedDict`.


## Array Data Structures

An **array** is a fundamental data structure available in most programming languages, and it has a wide range of uses across different algorithms.

## Records, Structs and Data Transfer Objects

Compared to array, **record** data structures provide a fixed number of fields. Each field can have a name and may also have a different type.

## Sets and Multisets 

A **set** is an unordered collection of objects that doesn't allow duplicate elements. Typically, sets are used to quickly test a value for membership in the test, to insert or delete new values from set, and to compute the union or intersections of two sets.

## Stacks (LIFO's)

A **stack** is a collection of objects that supports fast **Last-In/First-Out** (LIFO) semantics for inserts and deletes. Unlike lists or array, stacks typically don't allow for random acess to the objects they contain. The insert and delete operations are also called push and pop.

An effective practical comparison for a stack data structure is a pile of plates. Only the topmost plate can be moved because the other plates are heavy and valuable. New plates are put to the top of the stack. To put it another way, LIFO requires that the last plate in the stack be taken out first. One by one, the uppermost plates in the stack must be removed in order to access the lower-level plates.

Performance-wise, a proper stack implementation is expected to take O(1) time for insert and delete operations.

## Queues ( FIFOs )

A **queue** is a collection of objects that supports fast FIFO semantics for inserts and deletes. The insert and delete operations are sometimes called **enqueue** and **dequeue**. Unlike lists or arrays, queues typically don’t allow for random access to the objects they contain.

A good real-world comparision would be Imagine a line of people waiting for thier coffee order at coffee shop infront of PyCon. As new people enter the back of the line (enqueue) to get the coffee, people at front will already be recieving the coffee an the other end , and once they get thier coffee they left the line (dequeue) at the front of the queue. 

Queues are similar to stacks. The difference between them lies in how items are removed. With a **queue**, you remove the item least recently added (FIFO) but with a **stack**, you remove the item most recently added (LIFO).

Performance-wise, a proper queue implementation is expected to take O(1) time for insert and delete operations. These are the two main operations performed on a queue, and in a correct implementation, they should be fast.