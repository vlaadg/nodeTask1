const {
  Transform
} = require('stream');
const {
  UncollapseDigits,
  SumMattrix
} = require('./code');

class CustomTransform extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }
  _transform(chunk, _, done) {
    let result = "";
    switch (this.action) {
      case 'uncollapse':
        result = UncollapseDigits(chunk.toString('utf8'));

        break;
      case 'sumMattrix':
        result = SumMattrix(chunk.toString('utf8'));
        break;
      default:
        process.stderr.write(' Erorr: Action not found \n');
        process.exit(1);
    }
    if (this.action === 'uncollapse')
      this.push("Result: " + result + "\n");
    process.stdout.write('Enter the text and press ENTER to uncollapse | press CTRL + C to exit: \n')
    if (this.action === 'sumMattrix')
      this.push("Result: " + result + "\n");
    process.stdout.write('Enter the Mattrix through ":" and press ENTER to sum Mattrix | press CTRL + C to exit: \n');
    done();
  }
}
module.exports = CustomTransform;