import React from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";

const Preview = ({code}) => {
//   const md = `
// # Hello, React Markdown!

// This is some **bold** text and *italic* text.

// - Item 1
// - Item 2

// Here's a [link to Google](https://www.google.com).

// \`\`\`javascript
// const greeting = "Hello, world!";
// console.log(greeting);
// \`\`\`
//   `;

  const md = `
# heading1
## heading2
### heading3
  `

  return (
    <section className="preview">
      <ReactMarkdown>{code}</ReactMarkdown>
    </section>
  );
};

export default Preview;
