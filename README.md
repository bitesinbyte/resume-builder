# Resume Builder

A modern, ATS-friendly resume builder built with Next.js. Create, edit, and export professional resumes with a live preview, drag-and-drop reordering, and automatic local storage persistence.

**Live**: [resume.bitesinbyte.com](https://resume.bitesinbyte.com)

## Features

- **Live Preview** — Two-panel layout with form editing on the left and real-time resume preview on the right
- **Drag & Drop** — Reorder work experience, projects, and skills sections by dragging
- **Auto-Save** — Resume data is automatically saved to browser localStorage with debounced writes
- **Import / Export** — Load resume data from a JSON file or download your current resume as JSON
- **PDF Export** — Print or save your resume as a PDF directly from the browser
- **Dark / Light Mode** — Theme toggle with system preference support
- **Inline Editing** — Rich text formatting (bold, italic, underline) via highlight menu in the preview
- **Responsive** — Works on desktop and mobile with collapsible form panel
- **Keyboard Shortcuts** — `Ctrl+P` to print

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [Tailwind CSS 3.4](https://tailwindcss.com/) with shadcn/ui CSS variables (Zinc palette)
- [Lucide React](https://lucide.dev/) icons
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) for drag-and-drop
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [react-to-print](https://github.com/MatthewHerb662/react-to-print) for PDF export
- [react-highlight-menu](https://github.com/AshishBhoi/react-highlight-menu) for inline text formatting

## Resume Sections

- Personal Information (name, email, phone, address, profile picture)
- Social Media Links
- Summary
- Education
- Work Experience
- Projects
- Skills (multiple skill groups)
- Languages
- Certifications

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

## Adding Key Achievements

Key achievements make your resume stand out:

1. Navigate to the Work Experience or Projects section
2. Click on the key achievements area
3. Each new line creates a separate bullet point in the preview

## Data Persistence

Resume data is automatically saved to your browser's localStorage. Your progress is preserved across page refreshes and browser restarts. You can also:

- **Export**: Download your resume data as a `.json` file for backup
- **Import**: Load a previously exported `.json` file to restore your resume

## License

[MIT](/LICENSE.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- Thanks [Saurav](https://github.com/sauravhathi) for [atsresume](https://github.com/sauravhathi/atsresume) and inspiration.
