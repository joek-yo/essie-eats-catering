// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Royal Essie Catering. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-accentGold">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-accentGold">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
