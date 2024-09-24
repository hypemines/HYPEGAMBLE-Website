"use client";

import React, { useState, useEffect } from 'react';
import { CommandMenu, CommandInput, CommandList, CommandItem } from 'cmdk';

const StreamingManagement = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        // Add search functionality here
    };

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault(); // Prevent default behavior
            setIsOpen(true); // Open the command menu
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <h1>Streaming Management</h1>
            <CommandMenu open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search..."
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '20px' }} // Full width and margin
                />
                <CommandList>
                    {/* Example items, replace with your search results */}
                    <CommandItem onSelect={() => console.log('Item 1 selected')}>Item 1</CommandItem>
                    <CommandItem onSelect={() => console.log('Item 2 selected')}>Item 2</CommandItem>
                </CommandList>
            </CommandMenu>
        </div>
    );
};

export default StreamingManagement;