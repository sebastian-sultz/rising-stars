import React from 'react';

const PageHeader = () => {
  return (
    <div className="container-xxl py-5 page-header position-relative mb-5">
      <div className="container py-5">
        <h1 className="display-2 text-white animated slideInDown mb-4">Appointment</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Appointment</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;