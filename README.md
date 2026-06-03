````markdown name=README.md
# The 2026 NCMU People Plan Leadership Hub

A modern, responsive web component for SharePoint integration designed to serve as a centralized hub for leadership information, strategic initiatives, and organizational resources.

## Overview

This web component provides an engaging interface for displaying:
- Leadership team information
- Strategic initiatives and goals
- Professional development resources
- Employee engagement programs
- Performance metrics
- Contact and support information

## Features

✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
✅ **SharePoint Compatible** - Easy integration with Microsoft SharePoint  
✅ **Accessible** - WCAG 2.1 compliant with keyboard navigation and screen reader support  
✅ **Dark Mode Support** - Automatically adapts to system preferences  
✅ **Web Components** - Modern, standards-based implementation  
✅ **No Dependencies** - Vanilla JavaScript, no frameworks required  

## Files Included

- **index.html** - Main HTML entry point for standalone deployment
- **component.js** - Web component definition and logic
- **styles.css** - Complete styling with responsive design
- **README.md** - This file

## Getting Started

### Option 1: Standalone Deployment

1. Download all files to your web server
2. Navigate to `index.html` in your browser
3. The hub will load with all functionality enabled

### Option 2: SharePoint Integration

#### Method A: Using Script Editor Web Part (Classic SharePoint)

1. Go to your SharePoint page and click **Edit**
2. Add a **Script Editor** web part
3. Paste the following code into the Script Editor:

```html
<!-- NCMU Leadership Hub Web Component -->
<link rel="stylesheet" href="https://[YOUR-DOMAIN]/sites/[YOUR-SITE]/[FOLDER]/styles.css">
<div id="hub-container" class="ncmu-leadership-hub"></div>
<script src="https://[YOUR-DOMAIN]/sites/[YOUR-SITE]/[FOLDER]/component.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hub-container');
        if (container) {
            container.innerHTML = window.NCMULeadershipHub.render();
        }
    });
</script>
```

#### Method B: Using Modern Web Part (SharePoint Online)

1. Edit your SharePoint page
2. Add an **Embed** or **HTML** web part
3. Paste the code above (update URLs to your server)
4. Save and publish the page

#### Method C: Using SPFx Extension

For advanced scenarios, you can embed this component in a SharePoint Framework (SPFx) solution for deeper integration.

## Uploading to SharePoint

### Upload via SharePoint UI:

1. Navigate to your site's **Document Library** or **Site Assets**
2. Click **Upload** and select `index.html`, `component.js`, and `styles.css`
3. Copy the file URLs (get the link)

### Upload via PowerShell:

```powershell
Connect-PnPOnline -Url "https://[YOUR-ORG].sharepoint.com/sites/[YOUR-SITE]"
Add-PnPFile -Path "./index.html" -Folder "Site Assets"
Add-PnPFile -Path "./component.js" -Folder "Site Assets"
Add-PnPFile -Path "./styles.css" -Folder "Site Assets"
```

## Usage

### Basic Implementation

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app" class="ncmu-leadership-hub"></div>
    <script src="component.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const app = document.getElementById('app');
            app.innerHTML = window.NCMULeadershipHub.render();
        });
    </script>
</body>
</html>
```

### Web Component Element

```html
<ncmu-leadership-hub></ncmu-leadership-hub>
<script src="component.js"></script>
```

## Customization

### Modify Colors

Edit `styles.css` and update the CSS variables:

```css
:root {
    --primary-color: #0078d4;      /* Main brand color */
    --secondary-color: #107c10;    /* Secondary color */
    --accent-color: #ffd700;       /* Accent color */
}
```

### Update Content

Edit the card content in `component.js` in the `render()` method:

```javascript
<h3 class="card-title">Your Title</h3>
<p class="card-description">Your description here</p>
```

### Add Custom Event Handlers

```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('card-clicked', function(e) {
        console.log('Card clicked:', e.detail.cardTitle);
    });
    
    document.addEventListener('button-clicked', function(e) {
        console.log('Button clicked:', e.detail.buttonText);
    });
});
```

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| IE 11 | ⚠️ Limited (Requires polyfills) |

## Accessibility

This component includes:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast support
- Reduced motion preferences

## Performance

- **Zero dependencies** - No frameworks or libraries
- **Minimal CSS** - ~5.5KB
- **Minimal JavaScript** - ~10KB
- **Fast load times** - Optimized for performance
- **Mobile-friendly** - Optimized for all screen sizes

## Troubleshooting

### Component Not Displaying

1. Check browser console for errors (F12)
2. Verify all files are uploaded to SharePoint
3. Check URL paths are correct
4. Clear browser cache (Ctrl+F5)

### Styling Issues

1. Verify `styles.css` is properly linked
2. Check for CSS conflicts with SharePoint theme
3. Use browser DevTools to inspect elements
4. Test in an incognito/private window

### SharePoint Integration Issues

1. Ensure **CORS** is properly configured if hosting on different domain
2. Check file upload permissions
3. Verify URLs are absolute (not relative)
4. Test with a simple HTML embed first

## Support & Feedback

For questions or issues:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Contact the NCMU leadership team
4. Submit issues via your organization's internal support

## License

This component is proprietary to NCMU. All rights reserved.

## Version History

### v1.0.0 (2026)
- Initial release
- Core leadership hub functionality
- SharePoint integration support
- Responsive design
- Accessibility compliance

---

**Last Updated:** 2026-06-03  
**Component Name:** The 2026 NCMU People Plan Leadership Hub  
**Repository:** ncmu-people-plan-leadership-hub
````
