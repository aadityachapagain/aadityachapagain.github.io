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

Performance-wise, it’s very fast to look up an element contained in an array given the element’s index. A proper array implementation guarantees a constant O(1) access time for this case.

Python contains several array-like data structures in its standard library that each have slightly different characteristics. Let's take a look.

> **List*: Mutable Dynamic Arrays

Python's list are implemented as  **dynamic arrays** behind the scenes.

This means a list allows elements to be added or removed , and list will automatically adjust the backing store that holds these elements by allocating or releasing memory.

Python lists can hold arbitrary elements - everything is an object in Python. Therefore, you can mix and match different kinds of data types and store them all in a single list.

This can be a powerful feature, but the downside is that supporting multiple data types at the same time means that data is generally less tightly packed. As a result, the whole strucure takes up more space:

```py
>>> arr = ["one", "two", "three"]
>>> arr[0]
'one'

>>> # Lists have a nice repr:
>>> arr
['one', 'two', 'three']

>>> # Lists are mutable:
>>> arr[1] = "hello"
>>> arr
['one', 'hello', 'three']

>>> del arr[1]
>>> arr
['one', 'three']

>>> # Lists can hold arbitrary data types:
>>> arr.append(23)
>>> arr
['one', 'three', 23]
```

> **tuple**: Immutable Containers

Just like lists, tuples are part of the Python core langauge. Unline lists, however, python's tuple objects are immutable. This means elements can't be added or removed dynamically -all elements in a tuple be defined at creation time.

Tuple are another data structure that can hold elements of arbitrary data types. Having this flexibility is powerful, but again, it also means that data is less tighlty packed than it would be in a typed array.

```py

>>> arr = ("one", "two", "three")
>>> arr[0]
'one'

>>> # Tuples have a nice repr:
>>> arr
('one', 'two', 'three')

>>> # Tuples are immutable:
>>> arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment

>>> del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object doesn't support item deletion

>>> # Tuples can hold arbitrary data types:
>>> # (Adding elements creates a copy of the tuple)
>>> arr + (23,)
('one', 'two', 'three', 23)
```

> **array.array**: Basic Typed Arrays

Pyton's `array` module provides space-efficient storage of basic C-style data types like bytes, 32-bit integers, floating-point numbers and so on.

Arrays created with `array.array` class are mutable and behave similarly to lists except for one important different: they'are typed arrays constrained to a single data type.

Because of this , `array.array` objects with many elements are more space efficient than lists and tuples. The elements stored in them are tightly packed, and this can be useful if you need to store many elements of the same type.

```py

import array
>>> arr = array.array("f", (1.0, 1.5, 2.0, 2.5))
>>> arr[1]
1.5

>>> # Arrays have a nice repr:
>>> arr
array('f', [1.0, 1.5, 2.0, 2.5])

>>> # Arrays are mutable:
>>> arr[1] = 23.0
>>> arr
array('f', [1.0, 23.0, 2.0, 2.5])

>>> del arr[1]
>>> arr
array('f', [1.0, 2.0, 2.5])

>>> arr.append(42.0)
>>> arr
array('f', [1.0, 2.0, 2.5, 42.0])

>>> # Arrays are "typed":
>>> arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be real number, not str

```

> **str**: Immutable Arrays of Unicode Characters

Python 3.x uses str objects to store textual data as immutable sequences of Unicode characters. Practically speaking, that means a str is an immutable array of characters. Oddly enough, it’s also a recursive data structure—each character in a string is itself a str object of length 1.

String objects are space efficient because they’re tightly packed and they specialize in a single data type. If you’re storing Unicode text, then you should use a string.

Because strings are immutable in Python, modifying a string requires creating a modified copy. The closest equivalent to a mutable string is storing individual characters inside a list:

```py

>>> arr = "abcd"
>>> arr[1]
'b'

>>> arr
'abcd'

>>> # Strings are immutable:
>>> arr[1] = "e"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment

>>> del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object doesn't support item deletion

>>> # Strings can be unpacked into a list to
>>> # get a mutable representation:
>>> list("abcd")
['a', 'b', 'c', 'd']
>>> "".join(list("abcd"))
'abcd'

>>> # Strings are recursive data structures:
>>> type("abc")
"<class 'str'>"
>>> type("abc"[0])
"<class 'str'>"

```

> **bytes**: Immutable Arrays of Single Bytes

bytes objects are immutable sequences of single bytes, or integers in the range 0 ≤ x ≤ 255. Conceptually, bytes objects are similar to str objects, and you can also think of them as immutable arrays of bytes.

Like strings, bytes have their own literal syntax for creating objects and are space efficient. bytes objects are immutable, but unlike strings, there’s a dedicated mutable byte array data type called bytearray that they can be unpacked into:

```py

>>> arr = bytes((0, 1, 2, 3))
>>> arr[1]
1

>>> # Bytes literals have their own syntax:
>>> arr
b'\x00\x01\x02\x03'
>>> arr = b"\x00\x01\x02\x03"

>>> # Only valid `bytes` are allowed:
>>> bytes((0, 300))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: bytes must be in range(0, 256)

>>> # Bytes are immutable:
>>> arr[1] = 23
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'bytes' object does not support item assignment

>>> del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'bytes' object doesn't support item deletion

```

> **bytearray**: Mutable Arrays of Single Bytes

The bytearray type is a mutable sequence of integers in the range 0 ≤ x ≤ 255. The bytearray object is closely related to the bytes object, with the main difference being that a bytearray can be modified freely—you can overwrite elements, remove existing elements, or add new ones. The bytearray object will grow and shrink accordingly.

A bytearray can be converted back into immutable bytes objects, but this involves copying the stored data in full—a slow operation taking O(n) time:

```py

>>> arr = bytearray((0, 1, 2, 3))
>>> arr[1]
1

>>> # The bytearray repr:
>>> arr
bytearray(b'\x00\x01\x02\x03')

>>> # Bytearrays are mutable:
>>> arr[1] = 23
>>> arr
bytearray(b'\x00\x17\x02\x03')

>>> arr[1]
23

>>> # Bytearrays can grow and shrink in size:
>>> del arr[1]
>>> arr
bytearray(b'\x00\x02\x03')

>>> arr.append(42)
>>> arr
bytearray(b'\x00\x02\x03*')

>>> # Bytearrays can only hold `bytes`
>>> # (integers in the range 0 <= x <= 255)
>>> arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object cannot be interpreted as an integer

>>> arr[1] = 300
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: byte must be in range(0, 256)

>>> # Bytearrays can be converted back into bytes objects:
>>> # (This will copy the data)
>>> bytes(arr)
b'\x00\x02\x03*'

```

### Conclusion

If you’re willing to go beyond the Python standard library, then third-party packages like NumPy and pandas offer a wide range of fast array implementations for scientific computing and data science.

if you need to store arbitrary objects, potentially with mixed data types, then use a list or a tuple, depending on whether or not you want an immutable data structure.

If you have numeric (integer or floating-point) data and tight packing and performance is important, then try out array.array.

If you have textual data represented as Unicode characters, then use Python’s built-in str. If you need a mutable string-like data structure, then use a list of characters.

If you want to store a contiguous block of bytes, then use the immutable bytes type or a bytearray if you need a mutable data structure.


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