import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Posts from './pages/Posts';

const App = () => {
  return (
    <ThemeProvider>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    </ThemeProvider>
  );
};

export default App;