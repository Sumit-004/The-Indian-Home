import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Login function
    const login = (userData) => {
        localStorage.setItem("userInfo", JSON.stringify(userData));
        setUser(userData);
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("userInfo");
        setUser(null);
        
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
