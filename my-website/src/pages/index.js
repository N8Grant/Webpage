import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header style={{
      backgroundImage: 'url(/img/mtn.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh', // Adjust the height as needed
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
        borderRadius: '15px',
        padding: '20px 30px', // Adjust padding as needed
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        maxWidth: '30%', // Adjust width to fit content snugly
        width: 'auto',
      }}>
        <h1 className="hero__title" style={{ 
          margin: '10px 0',
          fontFamily: "'Fira Code', 'Courier New', Courier, monospace" // Monospaced font for a "programmery" look
        }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ margin: '10px 0',
          fontFamily: "'Fira Code', 'Courier New', Courier, monospace"  }}>{siteConfig.tagline}</p>
        <img
          src="/img/portfolio_image.jpg"
          alt="My Portfolio"
          style={{
            borderRadius: '50%', // Rounded edges
            width: '50%', // Adjust the percentage as needed
            marginTop: '20px' // Space between text and image
          }}
        />
        <div style={{
          marginTop: '20px',
          padding: '10px 20px',
          // backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
          borderRadius: '10px',
          color: 'black',
          fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
          maxWidth: '80%',
          width: 'auto',
        }}>
          <p>hey im nate. i do a lot of work with large 3D images and pull out cool stuff.</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Your homepage content */}
      </main>
    </Layout>
  );
}
