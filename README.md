# a11y-widget

The **a11y-widget** is a lightweight, customizable accessibility widget built using **vanilla JavaScript** and **CSS**. It provides essential accessibility features such as text size adjustment, color inversion, high contrast mode, and image alt text validation for users. You can easily integrate this widget into any website using a simple CDN link.

## Lighthouse Performance

Unlike many premium accessibility widgets that can **negatively impact** your site's performance metrics, **a11y-widget** is designed to:

- **Improve Lighthouse scores** by automatically fixing common accessibility issues
- **Enhance SEO performance** through proper semantic structure and image optimization
- **Maintain fast page loading** with minimal impact on performance
- **Fix accessibility violations** that premium widgets often miss or even create

## Features

- **Text Size Control**: Increase or decrease the text size for better readability.
- **Color Inversion**: Invert colors to make content more readable for users with visual impairments.
- **High Contrast Mode**: Toggle between normal and high contrast themes for better visibility.
- **Image Alt Text Checker**: Check whether images on the page have alt text, and report missing alt attributes.
- **Automatic Fixes**: Automatically adds missing alt text, improves heading structure, and fixes navigation elements.
- **Touch Target Optimization**: Ensures interactive elements meet size requirements for mobile accessibility.
- **Customizable Position**: Set the widget to appear in any corner of the screen (top-left, top-right, bottom-left, bottom-right).

## Installation

You can integrate the widget into any webpage by including the following **JavaScript** snippet. You can either download the script or link to the hosted version.

### Option 1: Using CDN

Include the following `<script>` tag just before closing the `</body>` tag in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/jerit-baiju/a11y-widget@latest/script.js"></script>
```

### Customization Options

#### Widget Position

You can customize the position of the accessibility toggle button by adding a `position` attribute to the script tag:

```html
<script src="https://cdn.jsdelivr.net/gh/jerit-baiju/a11y-widget@latest/script.js" position="bottom-left"></script>
```

Available position options:
- `top-left`: Places the widget in the top left corner
- `top-right`: Places the widget in the top right corner
- `bottom-left`: Places the widget in the bottom left corner
- `bottom-right`: Places the widget in the bottom right corner (default)
