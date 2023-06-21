
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Equations"></a>

## Equations
Class containing equation utilities

**Kind**: global class  

* [Equations](#Equations)
    * [.parseEquation(equation, variables)](#Equations.parseEquation) ⇒ <code>Array.&lt;(string\|number)&gt;</code> \| <code>&#x27;Error&#x27;</code>
    * [.evaluate(equation, variables)](#Equations.evaluate) ⇒ <code>number</code> \| <code>&#x27;Error&#x27;</code>
    * [.binomialCoefficient(n, k)](#Equations.binomialCoefficient) ⇒ <code>number</code>

<a name="Equations.parseEquation"></a>

### Equations.parseEquation(equation, variables) ⇒ <code>Array.&lt;(string\|number)&gt;</code> \| <code>&#x27;Error&#x27;</code>
Parses a mathematical equation string with given variables.

**Kind**: static method of [<code>Equations</code>](#Equations)  
**Returns**: <code>Array.&lt;(string\|number)&gt;</code> \| <code>&#x27;Error&#x27;</code> - the result of the evaluation or 'Error' if the equation is invalid  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>string</code> | the equation to be parsed |
| variables | <code>Object</code> | an object with variable names and their values |

<a name="Equations.evaluate"></a>

### Equations.evaluate(equation, variables) ⇒ <code>number</code> \| <code>&#x27;Error&#x27;</code>
Evaluates a mathematical equation string with given variables.

**Kind**: static method of [<code>Equations</code>](#Equations)  
**Returns**: <code>number</code> \| <code>&#x27;Error&#x27;</code> - the result of the evaluation or 'Error' if the equation is invalid  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>string</code> | the equation to be evaluated |
| variables | <code>Object</code> | an object with variable names and their values |

<a name="Equations.binomialCoefficient"></a>

### Equations.binomialCoefficient(n, k) ⇒ <code>number</code>
Calculates the binomial coefficient of two given numbers.

**Kind**: static method of [<code>Equations</code>](#Equations)  
**Returns**: <code>number</code> - The calculated binomial coefficient.  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The total number of items. |
| k | <code>number</code> | The number of items to choose. |

