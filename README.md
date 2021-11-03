# task1
## Uncollapse CLI tool

## Run app

```
$ git clone https://github.com/vlaadg/task1
```

```
$ cd task1
```

```
$ npm i
```

### Usage example:

CLI tool accept 3 options (short alias and full name):

1.  -i, --input: an input file
2.  -o, --output: an output file
3.  -a, --action: an action uncollapse

Uncollapse input.txt to output.txt with shift 7:

```
$ node uncollapse.js -s 7 -i "./input.txt" -o "./output.txt" -a uncollapse
```

Uncollapse stdin to stdout with shift 7:

```
$ node uncollapse.js -a uncollapse
```
