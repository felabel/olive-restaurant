import React from 'react';
import Layout from './Layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }
  return (
    <Layout>
      <div className="min-h-screen ">
        <p style={style}>Unfortunately we can't find that page</p>
      </div>
      
    </Layout>
  );
}

export default NotFound;