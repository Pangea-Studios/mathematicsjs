
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Logarithms"></a>

## Logarithms
Class containing logarithm functions

**Kind**: global class  

* [Logarithms](#Logarithms)
    * [.ln(x, [options])](#Logarithms.ln) ⇒ <code>number</code>
    * [.log(x, [options])](#Logarithms.log) ⇒ <code>number</code>

<a name="Logarithms.ln"></a>

### Logarithms.ln(x, [options]) ⇒ <code>number</code>
Calculates the natural logarithm of a given number using an iterative series approximation.

**Kind**: static method of [<code>Logarithms</code>](#Logarithms)  
**Returns**: <code>number</code> - the natural logarithm of the given number  
**Throws**:

- <code>Error</code> Invalid input. ln(x) is only defined for x > 0


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the number to calculate the natural logarithm of |
| [options] | <code>object</code> |  | options |
| [options.accuracy] | <code>number</code> | <code>10</code> | precision of the result (default of 10) |
| [options.cache] | <code>boolean</code> | <code>true</code> | cache the result |
| [options.a] | <code>number</code> | <code>1</code> | the starting value |

<a name="Logarithms.log"></a>

### Logarithms.log(x, [options]) ⇒ <code>number</code>
Calculates the logarithm of a number with a specified base to a given accuracy.

**Kind**: static method of [<code>Logarithms</code>](#Logarithms)  
**Returns**: <code>number</code> - - The calculated logarithm of x with base base, with the specified accuracy.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The number to calculate the logarithm of |
| [options] | <code>object</code> |  | options |
| [options.accuracy] | <code>number</code> | <code>10</code> | precision of the result (default of 10) |
| [options.cache] | <code>boolean</code> | <code>true</code> | cache the result |
| [options.a] | <code>number</code> | <code>1</code> | the starting value |

