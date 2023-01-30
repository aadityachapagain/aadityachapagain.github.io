---
title: Testing Go Program in Nutshell.
date: 2020-08-11 8:00
modified: 2020-08-11 8:00
category: Blog
slug: testing-in-go-nutshell
summary: Testing Framework in Go is extremely simple and minimal
tags: Go, Golang, Test, Testing, software development, Programming language, TDD
authors: Aaditya Chapagain
status: published
---

## Table of contents

Testing, by which we implicitly mean _automated testing_, is the practice of writing small programs that check that the code under test ( the production code ) behaved as expected for certain input pools, which is usually either carefully chosen to exercise certain features or randomized to ensure broad coverage.

Go's approach to testing seems rather low-tech in comparison to some big language like java, c++. It relies on one command, `go test`, and a set of conventions for writing test functions that go test can run. The comparatively lightweight mechanism is effective for pure testing, and it extends naturally to benchmarks and systematic example for documentation. The best thing about writing test code in Go is , that test code is no different from code if we intend to implement API we are testing.We focus on short functions that focus on one part of the task.We have to be careful about boundary conditions. think about data structures, and reason about what results a computation should produce from suitable inputs. But is the same as writing ordinary Go code.

# The GO test Tool

Testing in Go starts with `go test` subcommand i.e. test driver for Go packages that are organized according to certain conventions. `go test` command specifically looks and execute files that ends with **\_test.go** which are not part of the package when built by `go build `.

The Go test files contains three kinds of special functions :

- A _test function_: Function which name starts with `Test`. This function exercises some program logic for correct behaviour; subcommand `go test` calls the test function and reports the result which is either `PASS` or `FAIL`.

- A _benchmark function_: It has the name beginning with `Benchmark` and measures the performance of some operations; subcommand `go test` reports the mean execution time of the operation.

- An _example function_: Its name starts with `Example` provides machine-checked documentation.

The `go test` tool scans the \*\_test.go files for these special functions, generates a temporary main package that calls them all in the proper way, builds and runs it, reports the result, and then cleans up.

# Test Functions

Each test file must import the testing package. Test functions has following signature :

```go
func TestName(t *testing.T) {
  // ..
}

```

Test function names must begin with Test; The optional suffix Name must begin with a capital letter:

```go
func TestSin(t *testing.T) { // ... }
func TestCos(t *testing.T) { // ... }
```

The t parameter provides methods for reporting test failures and logging additional information. Lets create a new package palindrome containing a single function IsPalindrome that reports whether a string a string reads same forward and backward.

```go
package palindrome

func IsPalidrome(s string) bool {
  for i := range s {
    if s[i] != s[len(s) - 1 - i] {
      return false
    }
  }
  return true
}

```

In the same directory, the palindrome_test.go contains two test functions named TestPalindrome and TestNonPalindrome. Each check that IsPalindrome gives the right answer for a single input and reports failures using t.Errorf:

```go
package palindrome

func TestPalindrome(t *testing.T) {
  if !IsPalindrome("detartrated") {
    t.Errorf(`IsPalindrome("detartrated") = false`)
  }
  if !IsPalindrome("kayak") {
    t.Errorf(`IsPalindrome("kayak") = false`)
  }
}

func TestNonPalindrome(t *testing.T) {
  if IsPalindrome("palindrome") {
    t.Error(`IsPalindrome("palindrome") = true`)
  }
}

```

Now,we already have test code to test our functionality, we can use go test command to run tests in go.
Remember `go test palindrome` will run the package level test.For this to work you have to place your package in either `$GOROOT` or `$GOPATH` directory.
In our case we can test our functionlity by going into pacakge directory.

```bash
> cd <path_to_project_dir>/palindrome
> go test

PASS
ok  	<path_to_project_dir>/palindrome	0.001s
```

To look into more details on test function, To see which one failed and which one succeed, we can use `-v` flag , which will prints the name and execution time of each test in the package.

```bash
> go test -v

=== RUN TestPalindrome
--- PASS: TestPalindrome (0.00s)
=== RUN TestNonPalindrome
--- PASS: TestNonPalindrome (0.00s)
=== RUN TestFrenchPalindrome
--- FAIL: TestFrenchPalindrome (0.00s)
word_test.go:28: IsPalindrome("été") = false
=== RUN TestCanalPalindrome
--- FAIL: TestCanalPalindrome (0.00s)
word_test.go:35: IsPalindrome("A man, a plan, a canal: Panama") = false
FAIL
exit status 1
FAIL  <path_to_project_dir>/palindrome 0.001s

```

and the -run flag, whose argument is a regular expression, causes go test to run only those tests whose function name matches the patter:

```bash

> go test -v -run="French|Canal"
=== RUN TestFrenchPalindrome
--- FAIL: TestFrenchPalindrome (0.00s)
word_test.go:28: IsPalindrome("été") = false
=== RUN TestCanalPalindrome
--- FAIL: TestCanalPalindrome (0.00s)
word_test.go:35: IsPalindrome("A man, a plan, a canal: Panama") = false
FAIL
exit status 1
FAIL  <path_to_project_dir>/palindrome 0.001s

```

# Benchmark Function

Benchmarking is the practice of measuring the performance of a program on a fixed workload. In Go, a benchmark function look like a test function, but with the
Benchmark prefix and a *testing.B parameter that provides most of the same methods as a *testing.T, plus few extra related performance measurement.It also exposes 
an Integer field N, which specifies the number of times to perform the operation being measured.

Here's a benchmark for IsPalindrome that calls it N times in a loop.

```go
func BenchmarkIsPalindrome(b *testing.B) {
  for i := 0; i < b.N; i++ {
    IsPalindrome("A man, a plan, a canal: Panama")
  }
}
```

Unlike tests, by default no benchmarks are run. The argument to the -bench flag selects which benchmark to run. It is regular expression matching the names of Benchmark functions, with a default value that matches none of the functions. The "." pattern causes it to match all benchmark functions in package. 

```bash
> go test -bench=.
goos: linux
goarch: amd64
BenchmarkIsPalindrome-12    	 4377900	       301 ns/op
PASS
ok  	<path_to_project_dir>/palindrome	1.598s
```

The benchmark name’s numeric suffix, 12 here , indicates the value of GOMAXPROCS, which is important for concurrent benchmarks.

The report tells us that each call to *IsPalindrome* took about 0.301 microseconds, averaged over 4377900 runs. Since the benchmark runner initially has no idea how long the operation takes, it make some initial measuremetns using small values of N and then extrapolates to a value large enough for a stable timing measurement to be made.
