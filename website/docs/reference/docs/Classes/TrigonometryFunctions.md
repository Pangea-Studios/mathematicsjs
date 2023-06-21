
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="TrigonometryFunctions"></a>

## TrigonometryFunctions
Class containing all trigometrical functions

**Kind**: global class  

* [TrigonometryFunctions](#TrigonometryFunctions)
    * [.sin(x, [accuracy])](#TrigonometryFunctions.sin) ⇒ <code>number</code>
    * [.cos(x, [accuracy])](#TrigonometryFunctions.cos) ⇒ <code>number</code>
    * [.tan(x, [accuracy])](#TrigonometryFunctions.tan) ⇒ <code>number</code>
    * [.csc(x, [accuracy])](#TrigonometryFunctions.csc) ⇒ <code>number</code>
    * [.sec(x, [accuracy])](#TrigonometryFunctions.sec) ⇒ <code>number</code>
    * [.cot(x, [accuracy])](#TrigonometryFunctions.cot) ⇒ <code>number</code>
    * [.sinh(x)](#TrigonometryFunctions.sinh) ⇒ <code>number</code>
    * [.cosh(x)](#TrigonometryFunctions.cosh) ⇒ <code>number</code>
    * [.tanh(x)](#TrigonometryFunctions.tanh) ⇒ <code>number</code>
    * [.arcsin(x, [accuracy])](#TrigonometryFunctions.arcsin) ⇒ <code>number</code>
    * [.arccos(x, [accuracy])](#TrigonometryFunctions.arccos) ⇒ <code>number</code>
    * [.arctan(x, [accuracy])](#TrigonometryFunctions.arctan) ⇒ <code>number</code>
    * [.arccsc(x, [accuracy])](#TrigonometryFunctions.arccsc) ⇒ <code>number</code>
    * [.arcsec(x, [accuracy])](#TrigonometryFunctions.arcsec) ⇒ <code>number</code>
    * [.arccot(x, [accuracy])](#TrigonometryFunctions.arccot) ⇒ <code>number</code>
    * [.arcsinh(x, [accuracy])](#TrigonometryFunctions.arcsinh) ⇒ <code>number</code>
    * [.arccosh(x, [accuracy])](#TrigonometryFunctions.arccosh) ⇒ <code>number</code>
    * [.arctanh(x, [accuracy])](#TrigonometryFunctions.arctanh) ⇒ <code>number</code>
    * [.arcscsh(x, [accuracy])](#TrigonometryFunctions.arcscsh) ⇒ <code>number</code>
    * [.arcsecsh(x, [accuracy])](#TrigonometryFunctions.arcsecsh) ⇒ <code>number</code>
    * [.arccoth(x)](#TrigonometryFunctions.arccoth) ⇒ <code>number</code>

<a name="TrigonometryFunctions.sin"></a>

### TrigonometryFunctions.sin(x, [accuracy]) ⇒ <code>number</code>
Calculates the sine of an angle in degrees.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the sine of the angle  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the angle in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | precision of the result (default of 10) |

<a name="TrigonometryFunctions.cos"></a>

### TrigonometryFunctions.cos(x, [accuracy]) ⇒ <code>number</code>
Calculates the cosine of a given angle in degrees.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - - the cosine of the angle  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the angle in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | the number of decimal places to calculate the result (default of 10) |

<a name="TrigonometryFunctions.tan"></a>

### TrigonometryFunctions.tan(x, [accuracy]) ⇒ <code>number</code>
Calculates the tangent of a number using the sine and cosine functions.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The tangent of the input number, rounded to the specified accuracy  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The input number in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | The number of decimal places to calculate the result to (default of 10) |

<a name="TrigonometryFunctions.csc"></a>

### TrigonometryFunctions.csc(x, [accuracy]) ⇒ <code>number</code>
Calculates the cosecant of an angle in degrees with a given accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the cosecant of the angle with the given accuracy  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the angle in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | the number of decimal places to approximate the result to (default of 10) |

<a name="TrigonometryFunctions.sec"></a>

### TrigonometryFunctions.sec(x, [accuracy]) ⇒ <code>number</code>
Calculates the secant of a given angle in degrees.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The secant of the given angle  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The angle in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | The number of decimal places to round the result to (default of 10) |

<a name="TrigonometryFunctions.cot"></a>

### TrigonometryFunctions.cot(x, [accuracy]) ⇒ <code>number</code>
Calculates the cotangent of a given angle in degrees.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The cotangent of the angle  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The angle in degrees |
| [accuracy] | <code>number</code> | <code>10</code> | The accuracy of the result (default of 10) |

<a name="TrigonometryFunctions.sinh"></a>

### TrigonometryFunctions.sinh(x) ⇒ <code>number</code>
Calculates the hyperbolic sine of a number.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The hyperbolic sine of the input number  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The number to apply the function to |

<a name="TrigonometryFunctions.cosh"></a>

### TrigonometryFunctions.cosh(x) ⇒ <code>number</code>
Returns the hyperbolic cosine of a number.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The hyperbolic cosine of the number  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The number for which to return the hyperbolic cosine |

<a name="TrigonometryFunctions.tanh"></a>

### TrigonometryFunctions.tanh(x) ⇒ <code>number</code>
Calculates the hyperbolic tangent of a number.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The hyperbolic tangent of the number  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The number to calculate the tangent of |

<a name="TrigonometryFunctions.arcsin"></a>

### TrigonometryFunctions.arcsin(x, [accuracy]) ⇒ <code>number</code>
Computes the arcsine of x using the given accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The computed arcsine value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The value to compute the arcsine for |
| [accuracy] | <code>number</code> | <code>10</code> | The accuracy to use in the computation (default of 10) |

<a name="TrigonometryFunctions.arccos"></a>

### TrigonometryFunctions.arccos(x, [accuracy]) ⇒ <code>number</code>
Calculates the arccosine of a given number with a specified accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The arccosine of the given number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The number to get the arccosine of |
| [accuracy] | <code>number</code> | <code>10</code> | The number of iterations to perform (default of 10) |

<a name="TrigonometryFunctions.arctan"></a>

### TrigonometryFunctions.arctan(x, [accuracy]) ⇒ <code>number</code>
Calculates the arctangent of a given number using the specified accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The calculated arctangent value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The input number |
| [accuracy] | <code>number</code> | <code>10</code> | The accuracy of the resulting calculation (default of 10) |

<a name="TrigonometryFunctions.arccsc"></a>

### TrigonometryFunctions.arccsc(x, [accuracy]) ⇒ <code>number</code>
Calculates the arccsc of a given number using the Maclaurin series expansion.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The arccsc of the given number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The value to calculate the arccsc of |
| [accuracy] | <code>number</code> | <code>10</code> | The number of terms to use in the Maclaurin series expansion (default of 10) |

<a name="TrigonometryFunctions.arcsec"></a>

### TrigonometryFunctions.arcsec(x, [accuracy]) ⇒ <code>number</code>
Calculates arcsecant of a number with given accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the arcsecant of x with given accuracy  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the input value must be greater than or equal to 1 |
| [accuracy] | <code>number</code> | <code>10</code> | the number of iterations to perform for accuracy (default of 10) |

<a name="TrigonometryFunctions.arccot"></a>

### TrigonometryFunctions.arccot(x, [accuracy]) ⇒ <code>number</code>
Calculates the arccotangent of a number to a certain accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the arccotangent of x to the specified accuracy  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the number to calculate the arccotangent of |
| [accuracy] | <code>number</code> | <code>10</code> | the number of iterations to perform in the approximation (default of 10) |

<a name="TrigonometryFunctions.arcsinh"></a>

### TrigonometryFunctions.arcsinh(x, [accuracy]) ⇒ <code>number</code>
Computes the inverse hyperbolic sine (arcsinh) of a given number using the Maclaurin series expansion.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The inverse hyperbolic sine (arcsinh) of the given number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The number to compute the inverse hyperbolic sine of |
| [accuracy] | <code>number</code> | <code>10</code> | The number of terms to use in the Maclaurin series expansion (default of 10) |

<a name="TrigonometryFunctions.arccosh"></a>

### TrigonometryFunctions.arccosh(x, [accuracy]) ⇒ <code>number</code>
Computes the inverse hyperbolic cosine of a number.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The inverse hyperbolic cosine of the given number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | A number whose inverse hyperbolic cosine is to be found |
| [accuracy] | <code>number</code> | <code>10</code> | The number of iterations to perform (default of 10) |

<a name="TrigonometryFunctions.arctanh"></a>

### TrigonometryFunctions.arctanh(x, [accuracy]) ⇒ <code>number</code>
Calculates the arctanh (inverse hyperbolic tangent) of a number up to a certain accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The arctanh value of the input number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | The number to calculate the arctanh of |
| [accuracy] | <code>number</code> | <code>10</code> | The number of iterations to perform to approximate the arctanh value (default of 10) |

<a name="TrigonometryFunctions.arcscsh"></a>

### TrigonometryFunctions.arcscsh(x, [accuracy]) ⇒ <code>number</code>
Calculates the inverse hyperbolic cosecant (arcsinh) of a number up to a given accuracy.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the calculated inverse hyperbolic cosecant of the input number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the number to calculate the inverse hyperbolic cosecant of |
| [accuracy] | <code>number</code> | <code>10</code> | (optional) the number of iterations to use in the approximation (default of 10) |

<a name="TrigonometryFunctions.arcsecsh"></a>

### TrigonometryFunctions.arcsecsh(x, [accuracy]) ⇒ <code>number</code>
Computes the inverse hyperbolic secant of a number with a given accuracy.There is no specific method of finding the inverse hyperbolic secant so this uses the Newton-Raphson method to approximate arcsech(x)

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - the inverse hyperbolic secant of x  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | the number to compute the inverse hyperbolic secant of |
| [accuracy] | <code>number</code> | <code>10</code> | the number of decimal places to return in the result (default of 10) |

<a name="TrigonometryFunctions.arccoth"></a>

### TrigonometryFunctions.arccoth(x) ⇒ <code>number</code>
Calculates the inverse hyperbolic cotangent of the given number.

**Kind**: static method of [<code>TrigonometryFunctions</code>](#TrigonometryFunctions)  
**Returns**: <code>number</code> - The inverse hyperbolic cotangent of the given number  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The number whose inverse hyperbolic cotangent is to be calculated |

