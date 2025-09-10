# Bagisto Documentation

You can find the online version of the Bagisto documentation at [https://devdocs.bagisto.com](https://devdocs.bagisto.com).

## Contribution Guide

We welcome contributions to improve the Bagisto documentation! Follow these steps to get started:

### Getting Started

1. **Fork the repository** - Click the "Fork" button on GitHub
2. **Clone your fork** - Download your forked repository locally
3. **Install dependencies** - Follow the [Installation](#installation) section below
4. **Create a branch** - Make your changes in a feature branch

### Contribution Guidelines

Before submitting your pull request, please ensure:

- **Check for existing content** - Verify the topic isn't already documented to avoid duplication
- **Follow markdown standards** - Use proper indentation and formatting (consider installing a markdown linter)
- **Use kebab-case filenames** - Name files using lowercase with hyphens (e.g., `create-custom-theme.md`)
- **VitePress standards** - Use VitePress containers (`::: info`, `::: tip`, `::: warning`) for better presentation
- **Code examples** - Include practical, working code examples when applicable
- **Clear structure** - Use proper headings, lists, and sections for readability

### Content Standards

- Write clear, concise documentation with practical examples
- Include step-by-step instructions for complex procedures
- Use proper grammar and professional tone
- Test code examples to ensure they work correctly
- Add relevant cross-references to related documentation

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run docs:dev
   ```

3. **Access the documentation**

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run docs:dev` - Start development server with hot reload
- `npm run docs:build` - Build documentation for production
