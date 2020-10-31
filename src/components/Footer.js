import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="small text-center text-white">
          Copyright &copy; {new Date().getFullYear()} - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
