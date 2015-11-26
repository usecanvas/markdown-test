// Code Spans
// Links
// Auto Links
// Emphasis and double-emphasis

var assert = require('assert');

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

describe('inline code', function() {
  it('should work with backtick delimiters', function() {
    assert.equal(
      md.renderInline('Use the `printf()` function.'),
      'Use the <code>printf()</code> function.'
    );
  });

  it('should work with multiple backticks as opening and closing delimiters', function() {
    assert.equal(
      md.renderInline('``This is still code``'),
      '<code>This is still code</code>'
    );
  });

  it('should allow literal backticks when using multiple backticks as delimiters', function() {
    assert.equal(
      md.renderInline('``There is a literal backtick (`) here.``'),
      '<code>There is a literal backtick (`) here.</code>'
    );
  });

  it('should allow spaces (one after opening, one before closing)', function() {
    assert.equal(
      md.renderInline('A single backtick in a code span: `` ` ``'),
      'A single backtick in a code span: <code>`</code>'
    );

    assert.equal(
      md.renderInline('A backtick-delimited string in a code span: `` `foo` ``'),
      'A backtick-delimited string in a code span: <code>`foo`</code>'
    );
  });

  it('should work without spaces on the outside of delimiters', function() {
    assert.equal(
      md.renderInline('Improving the `ref`-ing'),
      'Improving the <code>ref</code>-ing'
    );

    assert.equal(
      md.renderInline('Improving the status-`link`'),
      'Improving the status-<code>link</code>'
    );

    assert.equal(
      md.renderInline('Improving the status-`link`-widget'),
      'Improving the status-<code>link</code>-widget'
    );
  });
});

describe('links', function() {
  it('should work with an optional title attribute', function() {
    assert.equal(
      md.renderInline('This is [an example](http://example.com/ "Title") inline link.'),
      'This is <a href="http://example.com/" title="Title">an example</a> inline link.'
    );

    assert.equal(
      md.renderInline('[This link](http://example.net/) has no title attribute.'),
      '<a href="http://example.net/">This link</a> has no title attribute.'
    );
  });

  it('should work with relative paths', function() {
    assert.equal(
      md.renderInline('See my [About](/about/) page for details.'),
      'See my <a href="/about/">About</a> page for details.'
    );
  });
});

describe ('emphasis', function() {
  it('should work with single asterisks', function() {
    assert.equal(
      md.renderInline('*single asterisks*'),
      '<em>single asterisks</em>'
    );
  });

  it('should work with single underscores', function() {
    assert.equal(
      md.renderInline('_single underscores_'),
      '<em>single underscores</em>'
    );
  });

  it('should work with double asterisks', function() {
    assert.equal(
      md.renderInline('**double asterisks**'),
      '<strong>double asterisks</strong>'
    );
  });

  it('should work with double underscores', function() {
    assert.equal(
      md.renderInline('__double underscores__'),
      '<strong>double underscores</strong>'
    );
  });

  it('should work when nested', function() {
    assert.equal(
      md.renderInline('***triple emphasis***'),
      '<strong><em>triple emphasis</em></strong>'
    );

    assert.equal(
      md.renderInline('_**triple emphasis**_'),
      '<em><strong>triple emphasis</strong></em>'
    );

    assert.equal(
      md.renderInline('**_triple emphasis_**'),
      '<strong><em>triple emphasis</em></strong>'
    );

    assert.equal(
      md.renderInline('**_triple emphasis_**'),
      '<strong><em>triple emphasis</em></strong>'
    );
  });

  it('should work when nested with spaces', function() {
    assert.equal(
      md.renderInline('**triple _emphasis_ allowed**'),
      '<strong>triple <em>emphasis</em> allowed</strong>'
    );
  });

  it('should only work with underscores when surrounded by spaces', function() {
    assert.equal(
      md.renderInline('Emphasis _is_ a _nice_ touch'),
      'Emphasis <em>is</em> a <em>nice</em> touch'
    );

    assert.equal(
      md.renderInline('Emphasis_is_a_nice_touch'),
      'Emphasis_is_a_nice_touch'
    );

    assert.equal(
      md.renderInline('Emphasis*is*a*nice*touch'),
      'Emphasis<em>is</em>a<em>nice</em>touch'
    );
  });
});
