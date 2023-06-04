:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Circle"></a>

## Circle

Creates a circle

**Kind**: global class  
**See**

-   https://en.wikipedia.org/wiki/Circumference
-   https://en.wikipedia.org/wiki/Area
-   https://en.wikipedia.org/wiki/Pi
-   https://en.wikipedia.org/wiki/Radius
-   https://en.wikipedia.org/wiki/Diameter

*   [Circle](#Circle)
    -   [new Circle(options)](#new_Circle_new)
    -   [.pi](#Circle+pi) ⇒ <code>number</code>

<a name="new_Circle_new"></a>

### new Circle(options)

Creates a circle

**Returns**: <code>Object</code> - All Measurements

| Param                   | Type                | Description                     |
| ----------------------- | ------------------- | ------------------------------- |
| options                 | <code>Object</code> |                                 |
| [options.radius]        | <code>number</code> | The radius of the circle        |
| [options.diameter]      | <code>number</code> | The diameter of the circle      |
| [options.circumference] | <code>number</code> | The circumference of the circle |
| [options.area]          | <code>number</code> | The area of the circle          |

**Example** _(Example 1 - Create Circle by Radius)_

```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ radius: 1 })
```

**Example** _(Example 2 - Create Circle by Diameter)_

```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ diameter: 2 })
```

**Example** _(Example 3 - Create Circle by Circumference)_

```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ circumference: 3.14 })
```

**Example** _(Example 4 - Create Circle by Area)_

```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ area: 3.14 })
```

<a name="Circle+pi"></a>

### circle.pi ⇒ <code>number</code>

Gets the value of pi

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**See**: https://en.wikipedia.org/wiki/Pi  
**Example** _(Example - Get Pi)_

```js
// returns 3.14
Circle.pi
```
