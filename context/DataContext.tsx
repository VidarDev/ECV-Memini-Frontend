import { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  data: string[];
  setData: (data: string[]) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string[]>([]);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
