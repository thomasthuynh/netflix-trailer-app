import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto mt-16 w-[90%] border-t-4 border-red-600 py-8 sm:mt-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 p-4 text-sm leading-6 text-neutral-500 sm:grid-cols-4 sm:gap-6 sm:text-base sm:leading-8">
        <div>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Terms of Use</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Press Releases</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Corporate Information</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Watch List</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Accessibility</li>
            <li>Community Guidelines</li>
            <li>Affiliate Program</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
