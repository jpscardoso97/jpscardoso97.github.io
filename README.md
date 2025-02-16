# Personal Portfolio Website

This is my personal portfolio website built with Hugo, featuring a clean, minimalistic design with dark/light mode support.

## Features

- Responsive design
- Dark/Light mode toggle
- Smooth scrolling
- Animated sections
- Structured content using JSON data files
- Modern UI with accessibility in mind

## Local Development

1. Install Hugo:
   ```bash
   brew install hugo
   ```

2. Run the development server:
   ```bash
   hugo server -D
   ```

3. Visit `http://localhost:1313` in your browser

## Content Structure

The website content is managed through JSON files in the `data` directory:

- `about.json`: Personal information and working geniuses
- `experience.json`: Work experience details
- `projects.json`: Project showcase information
- `education.json`: Educational background

## Updating Content

To update the website content, simply modify the corresponding JSON files in the `data` directory. The website will automatically reflect the changes.

### Example: Adding a New Project

1. Open `data/projects.json`
2. Add a new project entry following the existing format:
   ```json
   {
     "name": "Project Name",
     "description": "Project description",
     "github": "GitHub repository URL",
     "technologies": ["Tech1", "Tech2"]
   }
   ```

## Deployment

The website is configured to be deployed to GitHub Pages. To deploy:

1. Build the website:
   ```bash
   hugo
   ```

2. The static files will be generated in the `public` directory

3. Push the changes to the `main` branch of your GitHub repository

## Customization

- Theme colors can be modified in `themes/minimal-portfolio/static/css/style.css`
- Layout templates are in `themes/minimal-portfolio/layouts`
- Static assets (CSS, JS, images) are in `themes/minimal-portfolio/static`

## License

MIT License - feel free to use this template for your own portfolio! 