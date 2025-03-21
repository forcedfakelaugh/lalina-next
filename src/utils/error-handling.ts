// Custom error class for API errors
export class APIError extends Error {
  status: number;
  
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

// Error helper function for friendly error messages
export function getErrorMessage(error: unknown): string {
  if (error instanceof APIError) {
    return `Error (${error.status}): ${error.message}`;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return String(error);
}

// Helper function to log errors consistently
export function logError(error: unknown, context?: string): void {
  const prefix = context ? `[${context}]` : '';
  if (process.env.NODE_ENV !== 'production') {
    console.error(`${prefix} Error:`, error);
  } else {
    // In production, you might want to send this to a logging service
    console.error(`${prefix} ${getErrorMessage(error)}`);
  }
}
