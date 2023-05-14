<a name="gcd2"></a>

## gcd2(a, b, [options]) ⇒ <code>number</code>

Find the GCD of 2 numbers

**Kind**: global function  
**Returns**: <code>number</code> - The GCD of the two inputted numbers

| Param          | Type                | Description                          |
| -------------- | ------------------- | ------------------------------------ |
| a              | <code>number</code> | The first number                     |
| b              | <code>number</code> | The second number                    |
| [options]      | <code>Object</code> | Extra options                        |
| [options.base] | <code>number</code> | The base of the numbers you inputted |

**Example** _(Example 1 - Non Prime Numbers)_

```js
// returns 2
gcd(8,12)
```

**Example** _(Example 2 - Prime Numbers)_

```js
// returns 1
gcd(5,7)
```
