### 切角效果

`CSS 渐变、background-size`

#### 线性渐变

通过设置背景颜色、渐变角度缺省区域形成切角。

`linear-gradient`线性渐变：

1. 默认从上到下渐变，指定：`to right`-从左至右，`to bottom right` 对角
2. 使用角度，`angle` 位置，通过rgba颜色设置透明度效果；
3. 重复的线性渐变使用`repeating-linear-gradient`
4. 第二个参数开始为渐变颜色，可成对的出现渐变位置，比如：`transparent 15px`,`burlywood 0`

```css
.cut-corner .box:nth-child(2){
    background: linear-gradient(-45deg,transparent 15px,burlywood 0) right,
        linear-gradient(45deg,transparent 15px,burlywood 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
}
```

#### 径向渐变

自中心渐变过程。可设置中心店、形状、带下。

`radial-gradient`径向渐变：

1. 默认中心点、椭圆形渐变到最远角落。
2. 设置形状：`circle` - 原型、`ellipse` - 椭圆形
3. 重复的渐变`repeating-radial-gradient`;

```css
.cut-corner .box:nth-child(3){
    background: radial-gradient(circle at top left,transparent 15px,burlywood 0) top left,
        radial-gradient(circle at top right,transparent 15px,burlywood 0) top right,
        radial-gradient(circle at bottom right,transparent 15px,burlywood 0) bottom right,
        radial-gradient(circle at bottom left,transparent 15px,burlywood 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
```

#### 内联的SVG与`border-image`

通过设置元素边框为矢量图片(矢量图片有助于拉伸)或切角的图片；

`background-clip` 裁剪属性，从指定位置开始绘制。

- `border-box` 默认值，包含border、padding
- `padding-box` 不包含边框；包含padding
- `content-box` 不包含border、padding。内容裁剪

```css
.cut-corner .box:nth-child(4){
    background-clip: padding-box;
    border:15px solid burlywood;
    border-image: 1 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="burlywood"><polygon points="0,1,1,0,2,0,3,1,3,2,2,3,1,3,0,2"/></svg>');
}
```

#### 通过路径裁剪方式

`clip-path` 裁剪元素的可见区域，部分显示。

- `url()` 元素剪切的路径。
- `<basic-shape>` 剪切形状，`inset` - 长方形、`circle` - 圆、`ellipse` - 椭圆、`polygon()` - 折线，规则，`path` - SVG路径
- `<geometry-box>` 剪切参考盒模型，`margin-box/border-box/padding-box/content-box/fill-box/stroke-box/view-box`

```css
.cut-corner .box:nth-child(5){
    clip-path: polygon(
        20px 0,calc(100% - 20px) 0, 100% 20px,
        100% calc(100% - 20px),calc(100% - 20px) 100%,
        20px 100%,0 calc(100% - 20px),0 20px
    );
}
```

#### 将来新出的属性`corner-shape` 设置切角效果。