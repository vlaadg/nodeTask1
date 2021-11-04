const { Transform } = require('stream');

const {UncollapseDigits, SumMattrix} = require('./code');

class CustomTransform extends Transform {
    constructor(action) {
      super();
      this.action = action;
    }
    
    _transform(chunk, _, done) {
      let result = '';
  
      switch (this.action) {
        case 'uncollapse':
          result = UncollapseDigits(chunk.toString('utf8'));
          break;
          case 'sumMattrix':
          result = SumMattrix();
          break;
        default:
          process.stderr.write(' Erorr: Action not found\n');
          process.exit(1);
      }
  
      this.push(result);
      done();
    }
  }
  module.exports = CustomTransform;