import React, { forwardRef } from 'react';
import { useSidebar } from './SidebarContext';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  showNav: boolean;
};
export const Sidebar = forwardRef<HTMLElement, Props>(({ showNav }, ref) => {
  const { sidebarItems } = useSidebar();

  return (
    <aside ref={ref} className={`fixed w-56 h-full bg-tumBlue-400 ${showNav ? 'block' : 'hidden'}`}>
      <div className="flex justify-center mb-5">
        <Link href={'/'}>
          <Image src={'/AVM-Logo.png'} alt={'AVM-Logo'} width={200} height={200} />
        </Link>
      </div>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="gold-rounded-border"> {/* Add gold border to each item */}
            <Link 
              href={item.path} 
              className={`pl-6 py-2 mb-1 rounded cursor-pointer flex items-center gap-2 transition duration-150 ease-in-out text-AVMGold-100 ${index === sidebarItems.length - 1 ? 'gold-underline' : ''}`} // Add gold underline to the last item
            >
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
