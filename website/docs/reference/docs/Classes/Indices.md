<a name="Indices"></a>

## Indices
Class for all indices related functions.

**Kind**: global class  
<a name="Indices.power"></a>

### Indices.power(number, [power]) ⇒ <code>number</code>
Returns the inputted number multiplied by itself the specified amount of times

**Kind**: static method of [<code>Indices</code>](#Indices)  
**Returns**: <code>number</code> - The inputted number multiplied by itself the specified amount of times  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| number | <code>number</code> |  | The number to multiply by itself |
| [power] | <code>number</code> \| <code>object</code> | <code>2</code> | The amount of times to multiply number by itself |

**Example** *(Example 1 - Without specifying a power)*  
```js
// returns 25
Indices.power(5)
```
**Example** *(Example 2 - With specifying a power)*  
```js
// returns 8
Indices.power(2, 3)
```
