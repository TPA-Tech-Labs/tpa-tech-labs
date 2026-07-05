# Visual Components Guide

## 🎨 Complete Visual Component Reference

This guide provides a comprehensive overview of all visual and diagram components in the TPA website.

---

## 📦 Component Inventory

### 1. Product Animations (`ProductAnimations.tsx`)

#### **UpgradeAnimation**
Real-time migration progress indicator
- **Type**: Animated progress bar
- **Features**:
  - Progress percentage (0-100%)
  - File count tracker (0/847)
  - File-by-file status list
  - Success message on completion
  - Auto-loops every 2 seconds
- **Colors**: Cyan (#00C6FF) → Green (#10B981) on completion
- **Use Case**: Shows live migration progress

```tsx
<UpgradeAnimation />
```

#### **SchedulerAnimation**
Calendar slot availability display
- **Type**: Grid-based calendar
- **Features**:
  - 6 time slots (09:00 - 17:00)
  - Booked vs. free indicators
  - Active slot highlighting
  - Conflict reduction metric
  - Animated slot cycling
- **Colors**: Blue (#0072FF) for booked, Cyan (#00C6FF) for active
- **Use Case**: Demonstrates intelligent scheduling

```tsx
<SchedulerAnimation />
```

#### **AgentAnimation**
Conversational agent workflow
- **Type**: Chat interface
- **Features**:
  - User/agent message bubbles
  - Typing indicator (3 dots)
  - Sequential message appearance
  - Auto-loop with reset
  - 4-message conversation flow
- **Colors**: Blue gradient for agent, Purple for user
- **Use Case**: Shows agent interaction pattern

```tsx
<AgentAnimation />
```

#### **ObservatoryAnimation**
Live system metrics monitoring
- **Type**: Metrics dashboard
- **Features**:
  - 3 real-time metrics (latency, error rate, req/s)
  - Animated progress bars
  - Anomaly spike simulation
  - Status indicators (nominal/anomaly)
  - Color-coded alerts
- **Colors**: Cyan/Green (normal) → Red (#EF4444) on anomaly
- **Use Case**: Demonstrates anomaly detection

```tsx
<ObservatoryAnimation />
```

---

### 2. Architecture Diagrams (`ProductAnimations.tsx`)

#### **UpgradeDiagram**
Migration pipeline visualization
- **Type**: Horizontal flow diagram
- **Structure**:
  ```
  Legacy Code → AI Analysis → Refactoring → Modern Code
  ```
- **Components**:
  - 4 stage boxes with icons
  - Directional arrows
  - Feature badges (AST Analysis, Test Generation, Dependency Updates)
- **Layout**: Horizontal flow with centered alignment
- **Colors**: Cyan → Blue → Purple → Green gradient

```tsx
<UpgradeDiagram />
```

#### **SchedulerDiagram**
Hub-and-spoke architecture
- **Type**: Radial network diagram
- **Structure**:
  ```
       Calendars
           |
  Teams - AI Engine - Timezones
           |
      Preferences
  ```
- **Components**:
  - Central AI hub (120px circle)
  - 5 satellite nodes (70px circles)
  - Connecting lines (dashed)
  - Performance stats grid
- **Layout**: Circular with 72° spacing
- **Colors**: Multi-color nodes with gradient center

```tsx
<SchedulerDiagram />
```

#### **AgentStudioDiagram**
Development lifecycle stages
- **Type**: Vertical workflow
- **Structure**:
  ```
  1. Design   (Visual workflow builder)
  2. Test     (Built-in evaluation suite)
  3. Deploy   (One-click deployment)
  4. Monitor  (Real-time analytics)
  ```
- **Components**:
  - Numbered step indicators
  - Stage cards with icons
  - Progress arrows
  - Model support badges
- **Layout**: Vertical stack with left-aligned numbers
- **Colors**: Cyan → Blue → Purple → Light Purple gradient

```tsx
<AgentStudioDiagram />
```

#### **ObservatoryDiagram**
Layered observability stack
- **Type**: 3-tier architecture
- **Structure**:
  ```
  Layer 1: Data Sources (Metrics, Logs, Traces, Events)
           ↓
  Layer 2: AI Processing (ML Models, Anomaly Detection, Root Cause AI)
           ↓
  Layer 3: Insights (Alerts, Predictions, Recommendations)
  ```
- **Components**:
  - 4 data source cards
  - AI processing panel
  - 3 insight cards
  - Performance metrics bar
- **Layout**: Vertical layers with arrows
- **Colors**: Gray → Cyan/Blue → Red/Orange/Green

```tsx
<ObservatoryDiagram />
```

---

### 3. Product Showcase (`ProductShowcase.tsx`)

#### **Main Component**
Interactive product demonstration section
- **Type**: Tabbed interface with split layout
- **Features**:
  - 4 product tabs
  - Animated transitions
  - Dynamic color theming
  - Feature checklist
  - Live visual demos
- **Layout**: 50/50 split (description | visual)
- **Responsive**: Grid layout

```tsx
<ProductShowcase />
```

#### **UpgradeVisual**
Code comparison showcase
- **Components**:
  - Before/After code panels
  - Syntax-highlighted code
  - Migration statistics (3 metrics)
- **Colors**: Red (before) vs. Green (after)
- **Size**: Full width, responsive grid

#### **SchedulerVisual**
Calendar conflict detection
- **Components**:
  - 5-week calendar grid (7x5)
  - Event markers
  - Conflict indicators
  - Legend
- **Colors**: Cyan (scheduled), Red (conflict)
- **Interactive**: Visual day highlighting

#### **AgentStudioVisual**
Workflow node diagram
- **Components**:
  - 4 workflow nodes
  - Connecting arrows
  - Performance metrics (2x2 grid)
- **Colors**: Cyan → Blue → Purple → Green
- **Layout**: Horizontal flow

#### **ObservatoryVisual**
Metrics chart with anomaly
- **Components**:
  - 12-bar chart
  - Anomaly spike visualization
  - Alert panel
  - System status grid (3 items)
- **Colors**: Cyan (normal), Red (anomaly)
- **Interactive**: Animated bars

---

## 🎨 Design Tokens

### Colors
```css
/* Primary Brand Colors */
--cyan: #00C6FF
--blue: #0072FF
--purple: #7F00FF
--light-purple: #AE75FF

/* Status Colors */
--success: #10B981
--warning: #F59E0B
--error: #EF4444

/* Neutral Colors */
--dark: #0A0E1A
--dark-mid: #0D1528
--navy: #0F1A2E
--slate: #475569
--slate-light: #64748B
--gray-bg: #F8FAFC
```

### Typography
```css
/* Font Families */
--font-display: 'Space Grotesk', sans-serif
--font-body: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', monospace

/* Font Sizes */
--text-xs: 10px
--text-sm: 11px
--text-base: 14px
--text-lg: 18px
--text-xl: 24px
--text-2xl: 32px
--text-3xl: 42px
```

### Spacing
```css
/* Standard spacing scale */
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

### Border Radius
```css
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 16px
--radius-xl: 20px
--radius-full: 9999px
```

---

## 🔧 Customization Guide

### Changing Colors
Update the color values in component inline styles:
```tsx
// Before
background: "#00C6FF"

// After
background: "#YOUR_COLOR"
```

### Adjusting Animations
Modify timing in `useEffect` hooks:
```tsx
// Slower animation
const id = setInterval(() => {
  setProgress(p => p + 0.5); // was 1.4
}, 50); // was 28
```

### Resizing Components
Update container dimensions:
```tsx
// Larger diagram
<div style={{ 
  width: 120,  // was 80
  height: 120  // was 80
}}>
```

### Adding New Metrics
Extend data arrays:
```tsx
const METRICS = [
  { label: "p99 latency", val: 142, unit: "ms", max: 400 },
  { label: "NEW METRIC", val: 50, unit: "x", max: 100 }, // Add here
];
```

---

## 📊 Component Usage Matrix

| Component | Location | Type | Interactive | Animated | Responsive |
|-----------|----------|------|-------------|----------|------------|
| UpgradeAnimation | Products page card | Progress | No | Yes | Yes |
| SchedulerAnimation | Products page card | Calendar | No | Yes | Yes |
| AgentAnimation | Products page card | Chat | No | Yes | Yes |
| ObservatoryAnimation | Products page card | Dashboard | No | Yes | Yes |
| UpgradeDiagram | Products detail | Flow | No | No | Yes |
| SchedulerDiagram | Products detail | Network | No | No | Yes |
| AgentStudioDiagram | Products detail | Workflow | No | No | Yes |
| ObservatoryDiagram | Products detail | Stack | No | No | Yes |
| ProductShowcase | Homepage | Tabs | Yes | Yes | Partial |
| UpgradeVisual | Showcase | Comparison | No | No | Yes |
| SchedulerVisual | Showcase | Grid | No | No | Yes |
| AgentStudioVisual | Showcase | Flow | No | No | Yes |
| ObservatoryVisual | Showcase | Chart | No | No | Yes |

---

## 🚀 Performance Tips

1. **Lazy Load**: Import diagrams only when needed
   ```tsx
   const UpgradeDiagram = lazy(() => import('./ProductAnimations'));
   ```

2. **Memoize**: Prevent unnecessary re-renders
   ```tsx
   const MemoizedDiagram = memo(UpgradeDiagram);
   ```

3. **Reduce Motion**: Respect user preferences
   ```tsx
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
   ```

4. **Optimize Intervals**: Clear on unmount
   ```tsx
   useEffect(() => {
     const id = setInterval(...);
     return () => clearInterval(id); // Always cleanup
   }, []);
   ```

---

## 🎯 Best Practices

### Do's ✅
- Use semantic HTML elements
- Provide alt text for visual elements
- Keep animations subtle and purposeful
- Test on multiple screen sizes
- Use consistent spacing and colors
- Document complex logic

### Don'ts ❌
- Don't use too many animations simultaneously
- Don't hardcode dimensions without responsive units
- Don't forget to cleanup intervals/timeouts
- Don't use inline styles for everything (consider CSS modules)
- Don't sacrifice accessibility for aesthetics

---

## 📚 Additional Resources

- [React Animation Best Practices](https://react.dev/learn/adding-interactivity)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Last Updated**: April 21, 2026
**Maintained By**: TPA Tech Labs
