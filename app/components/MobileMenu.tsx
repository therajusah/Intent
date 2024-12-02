import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          X
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Link href="#" className="text-2xl text-white" onClick={onClose}>
          Docs
        </Link>
        <Link href="#" className="text-2xl text-white" onClick={onClose}>
          Support
        </Link>
      </nav>
    </div>
  );
}