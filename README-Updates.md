# Sing AI App - UX Updates

## Typography System

The app now uses a standardized typography scale:
- **H1**: 32px (line-height 1.2, semi-bold)
- **Subhead**: 20px (line-height 1.4, medium) 
- **Body**: 16px (line-height 1.6)
- **Body Small**: 14px (line-height 1.6) for tight mobile layouts

### How to change body size for extra-small devices:

In your component, replace `text-body` with `text-body-small` for screens ≤360px:

```tsx
<p className="text-body sm:text-body-small">Your text here</p>
```

Or add responsive classes:
```tsx
<p className="text-body-small sm:text-body">Your text here</p>
```

## Mobile Phone Image Component

The `MobilePhoneImage` component is configurable:

```tsx
import MobilePhoneImage from "@/components/MobilePhoneImage";

<MobilePhoneImage 
  src="/path/to/your/image.jpg"
  alt="Your alt text"
  className="w-64 mx-auto"
/>
```

**To change the image**: Update the `src` prop or change the default in `src/components/MobilePhoneImage.tsx`

## Mobile Navigation

- **Desktop**: Standard horizontal navigation
- **Mobile**: Hamburger menu opens full-screen drawer
- **Accessibility**: Focus trap, ESC to close, proper ARIA attributes
- **Logo**: Links to home page ("/")

## Scroll Reveal Animations

Implemented with `useScrollReveal` hook:

```tsx
import useScrollReveal from "@/hooks/useScrollReveal";

const MyComponent = () => {
  const elementRef = useScrollReveal();
  
  return (
    <div ref={elementRef} className="scroll-reveal">
      Content that reveals on scroll
    </div>
  );
};
```

**Features**:
- Respects `prefers-reduced-motion`
- 60px offset for trigger
- Staggered delays for multiple elements
- Smooth fade/slide-up animation

## Mobile Layout Rules

- **Above the fold**: Only "Download App" CTA shown
- **Cards**: Single column, stacked layout
- **Spacing**: Uses 8/12/16/24px scale
- **Performance**: Intersection Observer, lazy loading

## Accessibility Features

- Focus management in mobile navigation
- ARIA attributes for screen readers
- Keyboard navigation support
- Visible focus states
- Reduced motion support