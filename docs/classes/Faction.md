<a name="Faction"></a>

## Faction
Creates a Fraction.

**Kind**: global class  

* [Faction](#Faction)
    * [new Faction(numerator, denominator)](#new_Faction_new)
    * [.simplified()](#Faction+simplified) ⇒ <code>Array.&lt;number&gt;</code>
    * [.decimal()](#Faction+decimal) ⇒ <code>number</code>
    * [.percentage()](#Faction+percentage) ⇒ <code>number</code>
    * [.toString()](#Faction+toString) ⇒ <code>string</code>
    * [.toSimplifiedString()](#Faction+toSimplifiedString) ⇒ <code>string</code>

<a name="new_Faction_new"></a>

### new Faction(numerator, denominator)
Creates the fraction


| Param | Type | Description |
| --- | --- | --- |
| numerator | <code>number</code> | The numerator(upper number) of the fraction |
| denominator | <code>number</code> | The denominator(lower number) of the fraction |

**Example** *(Example - Create Fraction)*  
```js
// returns { numerator: 3, denominator: 6 }
new Fraction(3,6)
```
<a name="Faction+simplified"></a>

### faction.simplified() ⇒ <code>Array.&lt;number&gt;</code>
Simplify the number

**Kind**: instance method of [<code>Faction</code>](#Faction)  
**Returns**: <code>Array.&lt;number&gt;</code> - Simplified Fraction  
**Example** *(Example - Simplify Fraction)*  
```js
// Returns [1,2]
const myFraction = new Fraction(3,6)
myFraction.simplified()
```
<a name="Faction+decimal"></a>

### faction.decimal() ⇒ <code>number</code>
Converts the fraction to a decimal

**Kind**: instance method of [<code>Faction</code>](#Faction)  
**Returns**: <code>number</code> - Decimal  
**Example** *(Example - Convert Fraction to Decimal)*  
```js
// returns 0.5
const myFraction = new Fraction(3,6)
myFraction.decimal()
```
<a name="Faction+percentage"></a>

### faction.percentage() ⇒ <code>number</code>
Converts the fraction to a percentage

**Kind**: instance method of [<code>Faction</code>](#Faction)  
**Returns**: <code>number</code> - Percentage  
**Example** *(Example - Convert Fraction to Percentage)*  
```js
// returns 50
const myFraction = new Fraction(3,6)
myFraction.percentage()
```
<a name="Faction+toString"></a>

### faction.toString() ⇒ <code>string</code>
Converts the fraction to a string

**Kind**: instance method of [<code>Faction</code>](#Faction)  
**Returns**: <code>string</code> - Fraction String  
**Example** *(Example - Convert Fraction to String)*  
```js
// returns "3/6"
const myFraction = new Fraction(3,6)
myFraction.toString()
```
<a name="Faction+toSimplifiedString"></a>

### faction.toSimplifiedString() ⇒ <code>string</code>
Converts the fraction to a simplified string.

**Kind**: instance method of [<code>Faction</code>](#Faction)  
**Returns**: <code>string</code> - Simplified Fraction String  
**Example** *(Example - Convert Fraction Simplified String)*  
```js
// returns "1/2"
const myFraction = new Fraction(3,6)
myFraction.toSimplifiedString()
```
