
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Indices"></a>

## Indices
Class for all indices related functions.

**Kind**: global class  

* [Indices](#Indices)
    * [.power(number, [power])](#Indices.power) ⇒ <code>number</code>
    * [.root(number, root)](#Indices.root) ⇒ <code>number</code>

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
<a name="Indices.root"></a>

### Indices.root(number, root) ⇒ <code>number</code>
Calculates the nth root of a given number.

**Kind**: static method of [<code>Indices</code>](#Indices)  
**Returns**: <code>number</code> - the result of the nth root calculation.  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | the number to calculate the nth root of. |
| root | <code>number</code> | the root to use for the calculation. |

