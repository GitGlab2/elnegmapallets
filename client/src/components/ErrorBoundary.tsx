"use client";

import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-[#181b24] text-white" dir="rtl">
          <div className="flex flex-col items-center w-full max-w-2xl p-8 text-center">
            <AlertTriangle
              size={48}
              className="text-secondary mb-6 flex-shrink-0 animate-pulse"
            />

            <h2 className="text-2xl font-black mb-4">عذراً، حدث خطأ غير متوقع.</h2>
            <p className="text-sm text-muted-foreground mb-6">يرجى المحاولة مجدداً أو إعادة تحميل الصفحة.</p>

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all bg-secondary hover:bg-secondary/90 text-white cursor-pointer"
              )}
            >
              <RotateCcw size={18} />
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
