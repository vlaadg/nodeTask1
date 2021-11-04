# task1
## Uncollapse CLI tool

## Run app

```
$ git clone https://github.com/vlaadg/nodeTask1
```

```
$ cd nodeTask1
```

```
$ npm i
```

### Usage example:

CLI tool accept 3 options (short alias and full name):

1.  -i, --input: an input file
2.  -o, --output: an output file
3.  -a, --action: an action complete

Uncollapse input.txt to output.txt:

```
$ node uncollapse.js -i "./input.txt" -o "./output.txt" -a uncollapse
```

Uncollapse stdin to stdout:

```
$ node uncollapse.js -a uncollapse
```
