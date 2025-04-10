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

[MappingProxyType](https://docs.python.org/3/library/types.html#types.MappingProxyType) is a wrapper around standard dictionary in python that provides read-only view into the wrapped dictionary's data.

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

### Conclusion : Dictionary

If you’re looking for a general recommendation on which mapping type to use in your programs, I’d point you to the built-in dict data type. It’s a versatile and optimized hash table implementation that’s built directly into the core language.

If you want to have default value for a key without have to worry about **KeyError** in your dictionary use `collections.defaultdict`.

If you want to encapsulate your internal data, So, user can only view it but not modify it, use `types.MappingProxyType`.

If you want to have your dictionary ordered without worrying about order to insertion of items, use `collections.OrderedDict`.

## Array Data Structures

An **array** is a fundamental data structure available in most programming languages, and it has a wide range of uses across different algorithms.

Performance-wise, it’s very fast to look up an element contained in an array given the element’s index. A proper array implementation guarantees a constant O(1) access time for this case.

Python contains several array-like data structures in its standard library that each have slightly different characteristics. Let's take a look.

> \*_List_: Mutable Dynamic Arrays

Python's list are implemented as **dynamic arrays** behind the scenes.

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

### **tuple**: Immutable Containers

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

### **array.array**: Basic Typed Arrays

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

### **str**: Immutable Arrays of Unicode Characters

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

### **bytes**: Immutable Arrays of Single Bytes

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

### **bytearray**: Mutable Arrays of Single Bytes

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

### Conclusion : Array Data Structure

If you’re willing to go beyond the Python standard library, then third-party packages like NumPy and pandas offer a wide range of fast array implementations for scientific computing and data science.

if you need to store arbitrary objects, potentially with mixed data types, then use a list or a tuple, depending on whether or not you want an immutable data structure.

If you have numeric (integer or floating-point) data and tight packing and performance is important, then try out array.array.

If you have textual data represented as Unicode characters, then use Python’s built-in str. If you need a mutable string-like data structure, then use a list of characters.

If you want to store a contiguous block of bytes, then use the immutable bytes type or a bytearray if you need a mutable data structure.

## Records, Structs and Data Transfer Objects

Compared to array, **record** data structures provide a fixed number of fields. Each field can have a name and may also have a different type.

### **dict**: Simple Data Objects

We can call dictonary as a record data type or data object in Python as dictionary can be used as maps or associative arrays and allow efficent lokup, insertion and deletion of any object associated with given key.

Data Objects created using dictionaries are mutable.

```py

>>> car1 = {
...     "color": "red",
...     "mileage": 3812.4,
...     "automatic": True,
... }
>>> car2 = {
...     "color": "blue",
...     "mileage": 40231,
...     "automatic": False,
... }

>>> # Dicts have a nice repr:
>>> car2
{'color': 'blue', 'automatic': False, 'mileage': 40231}

>>> # Get mileage:
>>> car2["mileage"]
40231

>>> # Dicts are mutable:
>>> car2["mileage"] = 12
>>> car2["windshield"] = "broken"
>>> car2
{'windshield': 'broken', 'color': 'blue',
 'automatic': False, 'mileage': 12}

>>> # No protection against wrong field names,
>>> # or missing/extra fields:
>>> car3 = {
...     "colr": "green",
...     "automatic": False,
...     "windshield": "broken",
... }

```

### **Write a Custom Class**: More Work, More Control

Classes allow you to define reusable blueprints for data objects to ensure each object provides the same set of fields.

Using regular Python classes as record data types is feasible, but it also takes manual work to get the convenience features of other implementations. For example, adding new fields to the **init** constructor is verbose and takes time.

Also, the default string representation for objects instantiated from custom classes isn’t very helpful. To fix that, you may have to add your own **repr** method, which again is usually quite verbose and must be updated each time you add a new field.

Fields stored on classes are mutable, and new fields can be added freely, which you may or may not like. It’s possible to provide more access control and to create read-only fields using the @property decorator, but once again, this requires writing more glue code.

Writing a custom class is a great option whenever you’d like to add business logic and behavior to your record objects using methods. However, this means that these objects are technically no longer plain data objects:

```py
>>> class Car:
...     def __init__(self, color, mileage, automatic):
...         self.color = color
...         self.mileage = mileage
...         self.automatic = automatic
...
>>> car1 = Car("red", 3812.4, True)
>>> car2 = Car("blue", 40231.0, False)

>>> # Get the mileage:
>>> car2.mileage
40231.0

>>> # Classes are mutable:
>>> car2.mileage = 12
>>> car2.windshield = "broken"

>>> # String representation is not very useful
>>> # (must add a manually written __repr__ method):
>>> car1
<Car object at 0x1081e69e8>

```

### **dataclasses.dataclass**: Python 3.7+ Data Classes

Data classes are available in Python 3.7 and above. They provide an excellent alternative to defining your own data storage classes from scratch.

By writing a data class instead of a plain Python class, your object instances get a few useful features out of the box that will save you some typing and manual implementation work:

- The syntax for defining instance variables is shorter, since you don’t need to implement the .**init**() method.
- Instances of your data class automatically get nice-looking string representation via an auto-generated .**repr**() method.
- Instance variables accept type annotations, making your data class self-documenting to a degree. Keep in mind that type annotations are just hints that are not enforced without a separate type-checking tool.
- Data classes are typically created using the @dataclass decorator, as you’ll see in the code example below:

```py

>>> from dataclasses import dataclass
>>> @dataclass
... class Car:
...     color: str
...     mileage: float
...     automatic: bool
...
>>> car1 = Car("red", 3812.4, True)

>>> # Instances have a nice repr:
>>> car1
Car(color='red', mileage=3812.4, automatic=True)

>>> # Accessing fields:
>>> car1.mileage
3812.4

>>> # Fields are mutable:
>>> car1.mileage = 12
>>> car1.windshield = "broken"

>>> # Type annotations are not enforced without
>>> # a separate type checking tool like mypy:
>>> Car("red", "NOT_A_FLOAT", 99)
Car(color='red', mileage='NOT_A_FLOAT', automatic=99)

```

### **typing.NamedTuple**: Improved Namedtuples

Added in Python 3.6, [typing.NamedTuple](https://docs.python.org/3/library/typing.html#typing.NamedTuple) is the younger sibling of the namedtuple class in the collections module. It’s very similar to namedtuple, with the main difference being an updated syntax for defining new record types and added support for type hints.But type annotations are not enforced without a separate type-checking tool like mypy. But even without tool support, they can provide useful hints for other programmers (or be terribly confusing if the type hints become out of date):

```py

>>> from typing import NamedTuple

>>> class Car(NamedTuple):
...     color: str
...     mileage: float
...     automatic: bool

>>> car1 = Car("red", 3812.4, True)

>>> # Instances have a nice repr:
>>> car1
Car(color='red', mileage=3812.4, automatic=True)

>>> # Accessing fields:
>>> car1.mileage
3812.4

>>> # Fields are immutable:
>>> car1.mileage = 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: can't set attribute

>>> car1.windshield = "broken"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Car' object has no attribute 'windshield'

>>> # Type annotations are not enforced without
>>> # a separate type checking tool like mypy:
>>> Car("red", "NOT_A_FLOAT", 99)
Car(color='red', mileage='NOT_A_FLOAT', automatic=99)

```

### Records, Structs, and Data Objects in Python: Summary

- If you have only a few fields, then using a plain tuple object may be okay if the field order is easy to remember or field names are superfluous. For example, think of an (x, y, z) point in three-dimensional space.

- If you need immutable fields, then plain tuples, collections.namedtuple, and typing.NamedTuple are all good options.

- If you need to lock down field names to avoid typos, then collections.namedtuple and typing.NamedTuple are your friends.

- If you want to keep things simple, then a plain dictionary object might be a good choice due to the convenient syntax that closely resembles JSON.

- If you need full control over your data structure, then it’s time to write a custom class with @property setters and getters.

- If you need to add behavior (methods) to the object, then you should write a custom class, either from scratch, or using the dataclass decorator, or by extending collections.namedtuple or typing.NamedTuple.

- If you need to pack data tightly to serialize it to disk or to send it over the network, then it’s time to read up on struct.Struct because this is a great use case for it!

## Sets and Multisets

A **set** is an unordered collection of objects that doesn't allow duplicate elements. Typically, sets are used to quickly test a value for membership in the test, to insert or delete new values from set, and to compute the union or intersections of two sets.

A set is an unordered collection of objects that doesn’t allow duplicate elements. Typically, sets are used to quickly test a value for membership in the set, to insert or delete new values from a set, and to compute the union or intersection of two sets.

In a proper set implementation, membership tests are expected to run in fast O(1) time. Union, intersection, difference, and subset operations should take O(n) time on average. The set implementations included in Python’s standard library [follow these performance characteristics](https://wiki.python.org/moin/TimeComplexity).

Just like dictionaries, sets get special treatment in Python and have some syntactic sugar that makes them easy to create. For example, the curly-brace set expression syntax and set comprehensions allow you to conveniently define new set instances:

```py

vowels = {"a", "e", "i", "o", "u"}
squares = {x * x for x in range(10)}

```

But be careful: To create an empty set you’ll need to call the set() constructor. Using empty curly-braces ({}) is ambiguous and will create an empty dictionary instead.

### **set** : Your native set

The set type is the built-in set implementation in Python. It’s mutable and allows for the dynamic insertion and deletion of elements.

Python’s sets are backed by the dict data type and share the same performance characteristics. Any hashable object can be stored in a set:

```py

>>> vowels = {"a", "e", "i", "o", "u"}
>>> "e" in vowels
True

>>> letters = set("alice")
>>> letters.intersection(vowels)
{'a', 'e', 'i'}

>>> vowels.add("x")
>>> vowels
{'i', 'a', 'u', 'o', 'x', 'e'}

>>> len(vowels)
6

```

### **frozenset**: Immutable Sets

The frozenset class implements an immutable version of set that can’t be changed after it’s been constructed.

frozenset objects are static and allow only query operations on their elements, not inserts or deletions. Because frozenset objects are static and hashable, they can be used as dictionary keys or as elements of another set, something that isn’t possible with regular (mutable) set objects:

```py

>>> vowels = frozenset({"a", "e", "i", "o", "u"})
>>> vowels.add("p")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'frozenset' object has no attribute 'add'

>>> # Frozensets are hashable and can
>>> # be used as dictionary keys:
>>> d = { frozenset({1, 2, 3}): "hello" }
>>> d[frozenset({1, 2, 3})]
'hello'

```

### **collections.Counter**: Multisets

The collections.Counter class in the Python standard library implements a multiset, or bag, type that allows elements in the set to have more than one occurrence.

This is useful if you need to keep track of not only if an element is part of a set, but also how many times it’s included in the set:

```py

>>> from collections import Counter
>>> inventory = Counter()

>>> loot = {"sword": 1, "bread": 3}
>>> inventory.update(loot)
>>> inventory
Counter({'bread': 3, 'sword': 1})

>>> more_loot = {"sword": 1, "apple": 1}
>>> inventory.update(more_loot)
>>> inventory
Counter({'bread': 3, 'sword': 2, 'apple': 1})

```

One caveat for the Counter class is that you’ll want to be careful when counting the number of elements in a Counter object. Calling len() returns the number of unique elements in the multiset, whereas the total number of elements can be retrieved using sum():

```py

>>> len(inventory)
3  # Unique elements

>>> sum(inventory.values())
6  # Total no. of elements

```

## Stacks (LIFO's)

A **stack** is a collection of objects that supports fast **Last-In/First-Out** (LIFO) semantics for inserts and deletes. Unlike lists or array, stacks typically don't allow for random acess to the objects they contain. The insert and delete operations are also called push and pop.

An effective practical comparison for a stack data structure is a pile of plates. Only the topmost plate can be moved because the other plates are heavy and valuable. New plates are put to the top of the stack. To put it another way, LIFO requires that the last plate in the stack be taken out first. One by one, the uppermost plates in the stack must be removed in order to access the lower-level plates.

Performance-wise, a proper stack implementation is expected to take O(1) time for insert and delete operations.

## Queues ( FIFOs )

A **queue** is a collection of objects that supports fast FIFO semantics for inserts and deletes. The insert and delete operations are sometimes called **enqueue** and **dequeue**. Unlike lists or arrays, queues typically don’t allow for random access to the objects they contain.

A good real-world comparision would be Imagine a line of people waiting for thier coffee order at coffee shop infront of PyCon. As new people enter the back of the line (enqueue) to get the coffee, people at front will already be recieving the coffee an the other end , and once they get thier coffee they left the line (dequeue) at the front of the queue.

Queues are similar to stacks. The difference between them lies in how items are removed. With a **queue**, you remove the item least recently added (FIFO) but with a **stack**, you remove the item most recently added (LIFO).

Performance-wise, a proper queue implementation is expected to take O(1) time for insert and delete operations. These are the two main operations performed on a queue, and in a correct implementation, they should be fast.
