
:::caution

This reference has been auto-generated and therefore is not guaranteed to be using the stable release.

:::

<a name="Circle"></a>

## Circle
Creates a circle.

**Kind**: global class  
**See**

- https://en.wikipedia.org/wiki/Circumference
- https://en.wikipedia.org/wiki/Area
- https://en.wikipedia.org/wiki/Pi
- https://en.wikipedia.org/wiki/Radius
- https://en.wikipedia.org/wiki/Diameter

<a name="new_Circle_new"></a>

### new Circle(options)
Creates a circle.

**Returns**: <code>Object</code> - All Measurements  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| [options.radius] | <code>number</code> | The radius of the circle |
| [options.diameter] | <code>number</code> | The diameter of the circle |
| [options.circumference] | <code>number</code> | The circumference of the circle |
| [options.area] | <code>number</code> | The area of the circle |

**Example** *(Example 1 - Create Circle by Radius)*  
```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ radius: 1 })
```
**Example** *(Example 2 - Create Circle by Diameter)*  
```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ diameter: 2 })
```
**Example** *(Example 3 - Create Circle by Circumference)*  
```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ circumference: 3.14 })
```
**Example** *(Example 4 - Create Circle by Area)*  
```js
// returns { radius: 1, diameter: 2, circumference: 3.14, area: 3.14 }
new Circle({ area: 3.14 })
```
