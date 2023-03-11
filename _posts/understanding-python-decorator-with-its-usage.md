---
title: Understanding Python Decorator and Its Usage
date: 2022-03-15 12:00
modified: 2022-03-15 12:00
category: Blog
slug: understanding-python-decorator-with-its-usage
summary: Upskill your python using awesome decorators
tags: Machine Learning, python, coding, decorator, callbacks, developer, python skill,
authors: Aaditya Chapagain
status: published
---

You might have seen python code that has `@<function_or_class>` written immediately above a function or Class.
For Example, `@staticmethod` right above static method or `@classmethod` right above class method. Those are
actually Python decorators. Decorators allow an existing function to be extended without changing the source code.

In this blog, we will comprehend a decorator structure, examine advanced behaviours including drawbacks and ways to overcome it, nested decorators, stacking decorators and eventually some practical applications, develop our own multi-purpose decorators.

## Table of contents

## Writing Decorator

Decorators are often referred to as function wrappers because they accept a function as a paramter and return a modified version of the function that has additional features or capabilites.

```python

def simple_decorator(func):
  def wrapper(*args, **kwargs):
    # do something before function execution
    result = func (*args, **kwargs)
    # do something after function execution
    return result
  return wrapper

```

we can see from the construct above that line 4 is where the function really executes, but we can change what happens before to, during and even after a function execution. Althouh decorators may alter a function's input, output, or behaviour, it is preferable to build them in a way that does not make the function they are wrapping less understandable.

> **Decorators are best used to add common behaviour to multiple functions without modifying every function manually**

## Advanced behaviours of Decorators

### Retain metadata of wrapped function

One major **drawback** of using decorators is that the metadata of function will be destroyed by decorator when actually calling that function in code, because we are returning a wrapper function in place of the original function in the code sample from the previous section, all decorated functions will have their `__name__` and `signature` information changed to wrapper's.

```python

@simple_decorator
def func_add(a, b):
  return a + b

print(func_add.__name__)
# wrapper

```

Technically, this wouldn't impact how the fucntion or decorator was meant to be used, but it's still advisable to avoid any unexpected outcomes when using a decorator. This can be accomplished quickly by decorating the wrapper function with the `@wraps` decorator, as illustrated below.The decorator can still be used in the same way, but now the wrapped function's metadata won't be changed.

```python

from functools import wraps

def sample_decorator(func):
  @wraps(func)
  def wrapper(*args, **kwargs):
    # do something before function exec
    result = func(*args, **kwargs)
    # do something after function exec
    return result
  return wrapper

```

### Decorators that accept arguments

Under the hood we all know that decorators are just a function wrapper. So, it is possible for decorator to receive arguments to make make this happen , we just need to slight change in coding our decorator.
We will get decorator that will take arguments, If only we just wrap the existing decorator with another function with arguments we wanna pass to the decorator. Easy right !.

Example below I have a `debug_decorator` that takes parameters and returns a `decorator` decorator that wraps thea original function in a new one. The several nested function in this can make it appear fairly confusing at first but first creating the original decorator before wrapping it to take argumeants will make it easy to code and understand.

```python

from functools import wraps

debug_mode = True


def debug_decorator(debug_mode):
    """Example: Passing arguments to a decorator"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if debug_mode:
                print(f"Function called: {func.__name__}")
            result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator


@debug_decorator(debug_mode)
def func_add(a, b):
    return a + b


func_add(1, 2)
# Function called: func_add
# 3
```

### Stacking decorators

Decorators, as previously indicated, permit the extension of current functionalities. To add extra extensions, it is possible to stack several decorators over a function. The decorator will be piled in the same order as tahe order of execution.

One thing to remember is that if time-sensitive decorators are layered, they should be added at last. So that they can accurately reflect the execution of time without being influeced by other decorators. Decorators that measure the execution of time of a function, for instance, should be the last to be executed.

Now, that we are familiar with a decorator's structure and sophisticated behaviours, we can explore their actual use!

## Usage of Decorators

### Measuring execution time of functions

The `timer` decorator can measure the execution time of the wrapped function by recording the start time and end time of the function execution and printing the results to the console.

In the code snippet below, we measure the `start_time` and `end_time` before and after function execution.

```python
import time

from functools import wraps

def timer(func):
    """Example: Measure execution time of function"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Execution time: {round(end_time - start_time, 4)}")
        return result
    return wrapper


@timer
def func_add(a, b):
    time.sleep(2)
    return a + b


func_add(1, 2)
# Execution time: 2.0064

```

### Debug with logging

The `logging` decorator can be used to log information to a console or log file and is useful for debugging. Below we'll use the `logging` python package to perform logging.

```python

import logging

from datetime import datetime
from functools import wraps

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def logging(func):
    """Example: Logging with decorator"""

    @wraps(func)
    def wrapper(*args, **kwargs):
        log_time = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
        logger.info(f"{log_time}: {func.__name__} called")
        result = func(*args, **kwargs)
        return result
    return wrapper

```

### Registering Plugins

Decorators don’t have to wrap the function they’re decorating. They can also simply register that a function exists and return it unwrapped. This can be used, for instance, to create a light-weight plug-in architecture:

```python
import random
PLUGINS = dict()

def register(func):
    """Register a function as a plug-in"""
    PLUGINS[func.__name__] = func
    return func

@register
def say_hello(name):
    return f"Hello {name}"

@register
def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"

def randomly_greet(name):
    greeter, greeter_func = random.choice(list(PLUGINS.items()))
    print(f"Using {greeter!r}")
    return greeter_func(name)

```

The `@register` decorator simply stores a reference to the decorated function in the global `PLUGINS` dict. Note that you do not have to write an inner function or use @functools.wraps in this example because you are returning the original function unmodified.

The randomly_greet() function randomly chooses one of the registered functions to use. Note that the PLUGINS dictionary already contains references to each function object that is registered as a plugin:

```python
>>> PLUGINS
{'say_hello': <function say_hello at 0x7f768eae6730>,
 'be_awesome': <function be_awesome at 0x7f768eae67b8>}

>>> randomly_greet("Alice")
Using 'say_hello'
'Hello Alice'

```

The main benefit of this simple plugin architecture is that you do not need to maintain a list of which plugins exist. That list is created when the plugins register themselves. This makes it trivial to add a new plugin: just define the function and decorate it with `@register`.

If you are familiar with `globals()` in Python, you might see some similarities to how the plugin architecture works. `globals()` gives access to all global variables in the current scope, including your plugins:

```python

>>> globals()
{..., # Lots of variables not shown here.
 'say_hello': <function say_hello at 0x7f768eae6730>,
 'be_awesome': <function be_awesome at 0x7f768eae67b8>,
 'randomly_greet': <function randomly_greet at 0x7f768eae6840>}

```

Using the `@register` decorator, you can create your own curated list of interesting variables, effectively hand-picking some functions from `globals()`.

### Creating a singleton class

> **Singleton class is a design pattern that restricts the instantiation of a class and ensures that only one instance of the class exists.**

Singleton class is helpful when there is a cap on the number of concurrent users who can use a shared resource or when there is only one point of access to a resource. In python singleton class can be created just using decorator.

Single instantiation can be guaranteed by specifically coding singleton classes. But, utilising decorators is a clever method to reuse the code for several classes if there are several singleton classes.

```python
from functools import wraps


def singleton(cls):
    """Example: Create singleton class with decorator"""
    instances = {}

    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return wrapper


@singleton
class SampleClass:
    def __init__(self):
        pass


singleton_class = SampleClass()
singleton_class2 = SampleClass()
print(singleton_class == singleton_class2)
# True

```

Hope, you now have a solid understanding of decorators fundamentals, practical advice and real-world examples. Other applications include the use of decorator for caching, memory management, and timeout precedures. These decorators are more sophisticated, thus using built-in decorators from python or decorators from 3^<sup>rd</sup> party python packages is preferable to creating them from scratch.

Hope In future , I will come up with new blog posts explaining all the really really complicated python decorators.

## REFERENCES

- [https://www.wikiwand.com/en/Singleton_pattern](https://www.wikiwand.com/en/Singleton_pattern)

- [https://peps.python.org/pep-0318/](https://peps.python.org/pep-0318/)

- [https://realpython.com/primer-on-python-decorators/](https://realpython.com/primer-on-python-decorators/)
