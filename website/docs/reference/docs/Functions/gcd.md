<a name="gcd"></a>

## gcd(arr, [options]) ⇒ <code>number</code>

Find the GCD of the inputted numbers

**Kind**: global function  
**Returns**: <code>number</code> - The GCD of the inputted numbers

| Param          | Type                              | Description                          |
| -------------- | --------------------------------- | ------------------------------------ |
| arr            | <code>Array.&lt;number&gt;</code> | The numbers to find the GCD of       |
| [options]      | <code>Object</code>               | Extra options                        |
| [options.base] | <code>number</code>               | The base of the numbers you inputted |

**Example** _(Example 1 - Non Prime Numbers)_

```js
// returns 2
gcd([8,12,16])
```

**Example** _(Example 2 - Prime Numbers)_

```js
// returns 1
gcd([7,13,5])
```
