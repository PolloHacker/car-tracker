import React, { createContext } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { themes } from "@/utils/color-theme";

interface ThemeProviderProps {
    children: React.ReactNode;
}
interface ThemeContextType {
    theme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType>({ theme: "light" });

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { colorScheme } = useColorScheme();
    const colorTheme = colorScheme == "dark" ? "dark" : "light";

    return (
        <ThemeContext.Provider value={{ theme: colorTheme }}>
            <View style={themes[colorTheme]} className="flex-1">
                {children}
            </View>
        </ThemeContext.Provider>
    );
};