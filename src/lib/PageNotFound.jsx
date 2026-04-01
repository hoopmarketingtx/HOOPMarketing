import { useLocation } from 'react-router-dom';

export default function PageNotFound({}) {
    const location = useLocation();

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0a]">
            <div className="max-w-md w-full text-center space-y-8">
                <h1 className="text-[10rem] font-bold leading-none bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] bg-clip-text text-transparent select-none">
                    404
                </h1>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
                    <p className="text-white/50 leading-relaxed">
                        Looks like this page doesn't exist. Let's get you back on track.
                    </p>
                </div>
                <button
                    onClick={() => window.location.href = '/'}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00B8E6] to-[#1F4E5F] hover:opacity-90 text-white font-semibold rounded-full transition-opacity duration-300"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}