import type {ReactNode} from "react";

type AppProps = {
    children: ReactNode;
};

export default function App({ children }: AppProps) {
    return (
        <div className="min-h-screen bg-white text-black">
            {children}
        </div>
    );
}