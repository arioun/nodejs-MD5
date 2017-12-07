var md5 = require('./md5.js');
var assert = require('assert');

describe('md5', function () {

  it('如果输入‘undefined’应该报错', function() {
    assert.throws(function() {
      md5(undefined);
    });
  });

  it('应该允许未定义的哈希字符串', function() {
    assert.equal('5e543256c480ac577d30f76f9120eb74', md5('undefined'));
  });

  it('如果输入`null`应该报错', function() {
    assert.throws(function() {
      md5(null);
    });
  });

  it('应该返回"message"的正确MD5值', function() {
    assert.equal('78e731027d8fd50ed642340b7c9a63b3', md5('message'));
  });

  it('输入两次随机数不应该返回同样的散列值', function() {
    var msg1 = Math.floor((Math.random() * 100000) + 1) + (new Date).getTime();
    var msg2 = Math.floor((Math.random() * 100000) + 1) + (new Date).getTime();

    if (msg1 !== msg2) {
      assert.notEqual(md5(msg1), md5(msg2));
    } else {
      assert.equal(md5(msg1), md5(msg1));
    }
  });

  it('应该支持Node.js的Buffers', function() {
    var buffer = new Buffer('message áßäöü', 'utf8');

    assert.equal(md5(buffer), md5('message áßäöü'));
  })

  it('应该可以使用一个二进制编码字符串', function() {
    var hash1 = md5('abc', { asString: true });
    var hash2 = md5(hash1 + 'a', { asString: true, encoding : 'binary' });
    var hash3 = md5(hash1 + 'a', { encoding : 'binary' });
    assert.equal(hash3, '131f0ac52813044f5110e4aec638c169');
  });
});
