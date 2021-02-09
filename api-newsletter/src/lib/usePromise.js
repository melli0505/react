import { useState, useEffect } from 'react';

export default function usePromise(promiseCreater, deps) {
  // 대기중, 완료, 실패 상태 관리 custom hook
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreater();
        setResolved(resolved);
      } catch (e) {
        setError(false);
      }
      setLoading(false);
    };
    process();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
