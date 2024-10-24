interface FooterSectionProps {
  name: string;
}
export const FooterSection: React.FC<FooterSectionProps> = ({ name }) => (
  <footer className="bg-gray-900 py-6">
    <div className="container mx-auto px-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </div>
  </footer>
);
