import React from 'react';

const MarkdownViewer = ({ html }) => (
  <markdown
    dangerouslySetInnerHTML={{
      __html: html
    }}
  />
)

export default MarkdownViewer;