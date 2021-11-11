const fs = require('fs');
const stream = require('stream');
const program = require('commander');
const util = require('util');

const valid = require('./module/valid');
const CustomTransform = require('./module/transform');
const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
  const {
    input,
    output,
    action
  } = program.opts();
  process.stdout.write('Enter the text and press ENTER to uncollapse ||' +
    'enter the Mattrix through ":" and press ENTER to sum Mattrix | press CTRL + C to exit: \n')

  const ReadableStream = !valid.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
  const WriteableStream = !valid.isEmpty(output) ? fs.createWriteStream((output), {
    flags: 'a'
  }) : process.stdout;


  try {
    await pipeline(
      ReadableStream,
      new CustomTransform(action),
      WriteableStream
    );
    if (action === "uncollapse")
      process.stdout.write(`Text ${action}d\n`);
    if (action === "sumMattrix")
      process.stdout.write(`Action complete\n`);
  } catch (e) {
    process.stderr.write(` ${e.message}\n`);
    process.exit(1);
  }
}

process.stdin.setEncoding('utf8');

program
  .requiredOption('-a --action <action>', 'An action complete')
  .option('-i, --input <filename>', 'An input file')
  .option('-o, --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);