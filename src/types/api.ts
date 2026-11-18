/**
 * ShapeTool Magazine Vol. 12 - ITS Open Campus 2026
 * Standardized API Envelopes and Server Contract Types.
 */

export interface ApiResponseSuccess<T> {
  success: true;
  data: T;
  meta: {
    timestamp: string;
    requestId: string;
    processingTimeMs: number;
    version: string;
  };
}

export interface ApiResponseError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown> | Array<unknown>;
  };
  meta: {
    timestamp: string;
    requestId: string;
    version: string;
  };
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

export function createSuccessResponse<T>(
  data: T,
  startTime: number,
  requestId: string
): ApiResponseSuccess<T> {
  return {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      requestId,
      processingTimeMs: Date.now() - startTime,
      version: '3.0.0',
    },
  };
}

export function createErrorResponse(
  code: string,
  message: string,
  requestId: string,
  details?: Record<string, unknown> | Array<unknown>
): ApiResponseError {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    meta: {
      timestamp: new Date().toISOString(),
      requestId,
      version: '3.0.0',
    },
  };
}
