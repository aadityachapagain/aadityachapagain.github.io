---
title: Useful Python decorator to take your code to MARS and beyond
date: 2022-04-15 12:00
modified: 2022-04-15 12:00
category: Blog
slug: useful-python-decorators-to-take-your-code-to-moon-and-beyond
summary: Do more thing with less code without compromising on quality
tags: Machine Learning, python, coding, decorator, callbacks, developer, python skill,
authors: Aaditya Chapagain
status: published
---

In this blog post, we will explore 10 helpful decorators which I regularly use in my projects to extend my mode with extra functionalites. We'll dive into each decorator, look at the code and play with some hands-on examples. If you are also Python developer, these decorators will help you massively in your python projects.

## Table of contents

## @logger

If you are unfamiliar with decorators, consider reading my previous [blog post](https://aadityachapagain.com/posts/understanding-python-decorator-with-its-usage).

logger is a function that takes a function as input and return a function as output.The output function is usually an extended version of the input. In our case, we want the output function to surround the call of the input function with `start` and `end` statements.

Here's the simple implementation of the `logger` decorator.

```python
from functools import wraps

def logger(func):
  @wraps(func)
  def wrapper(*args, **kwargs):
    print(f"----- {function.__name__}: start -----")
    output = func(*args, **kwargs)
    print(f"----- {function.__name__}: end -----")
    return output
  return wrapper


# now you can apply logger to any other functions
@logger
def some_func(text):
  # do something here

```

## @lru_cache

This is a built-in decorator that you can import from `functools`.

It caches the return values of a function , using a least-recently-used( LRU ) algorithm to discard the least-used values when the cache is full.

I typically use this decorator for long-running tasks that don't change the output with the same input like querying a database, requesting a static remote web page, or running some heavy processing.

```python

import random
import time
from functools import lru_cache


@lru_cache(maxsize=None)
def heavy_processing(n):
    sleep_time = n + random.random()
    time.sleep(sleep_time)

# first time
%%time
heavy_processing(0)
# CPU times: user 363 µs, sys: 727 µs, total: 1.09 ms
# Wall time: 694 ms

# second time
%%time
heavy_processing(0)
# CPU times: user 4 µs, sys: 0 ns, total: 4 µs
# Wall time: 8.11 µs

# third time
%%time
heavy_processing(0)
# CPU times: user 5 µs, sys: 1 µs, total: 6 µs
# Wall time: 7.15 µs

```

if you want to implement a cache decorator yourself from scratch, here's how you'd do it:

- You add an empty dictionary as an attribute to the wrapper function to store previously computed values by the input function
- When calling the input function, you first check if its arguments are present in the cache. If it's the case, return the result. Otherwise, compute it and put it in the cache.

```python

from functools import wraps

def cache(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        cache_key = args + tuple(kwargs.items())
        if cache_key in wrapper.cache:
            output = wrapper.cache[cache_key]
        else:
            output = function(*args)
            wrapper.cache[cache_key] = output
        return output
    wrapper.cache = dict()
    return wrapper

@cache
def heavy_processing(n):
    sleep_time = n + random.random()
    time.sleep(sleep_time)


%%time
heavy_processing(1)
# CPU times: user 446 µs, sys: 864 µs, total: 1.31 ms
# Wall time: 1.06 s

%%time
heavy_processing(1)
# CPU times: user 11 µs, sys: 0 ns, total: 11 µs
# Wall time: 13.1 µs

```

## @repeat

This decorator causes a function to be called multiple times in a row.

This can be useful for debugging purposes, stress tests, or automating the repetition of multiple tasks.

Unlike the previous decorators, this one expects an input parameter.

```python

def repeat(number_of_times):
    def decorate(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(number_of_times):
                func(*args, **kwargs)
        return wrapper
    return decorate


@repeat(5)
def dummy():
    print("hello")

dummy()
# hello
# hello
# hello
# hello
# hello

```

## @timeit

This decorator measures the execution time of a function and prints the result: this serves as debugging or monitoring.

In the following snippet, the `timeit` decorator measures the time it takes for the `process_data` function to execute and prints out the elapsed time in seconds.

```python
import time
from functools import wraps

def timeit(func):
  @wraps(func):
  def wrapper(*args, **kwargs):
    start = time.perf_counter()
    result = func(*args, **kwargs)
    end = time.perf_counter()
    print(f'{func.__name__} took {end - start:.6f} seconds to complete')
    return result
  return wrapper

@timeit
def process_data():
  time.sleep(1)

process_data()

```

## @retry

This decorator forces a function to retry a number of times when it encounters an exception.

It takes three arguments: the number of retries, the exception to catch and retry on, and the sleep time between retries.

```python

import random
import time
from functools import wraps

def retry(num_retries, exception_to_check, sleep_time=0):
    """
    Decorator that retries the execution of a function if it raises a specific exception.
    """
    def decorate(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for i in range(1, num_retries+1):
                try:
                    return func(*args, **kwargs)
                except exception_to_check as e:
                    print(f"{func.__name__} raised {e.__class__.__name__}. Retrying...")
                    if i < num_retries:
                        time.sleep(sleep_time)
            # Raise the exception if the function was not successful after the specified number of retries
            raise e
        return wrapper
    return decorate

@retry(num_retries=3, exception_to_check=ValueError, sleep_time=1)
def random_value():
    value = random.randint(1, 5)
    if value == 3:
        raise ValueError("Value cannot be 3")
    return value

random_value()
# random_value raised ValueError. Retrying...
# 1

random_value()
# 5

```

## @countcall

This decorator counts the number of times a function has been called.

This number is stored in the wrapper attribute `count`.

```python

from functools import wraps

def countcall(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        wrapper.count += 1
        result = func(*args, **kwargs)
        print(f'{func.__name__} has been called {wrapper.count} times')
        return result
    wrapper.count = 0
    return wrapper

@countcall
def process_data():
    pass

process_data()
process_data has been called 1 times
process_data()
process_data has been called 2 times
process_data()
process_data has been called 3 times
```

## @rate_limited

This is a decorator that limits the rate at which a function can be called, by sleeping an amount of time if the function is called too frequently.

```python

import time
from functools import wraps

def rate_limited(max_per_second):
    min_interval = 1.0 / float(max_per_second)
    def decorate(func):
        last_time_called = 0.0
        @wraps(func)
        def rate_limited_function(*args, **kargs):
            elapsed = time.perf_counter() - last_time_called
            left_to_wait = min_interval - elapsed
            if left_to_wait > 0:
                time.sleep(left_to_wait)
            ret = func(*args, **kargs)
            last_time_called = time.perf_counter()
            return ret
        return rate_limited_function
    return decorate

```

> This function hence introduces a slight time overhead between the calls but ensures that the rate limit is not exceeded.

There's also a third-party package that implements API rate limit: it's called **ratelimit**.

```bash
pip install ratelimit
```

To use this package, simply decorate any function that makes an API call:

```python

from ratelimit import limits

import requests

FIFTEEN_MINUTES = 900

@limits(calls=15, period=FIFTEEN_MINUTES)
def call_api(url):
  response = requests.get(url)

  if response.status_code != 200:
    raise Execption('API response: {}'.format(response.status_code))
  return response

```

if the decorated function is called more times than allowed a `ratelimit.RateLimitException` is raised.

To be able to handle this exception, you can use the `sleep_and_retry` decorator in combination with the `ratelimit` decorator.

```python

@sleep_and_retry
@limits(calls=15, period=FIFTEEN_MINUTES)
def call_api(url):
    response = requests.get(url)

    if response.status_code != 200:
        raise Exception('API response: {}'.format(response.status_code))
    return response
```

This causes the function to sleep the remaining amount of time before being executed again.

## @register

If your pyton script accidentally terminates and you still want to perform some tasks to save your work, perform some tasks to save your work, perform cleanup or print a message, I find that the register decorator is quite handy in this context.

```python

from atexit import register

@register
def terminate():
    perform_some_cleanup()
    print("Goodbye!")

while True:
    print("Hello")

```

## @dataclass

The `@dataclass` decorator in Python is used to decorate classes.

It automatically generates special methods such as `__init__`, `__repr__`,
`__eq__`, `__lt__`, and `__str__` for classes that primarily store data. This can reduce the boilerplate code and make the classes more readable and maintainable.

It also provides nifty methods off-the-shelf to represent objects nicely, convert them into JSON format, make them immutable, etc.

The `@dataclass` decorator was introduced in Python 3.7 and is available in the standard library.

```python

from dataclasses import dataclass,

@dataclass
class Person:
    first_name: str
    last_name: str
    age: int
    job: str

    def __eq__(self, other):
        if isinstance(other, Person):
            return self.age == other.age
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Person):
            return self.age < other.age
        return NotImplemented


john = Person(first_name="John",
              last_name="Doe",
              age=30,
              job="doctor",)

anne = Person(first_name="Anne",
              last_name="Smith",
              age=40,
              job="software engineer",)

print(john == anne)
# False

print(anne > john)
# True

asdict(anne)
#{'first_name': 'Anne',
# 'last_name': 'Smith',
# 'age': 40,
# 'job': 'software engineer'}

```

## @singledispatch

This decorator allows a function to have different implementations for different types of arguments.

```python

from functools import singledispatch

@singledispatch
def fun(arg):
    print("Called with a single argument")

@fun.register(int)
def _(arg):
    print("Called with an integer")

@fun.register(list)
def _(arg):
    print("Called with a list")

fun(1)  # Prints "Called with an integer"
fun([1, 2, 3])  # Prints "Called with a list"

```

## Conclusion

Decorators are useful abstractions to extend your code with extra functionalities like caching, automatic retry, rate limiting, logging, or turning your classes into supercharged data containers.

Here's a [list](https://github.com/lord63/awesome-python-decorator) of awesome decorators to get inspired.

Thanks for reading!.
