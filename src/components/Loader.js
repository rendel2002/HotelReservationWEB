import React, { useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="d-flex justify-content-center mt-199">
            <div className="sweet-loading text-center">
                <BarLoader
                    color='#000'
                    loading={loading}
                    size={100}
                />
            </div>
        </div>
    );
}