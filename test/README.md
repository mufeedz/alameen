# Al-Ameen School Template 4 Testing Suite

This directory contains a comprehensive testing suite for the Template 4 implementation on the Al-Ameen School website.

## Overview

The testing suite includes tools for:

1. Responsive Testing - Test the website at multiple screen sizes
2. Cross-browser Testing - Check compatibility across major browsers
3. Accessibility Testing - Evaluate WCAG compliance
4. Performance Testing - Measure and improve page load times

## Getting Started

To use the testing suite:

1. Open `index.html` in your browser to access all testing tools
2. Select a specific testing tool for detailed analysis
3. Document and track issues found during testing

## Testing Tools

### Responsive Testing Tool (`responsive-test.html`)

- Tests website layout at various screen sizes
- Provides a visual frame with configurable widths
- Includes checklist for documenting issues

### Cross-Browser Testing Tool (`cross-browser-test.html`)

- Documents compatibility across Chrome, Firefox, Safari, and Edge
- Tracks issues by browser and feature category
- Exports results for comprehensive tracking

### Accessibility Testing Tool (`accessibility-test.html`)

- Checks WCAG 2.1 compliance
- Organized by perceivable, operable, understandable, and robust principles
- Generates summary reports of accessibility issues

### Performance Testing Tool (`performance-test.html`)

- Simulates Lighthouse-style performance metrics
- Identifies potential performance bottlenecks
- Provides optimization recommendations

## Usage Guidelines

1. **Test each page individually** - The website has multiple pages with different layouts and content. Test each page separately.
2. **Document all issues** - Use the tools to document any issues found during testing.
3. **Prioritize fixes** - Focus on high-priority issues first (accessibility, major layout problems).
4. **Re-test after fixes** - Always re-test after implementing fixes to ensure they've resolved the issues.

## Testing Workflow

1. Start with responsive testing to ensure layouts work across devices
2. Proceed to cross-browser testing to identify browser-specific issues
3. Conduct accessibility testing to ensure WCAG compliance
4. Finish with performance testing to optimize page load times

After completing all tests, generate a comprehensive report to guide final optimizations before launch.

## Additional Resources

- See the implementation plan in `../docs/template4-implementation-plan.md`
- Check the implementation checklist in `../docs/template4-implementation-checklist.md`
- Refer to the component guide in `../docs/template4-component-guide.md`

## Contact

For questions about the testing process or to report issues, please contact the web development team.
