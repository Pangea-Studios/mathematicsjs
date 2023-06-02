:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Fraction"></a>

## Fraction

Creates a Fraction.

**Kind**: global class

-   [Fraction](#Fraction)
    -   [new Fraction(numerator, denominator)](#new_Fraction_new)
    -   [.simplified()](#Fraction+simplified) ⇒ <code>Array.&lt;number&gt;</code>
    -   [.decimal()](#Fraction+decimal) ⇒ <code>number</code>
    -   [.percentage()](#Fraction+percentage) ⇒ <code>number</code>
    -   [.toString()](#Fraction+toString) ⇒ <code>string</code>
    -   [.toSimplifiedString()](#Fraction+toSimplifiedString) ⇒ <code>string</code>

<a name="new_Fraction_new"></a>

### new Fraction(numerator, denominator)

Creates the fraction

| Param       | Type                | Description                                   |
| ----------- | ------------------- | --------------------------------------------- |
| numerator   | <code>number</code> | The numerator(upper number) of the fraction   |
| denominator | <code>number</code> | The denominator(lower number) of the fraction |

**Example** _(Example - Create Fraction)_

```js
// returns { numerator: 3, denominator: 6 }
new Fraction(3,6)
```

<a name="Fraction+simplified"></a>

### fraction.simplified() ⇒ <code>Array.&lt;number&gt;</code>

Simplify the number

**Kind**: instance method of [<code>Fraction</code>](#Fraction)  
**Returns**: <code>Array.&lt;number&gt;</code> - Simplified Fraction  
**Example** _(Example - Simplify Fraction)_

```js
// Returns [1,2]
const myFraction = new Fraction(3,6)
myFraction.simplified()
```

<a name="Fraction+decimal"></a>

### fraction.decimal() ⇒ <code>number</code>

Converts the fraction to a decimal

**Kind**: instance method of [<code>Fraction</code>](#Fraction)  
**Returns**: <code>number</code> - Decimal  
**Example** _(Example - Convert Fraction to Decimal)_

```js
// returns 0.5
const myFraction = new Fraction(3,6)
myFraction.decimal()
```

<a name="Fraction+percentage"></a>

### fraction.percentage() ⇒ <code>number</code>

Converts the fraction to a percentage

**Kind**: instance method of [<code>Fraction</code>](#Fraction)  
**Returns**: <code>number</code> - Percentage  
**Example** _(Example - Convert Fraction to Percentage)_

```js
// returns 50
const myFraction = new Fraction(3,6)
myFraction.percentage()
```

<a name="Fraction+toString"></a>

### fraction.toString() ⇒ <code>string</code>

Converts the fraction to a string

**Kind**: instance method of [<code>Fraction</code>](#Fraction)  
**Returns**: <code>string</code> - Fraction String  
**Example** _(Example - Convert Fraction to String)_

```js
// returns "3/6"
const myFraction = new Fraction(3,6)
myFraction.toString()
```

<a name="Fraction+toSimplifiedString"></a>

### fraction.toSimplifiedString() ⇒ <code>string</code>

Converts the fraction to a simplified string

**Kind**: instance method of [<code>Fraction</code>](#Fraction)  
**Returns**: <code>string</code> - Simplified Fraction String  
**Example** _(Example - Convert Fraction Simplified String)_

```js
// returns "1/2"
const myFraction = new Fraction(3,6)
myFraction.toSimplifiedString()
```
