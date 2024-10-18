import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">POPULAR CATEGORIES</h3>
            <hr className="border-red-500 w-10 mb-4" />
            <ul className="text-gray-200">
              <li className="mb-2">Fashion</li>
              <li className="mb-2">Electronic</li>
              <li className="mb-2">Cosmetic</li>
              <li className="mb-2">Health</li>
              <li>Watches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">PRODUCTS</h3>
            <hr className="border-red-500 w-10 mb-4" />
            <ul className="text-gray-200">
              <li className="mb-2">Prices Drop</li>
              <li className="mb-2">New Products</li>
              <li className="mb-2">Best Sales</li>
              <li className="mb-2">Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">OUR COMPANY</h3>
            <hr className="border-red-500 w-10 mb-4" />
            <ul className="text-gray-200">
              <li className="mb-2">Delivery</li>
              <li className="mb-2">Legal Notice</li>
              <li className="mb-2">Terms And Conditions</li>
              <li className="mb-2">About Us</li>
              <li>Secure Payment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">SERVICES</h3>
            <hr className="border-red-500 w-10 mb-4" />
            <ul className="text-gray-200">
              <li className="mb-2">Prices Drop</li>
              <li className="mb-2">New Products</li>
              <li className="mb-2">Best Sales</li>
              <li className="mb-2">Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">CONTACT</h3>
            <hr className="border-red-500 w-10 mb-4" />
            <ul className="text-gray-200">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt"></i> 419 State 414 Rte
                Beaver Dams, New York(NY), 14812, USA
              </li>
              <li className="mb-2">
                <i className="fas fa-phone"></i> (607) 936-8058
              </li>
              <li>
                <i className="fas fa-envelope"></i> Example@Gmail.Com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <img src="https://placehold.co/40x25" alt="Visa" className="mx-2" />
          <img
            src="https://placehold.co/40x25"
            alt="MasterCard"
            className="mx-2"
          />
          <img src="https://placehold.co/40x25" alt="PayPal" className="mx-2" />
          <img src="https://placehold.co/40x25" alt="Skrill" className="mx-2" />
          <img
            src="https://placehold.co/40x25"
            alt="Maestro"
            className="mx-2"
          />
          <img
            src="https://placehold.co/40x25"
            alt="Visa Electron"
            className="mx-2"
          />
        </div>
        <div className="text-center mt-4 text-gray-200">
          <p>Copyright &copy; Anon All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
