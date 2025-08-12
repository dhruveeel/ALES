# ALES GSA Website

A complete, professional multi-page website for the **Agricultural, Life & Environmental Sciences Graduate Students' Association** at the University of Alberta.

## Overview

This website serves as the official digital presence for ALES GSA, providing comprehensive information about the organization, its services, events, team members, and contact details. Built with modern web technologies and designed for optimal user experience across all devices.

## Project Structure

```
ALES/
├── index.html              # Home page with hero section and quick access
├── about.html              # About Us page with history, departments, and values
├── services.html           # Services page with support offerings
├── events.html             # Events & Updates page with news and calendar
├── team.html               # Team & Prev Execs page with executive profiles
├── contact.html            # Contact page with form and information
├── styles.css              # Complete CSS styling for all pages
├── script.js               # JavaScript functionality and interactions
└── home.html               # Original single-page file (reference)
```

## Features

### Design & User Experience
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with University of Alberta branding
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Fast Loading**: Optimized code structure and minimal dependencies

### Functionality
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email subscription functionality
- **Event Registration**: Interactive event registration buttons
- **Team Contact**: Direct email and LinkedIn links for team members
- **Scroll to Top**: Floating scroll-to-top button
- **Form Validation**: Client-side validation with user feedback

### Content Sections

#### Home Page (`index.html`)
- Hero section with key statistics
- Quick access links to main sections
- Featured news articles
- Upcoming events preview
- Call-to-action section

#### About Page (`about.html`)
- Mission and vision statement
- Interactive timeline showing 15 years of history
- Department overview with member counts
- Core values (6 principles)
- Achievements and awards
- Member testimonials

#### Services Page (`services.html`)
- Academic support services
- Professional development opportunities
- Community building programs
- Wellness and mental health support
- Social events and activities
- Awards and recognition programs

#### Events Page (`events.html`)
- Upcoming events with registration
- Latest news and updates
- Newsletter signup functionality
- Event categories (Academic, Professional, Social)

#### Team Page (`team.html`)
- Current executive team profiles
- Previous executives section
- Contact information for each member
- Leadership opportunities

#### Contact Page (`contact.html`)
- Multiple contact methods
- Office hours and location
- Functional contact form
- Professional layout

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required (static website)

### Installation
1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** between pages using the top navigation menu

### Local Development
```bash
# Navigate to project directory
cd ALES

# Open with live server (if you have it installed)
npx live-server

# Or simply open index.html in your browser
```

## Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-green: #007C41;    /* University green */
    --primary-gold: #FFDB05;     /* University gold */
    --light-gray: #DCDEE5;
    --lavender: #9999EA;
    --alert-red: #F44336;
    --white: #ffffff;
    --dark-gray: #333333;
    --text-gray: #666666;
    --border-gray: #e5e7eb;
}
```

### Content Updates
- **Team Members**: Update profiles in `team.html`
- **Events**: Modify events in `events.html`
- **Services**: Edit services in `services.html`
- **Contact Info**: Update contact details in `contact.html`
- **About Content**: Modify mission and values in `about.html`

### Styling
- All styles are in `styles.css`
- Responsive breakpoints are clearly defined
- Component-based CSS organization

## Browser Compatibility

- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## Dependencies

- **Font Awesome 6.0.0**: For icons (loaded via CDN)
- **Google Fonts**: System fonts for typography
- **Pexels Images**: Stock photos for team members and news articles

## Deployment

### Netlify Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy

# For production
netlify deploy --prod
```

### Other Deployment Options
- **GitHub Pages**: Push to GitHub and enable Pages
- **Vercel**: Connect GitHub repository to Vercel
- **Traditional Hosting**: Upload files to any web server

## Performance

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized images and code
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Mobile Optimized**: Responsive design for all screen sizes

## Security

- **No Sensitive Data**: No API keys or sensitive information in code
- **Form Validation**: Client-side validation for user input
- **HTTPS Ready**: Compatible with SSL certificates

## Development Notes

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **CSS Grid & Flexbox**: Modern layout techniques
- **JavaScript ES6+**: Modern JavaScript features
- **Progressive Enhancement**: Works without JavaScript
- **Performance Optimized**: Minimal external dependencies

## Future Enhancements

- **Backend Integration**: Form submission handling
- **Database**: Events and news management
- **User Authentication**: Member login system
- **Blog Functionality**: News article management
- **Event Calendar**: Interactive calendar integration
- **Social Media Feed**: Real-time social media integration
- **Analytics**: User behavior tracking
- **Multi-language Support**: Internationalization

## Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## Support

For questions or support:
- **Email**: info@alesgsa.ualberta.ca
- **Phone**: (780) 492-3111
- **Office**: Agriculture Forestry Centre, University of Alberta

## License

This project is for the ALES Graduate Students' Association at the University of Alberta. All rights reserved.

## Acknowledgments

- **University of Alberta** for institutional support
- **Faculty of ALES** for academic guidance
- **Graduate Students** for feedback and suggestions
- **Web Development Community** for best practices and tools

---

**ALES Graduate Students' Association Website**

*Last updated: March 2024* 