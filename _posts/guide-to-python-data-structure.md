---
title: Guide to Data Structure in pythonverse
date: 2024-03-12 12:00
modified: 2024-04-11 12:00
category: Blog
slug: guide-to-python-data-structure
tags: basics, intermediate, python, datastructure, tech, programming language
summary: Datastructures are essential building blocks upon which any programs are constructed. Each data-structure offers a unique method of arranging data, So It can be retrieaved effectively. [Python's Standard Library](https://docs.python.org/3/library/index.html) contains a large collections of data structures.
authors: Aaditya Chapagain
status: Draft
---

**In this Blog, you'll learn:**

- about most common data structures in python that are built into standard library.
- python's abstract data type built into naming scheme.
- how to practically and efectively use these data structures.

## Table of contents

## Dictionaries, Maps, and Hash Tables

In Python, [Dicts](https://realpython.com/python-dicts/) are a central data strucure. Dicts store an arbitrary number of objects, each identified by a unique dictionary **key**.

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