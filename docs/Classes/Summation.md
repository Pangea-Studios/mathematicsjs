
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Summation"></a>

## Summation
Class containing summation functions

**Kind**: global class  

* [Summation](#Summation)
    * [.AdditiveSummation(equation, start, end, interval)](#Summation.AdditiveSummation) ⇒ <code>number</code>
    * [.MultiplicativeSummation(equation, start, end, interval)](#Summation.MultiplicativeSummation) ⇒ <code>number</code>

<a name="Summation.AdditiveSummation"></a>

### Summation.AdditiveSummation(equation, start, end, interval) ⇒ <code>number</code>
Calculates the additive summation of an equation for a given range and interval.

**Kind**: static method of [<code>Summation</code>](#Summation)  
**Returns**: <code>number</code> - The result of the additive summation of the equation for the given range and interval.  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>string</code> | The equation to be evaluated, can use variable 'n'. |
| start | <code>number</code> | The starting value for variable 'n'. |
| end | <code>number</code> | The ending value for variable 'n'. |
| interval | <code>number</code> | The increment between each value of 'n'. |

<a name="Summation.MultiplicativeSummation"></a>

### Summation.MultiplicativeSummation(equation, start, end, interval) ⇒ <code>number</code>
Calculates the multiplicative summation of the given equation for a given range.

**Kind**: static method of [<code>Summation</code>](#Summation)  
**Returns**: <code>number</code> - the result of the multiplicative summation  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>string</code> | the equation to be evaluated |
| start | <code>number</code> | the start value of the range |
| end | <code>number</code> | the end value of the range |
| interval | <code>number</code> | the interval between each value in the range |

