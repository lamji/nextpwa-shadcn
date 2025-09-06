export const getErrorMessage = (err: unknown): string => {
  if (typeof err === 'string') return err;
  if (err && typeof err === 'object') {
    const e = err as Record<string, unknown>;
    const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
    const pickString = (v: unknown): string | undefined => (typeof v === 'string' && v) ? v : undefined;

    const response = e['response'];
    if (isObj(response)) {
      const data = response['data'];
      if (isObj(data)) {
        const respMsg = pickString(data['message']) ?? pickString(data['error']);
        if (respMsg) return respMsg;
      }
    }

    const data = e['data'];
    if (isObj(data)) {
      const dataMsg = pickString(data['message']) ?? pickString(data['error']);
      if (dataMsg) return dataMsg;
    }

    const msg = e['message'];
    if (typeof msg === 'string' && msg) return msg;
  }
  return 'An unexpected error occurred. Please try again.';
};
