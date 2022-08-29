import React, { Component, ErrorInfo, ReactNode } from "react";
import style from "./style.module.css"

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error,
    errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ hasError: true, error, errorInfo })
    }

    public render() {
        if (this.state.hasError) {
            return <div className={style.wrapper}>
                <div className={style.board}>
                    <h1>Something went wrong!</h1>
                    <h4>error info</h4>
                    <p>{JSON.stringify(this.state?.errorInfo)}</p>
                    <h4>error</h4>
                    <p>{JSON.stringify(this.state?.error)}</p>

                </div>
            </div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;