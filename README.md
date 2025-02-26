# bniladridas

Welcome to my personal website, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). This site showcases my work and contributions as a Full Stack Developer specializing in AI, cloud computing, and high-performance applications.

## Features
- Responsive design using Tailwind CSS
- Fast performance with Next.js
- Easy navigation and user-friendly interface

## Getting Started
To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/bniladridas/bniladridas.git
cd bniladridas
npm install
```

## Running the Project
To run the project locally, use the following command:

```bash
<span style="color: yellow;">npm run dev</span>
```

Visit `http://localhost:3000` in your browser to see the application in action.

## Debugging and Solutions
During the development process, we encountered several issues that were resolved as follows:

- <span style="color: red;">Error</span>: `ConfigReadError` related to `contentlayer` package.
  - <span style="color: green;">Resolution</span>: Removed `contentlayer` and `next-contentlayer` packages and updated the `next.config.mjs` file to eliminate references to `next-contentlayer`.

- <span style="color: red;">Error</span>: `TypeError: Cannot read properties of undefined (reading 'ContextRegistry')`.
  - <span style="color: green;">Resolution</span>: Downgraded `react` and `react-dom` to version `18.2.0` to ensure compatibility with `next@12.3.4`.

## License
This project is licensed under the MIT License. The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). It allows reuse of software within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

For more details, see the [LICENSE](LICENSE) file.
