import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption{
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData{
    isDrawerOpen: boolean;
    drawerOptions:IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOptions:(newDrawerOptions:IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Qual padrão de tela inicia o site:
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    // Mudando o estilo de tema:
    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    // Recebe novas opções de menu:
    const handleSetDrawerOptions = useCallback((newDrawerOptions:IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    );
};