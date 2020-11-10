Title: Testing Go Program: In Nutshell
Date: 2020-08-11 8:00
Modified: 2020-08-11 8:00
Category: Blog
Slug: Testing-in-Go
Summary: Testing Framework in Go is extremely simple and minimal
Tags: Go, Golang, Test, Testing, software development, Programming language
Authors: Aaditya Chapagain
Status: published

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
