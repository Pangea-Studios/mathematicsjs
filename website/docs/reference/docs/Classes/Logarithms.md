
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Logarithms"></a>

## Logarithms
Class containing logarithm functions

**Kind**: global class  

* [Logarithms](#Logarithms)
    * [.ln(x, [accuracy])](#Logarithms.ln) ⇒ <code>number</code>
    * [.log(x, [base], [accuracy])](#Logarithms.log) ⇒ <code>number</code>

<a name="Logarithms.ln"></a>

### Logarithms.ln(x, [accuracy]) ⇒ <code>number</code>
Calculates the natural logarithm of a given number using an iterative series approximation.

**Kind**: static method of [<code>Logarithms</code>](#Logarithms)  
**Returns**: <code>number</code> - the natural logarithm of the given number  
**Throws**:

- <code>Error</code> Invalid input. ln(x) is only defined for x > 0


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the number to calculate the natural logarithm of |
| [accuracy] | <code>number</code> | <code>10</code> | the number of terms to use in the series approximation (default of 10) |

<a name="Logarithms.log"></a>

### Logarithms.log(x, [base], [accuracy]) ⇒ <code>number</code>
Calculates the logarithm of a number with a specified base to a given accuracy.

**Kind**: static method of [<code>Logarithms</code>](#Logarithms)  
**Returns**: <code>number</code> - - The calculated logarithm of x with base base, with the specified accuracy.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The number to calculate the logarithm of. |
| [base] | <code>number</code> | <code>10</code> | The base of the logarithm (default of 10) |
| [accuracy] | <code>number</code> | <code>10</code> | The number of decimal places to calculate to (default of 10) |

