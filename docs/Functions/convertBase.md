<a name="convertBase"></a>

## convertBase(number, fromBase, toBase) ⇒ <code>number</code> \| <code>string</code>
Converts a number from one base to another.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> - - The inputted number in the specified base.  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> \| <code>string</code> | The inputted number to be converted. |
| fromBase | <code>number</code> | The base of the inputted number. |
| toBase | <code>number</code> | The base to convert to. |

**Example** *(Example - Converting Base 10 to Base 36)*  
```js
// returns 'zz'
convertBase(number: 3535, fromBase: 10, toBase: 36)
```
