import React, { createContext, useState, useContext } from 'react';

type SidebarItem = {
  name: string;
  path: string;
};

type SidebarContextType = {
  sidebarItems: SidebarItem[];
  insertSidebarItem: (item: SidebarItem, index: number) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);

  const insertSidebarItem = (item: SidebarItem, index: number) => {
    setSidebarItems((prevItems) => {
      const newItems = prevItems.slice(0, index);
      newItems[index] = item;
      return newItems;
    });
  };

  return (
    <SidebarContext.Provider value={{ sidebarItems, insertSidebarItem }}>
      {children}
    </SidebarContext.Provider>
  );
};
