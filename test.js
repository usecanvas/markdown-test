// Code Spans
// Links
// Auto Links
// Emphasis and double-emphasis

var assert = require('assert');

describe('inline code', function() {
  it('should work with backtick delimiters', function() {
    assert.equal(
      'Use the `printf()` function.',
      'Use the <code>printf()</code> function.'
    );
  });

  it('should work with multiple backticks as opening and closing delimiters', function() {
    assert.equal(
      '``This is still code``',
      '<code>This is still code</code>'
    );
  });

  it('should allow literal backticks when using multiple backticks as delimiters', function() {
    assert.equal(
      '``There is a literal backtick (`) here.``',
      '<code>There is a literal backtick (`) here.</code>'
    );
  });

  it('should allow spaces (one after opening, one before closing)', function() {
    assert.equal(
      'A single backtick in a code span: `` ` ``',
      'A single backtick in a code span: <code>`</code>'
    );

    assert.equal(
      'A backtick-delimited string in a code span: `` `foo` ``',
      'A backtick-delimited string in a code span: <code>`foo`</code>'
    );
  });

  it('should work without spaces on the outside of delimiters', function() {
    assert.equal(
      'Improving the `ref`-ing',
      'Improving the <code>ref</code>-ing'
    );

    assert.equal(
      'Improving the satus-`link`',
      'Improving the status-<code>link</code>'
    );

    assert.equal(
      'Improving the satus-`link`-widget',
      'Improving the status-<code>link</code>-widget'
    );
  });
});
