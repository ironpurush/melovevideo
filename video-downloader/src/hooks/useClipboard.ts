'use client';

import { useState, useCallback } from 'react';

interface UseClipboardResult {
  copy: (text: string) => Promise<boolean>;
  paste: () => Promise<string | null>;
  copied: boolean;
}

/**
 * Hook for clipboard read/write with graceful fallback when
 * the Clipboard API is unavailable or permission is denied.
 */
export function useClipboard(resetDelay = 2000): UseClipboardResult {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
      return true;
    } catch {
      return false;
    }
  }, [resetDelay]);

  const paste = useCallback(async (): Promise<string | null> => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return null;
    }
  }, []);

  return { copy, paste, copied };
}
