---
title: Which would I choose Rust or Go ? `Caught between a rock and a hard place`
date: 2023-03-30 10:15
modified: 2023-04-01 10:15
category: Blog
summary: Rust for developing systems and performance-critical applications, Go for implicity and scalability of mircro-services and distributed systems.
tags: Machine Learning, Golang, Go, Rust, rustlang, programming languages, programming, tech, technology, technology stack, coding, learning rust, learning golang, 
authors: Aaditya Chapagain
status: published
---

Recently I had a talk with my friends about how they want to rewrite their entire company codebase with Rust, given their most of the codebases are bunch of mircro-services and few bit of AI models. Since I have had fair bit of participation on writing code on both Rust and Go. Here is my understanding of these languages and when to use these languages to get most out of it.

## Table of contents

## `Rust` and `Go` : Caught between a rock and and hard place are you ?

If I must say something, there is no shortage of languages to choose from, each with its own strengths and weaknesses.I think there are around 20 languages currently, that got fair share of market in current world, each can do lots of great things and great part of uniqueness in them. But given Rust and Go ( also known as Golang ),both are relatively new and popular programming languages that have been gaining lof of traction since their release to public world. I'll try to dive into the differences between Rust and Go and possibly we will figure out when to use these languages.

## What is `Rust` mostly known for ?

- **Memory Safety** : Talking about memory safety, Rust is at top of the chart and Its the best thing that rust offers to its users. Rust's `ownership` system ensures memory safety without the overhead of garbage collection, avoiding the likelihood of common programming errors like null pointer exception and buffer overflows.

- **Concurrency** : Built-in support for concurrency with guaranteed Type Safety, enabling developers to write parallel code that is efficient, safe and easier to maintain without fear.

- **Performance** : It compiles to machine code, which can be optimized for performance, making it ideal for systems programming and performance-critical aplication.

- **C Interoperability** : Rust can easily with C, allowing developers to leverage libraries and gradually migrate legecy codebases.

## What I don't like about `Rust` ?

- **Steep Learning Curve** : Concepts like ownership, lifetimes, borrow and smart pointers takes significant time and effort to master, and can be challenging for newcomers to the field.

- **Compilation Time** : Rust is compiled language. So, It needs to compile Before converting the code into working app and during compile time, Rust compiler try to do all the heavey lifting i.e. borrow checking, make sure app is type saftey, make sure there will be no memory leaks at the runtime and everything. Hence, for fairly complex and big application written in rust , it has ridiculous compilation time.

## What is `Go` mostly known for ?

- **Simplicity** : Go's syntax and design principles principles prioritize simplicity and readability, making it easy for developers to write and maintain code.

- **Concurrency** : Go's built-in support for goroutines and channels simplifies concurrent programming, enabling developers to write scalable applications.

- **Compilation speed** : Go compiles quickly, improving developer productivity and speeding up the development process.

- **Strong Ecosystem** : Go has a growing ecosystem of libraries, tools, and frameworks that make it easy to develop web applications, microservices, and command-line utilities.

## What I don't like about `Go` ?

- **Garbage Collection** : Go's garbage collector can introduce latency and performance overhead in certain scenarios.

- **Error Handling** : Go's error handling way is still in pre-mature phase and it makes code hard to understand.

## Rust vs Go: Which is Right for your application ?

When deciding between Rust and Go, consider the specific requirements of your project.

### **When To use Rust**

- You need a high level of control over system resources, with an emphasis on safety and concurrency
- Systems programming, where performance and safety are critical
- WebAssembly development, enabling high-performance web applications
- Cryptography and security, where memory safety is cucial

### **When to use Go**

- Simplicity, readability, and scalability are your primary concerns
- If you have a choice of converting your application code base to rust or Go ( Use Go instead )
- Microservices, where its concurrency support enables scalable, performant applications.
- Command-line utilites, where its simplicity and fast compilation times are beneficial
- Networking and Distributed sytems, where its concurrency model simplifies complex interactions

## What future holds for them

Both Rust and Go have bright futures in the tech sector, with each language carving out its own niche.

### Rust's Future

Rust's focus on safety and performance makes it an attractive choice for critical infrastructure and systems programming. As more companies prioritize security and reliability, Rust is poised to gain adoption in various sectors, such as aerospace, finance, and healthcare. Additionally, Rust's support for WebAssembly will continue to drive its adoption in web development.

### Go's Future

Go's simplicity and strong support for concurrent programming make it well-suited for modern, scalable applications. As microservices and cloud-native development continue to grow in popularity, Go will likely see increased adoption in these areas. Additionally, Go's growing ecosystem and ongoing language improvements will continue to make it an attractive choice for a wide range of applications.

## Finally

In summary, Rust and Go are both powerful languages with unique strengths and weaknesses. Rust is ideal for systems programming and performance-critical applications, while Go excels in simplicity and scalability for web applications, microservices, and distributed systems. By understanding the differences between these languages and the scenarios in which they excel, developers can make informed decisions about which language is best-suited for their needs.

## REFERENCES

- [Rust Ownership's](https://doc.rust-lang.org/stable/book/ch04-00-understanding-ownership.html)
- [Why use Golang](https://www.uptech.team/blog/why-use-golang-for-your-project)
- [Rust to webassembly](https://surma.dev/things/rust-to-webassembly/)
- [Go for Begineers](https://www.freecodecamp.org/news/go-beginners-handbook/)


## How To Get Started with Rust for Beginners ?

- [Comprehensive Rust By google](https://github.com/google/comprehensive-rust)
- [Official Rust Book](https://doc.rust-lang.org/stable/book/title-page.html)
- [Official Rust Book with examples](https://doc.rust-lang.org/rust-by-example/)
- [Official Rust repo for Rust learners](https://github.com/rust-lang/rustlings/)
- [Awesome Rust learning Resources by Awesome People **Github Repo**](https://github.com/ctjhoa/rust-learning)