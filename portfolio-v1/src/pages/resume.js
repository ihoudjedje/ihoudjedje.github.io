import React from 'react';

import Layout from './../components/Layout';

const ProjectsPageInner = props => {
  return (
    <object
      data="https://drive.google.com/file/d/14fHrWV96NCbpsHyh6E6HZd0s6hLdnvEj/preview"
      width="100%"
      height="100%"
    >
      <embed
        src="https://drive.google.com/file/d/14fHrWV96NCbpsHyh6E6HZd0s6hLdnvEj/preview"
        width="100%"
        height="100%"
      />
      <p>
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="https://drive.google.com/file/d/14fHrWV96NCbpsHyh6E6HZd0s6hLdnvEj/preview">
          View the PDF
        </a>
        .
      </p>
      <embed />
    </object>
  );
};

const ProjectsPage = props => {
  return (
    <Layout>
      <ProjectsPageInner {...props} />
    </Layout>
  );
};

export default ProjectsPage;
