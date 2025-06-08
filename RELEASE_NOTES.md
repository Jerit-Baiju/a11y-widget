# Release Notes - A11y Widget v2.4.3

## Accessibility Improvements

This release focuses on improving the accessibility of the widget's toggle button to ensure better compatibility with screen readers and keyboard navigation.

### Key Changes

- **Semantic HTML Upgrade**: 
  - Changed the toggle button from a non-semantic `<div>` to a proper `<button>` element
  - This makes the button natively focusable and part of the keyboard tab sequence

- **Screen Reader Support**:
  - Added `aria-label="Open accessibility options"` to provide clear context for screen reader users
  - Added proper ARIA attributes to the SVG icon, including `role="img"` and `aria-hidden="true"`
  - These changes ensure screen readers will announce the button properly

- **Keyboard Accessibility**:
  - Added keyboard event handling to allow users to trigger the button with Enter or Space keys
  - Follows standard accessibility patterns for interactive elements

- **Visual Focus Indicators**:
  - Added a high-contrast focus outline to provide clear visual feedback when the button receives keyboard focus
  - Ensures keyboard navigation is visually apparent to users

## Why This Matters

These improvements make the accessibility widget itself more accessible, allowing users with disabilities to more easily discover and use the tool. Previously, keyboard-only users and screen reader users might have had difficulty locating or activating the widget.

## Other Improvements

- Updated cursor style to properly indicate the element is clickable
- Code organization improvements for better maintainability

---

*A11y Widget is developed by [Marian College](https://mariancollege.org) | [Contribute on GitHub](https://github.com/Jerit-Baiju/a11y-widget/)*
