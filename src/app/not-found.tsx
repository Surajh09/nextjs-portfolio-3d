import React from 'react'

export default function notFound() {
    
    return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex items-center">
        <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
            <img
                src="https://themichailov.com/img/not-found.svg"
                alt="Not Found"
            />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
            <div className="text-6xl font-medium">404</div>
            <div className="text-xl md:text-3xl font-medium mb-4">
                You Entered Secrete Page.
            </div>
            <div className="text-lg mb-8">
                This page is either under development or not found
            </div>
            <a href="#" className="border border-white rounded p-4">
                Go Home
            </a>
        </div>
        </div>
    </div>
    );
}