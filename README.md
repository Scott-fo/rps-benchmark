# rps-benchmark

## Explanation

Just playing around comparing typescript, rust, and go servers with a simple rock-paper-scissors game.
Not a scientific test, I am only running this on my own hardware and not using a designated server to test in same conditions. 
Also practicing DDD to improve my code quality.

## Method

- Create a rock-paper-scissors implementation using different languages.
- Run the server on my local machine (one at a time).
- Use [hey](https://github.com/rakyll/hey) to benchmark.

Tested using 1000000 (1 million) requests (fixed)
and varied the number of concurrent requests each server could handle:

- 100
- 1000
- 10000

## Code design

Go is the easiest to build a high performance server for due to the nature of go routines. My understanding is that the go runtime will automatically initialize a pool of workers equivalent to the number of logical cpu cores available on my machine (12).

For my nodejs server, I have used the cluster package to make a http server that will take advantage of the multiple processors available. This should help my nodejs server to be able to compete with my rust and go implementations rather than leaving it to compete only with a single thread.

My rust server uses actix_web which supports multithreading out of the box.
