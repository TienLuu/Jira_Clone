import PropTypes from "prop-types";
import { useMemo, useEffect, useState } from "react";

const propTypes = {
   services: PropTypes.func.isRequired,
   options: PropTypes.shape({
      manual: PropTypes.bool,
      onSuccess: PropTypes.func,
      onError: PropTypes.func,
      onBefore: PropTypes.func,
   }),
};

const useRequest = (
   service,
   options = {
      manual: false,
      onSuccess: () => {},
      onError: () => {},
      onBefore: () => {},
   }
) => {
   const [status, setStatus] = useState({
      loading: false,
      error: false,
      data: null,
   });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const isManual = useMemo(() => options.manual, []);

   const runAsync = async (...params) => {
      setStatus((prev) => ({ ...prev, loading: true, error: false }));
      try {
         const data = await service(...params);
         setStatus((prev) => ({ ...prev, loading: false, error: false, data }));
         return Promise.resolve(data);
      } catch (error) {
         setStatus((prev) => ({ ...prev, loading: false, error }));
         return Promise.reject(error);
      }
   };

   const run = async (...params) => {
      options.onBefore?.(params);
      setStatus((prev) => ({ ...prev, loading: true, error: false }));

      try {
         const data = await service(...params);
         setStatus((prev) => ({ ...prev, loading: false, error: false, data }));
         options.onSuccess?.(data, params);
      } catch (error) {
         setStatus((prev) => ({ ...prev, loading: false, error }));
         options.onError?.(error);
      }
   };

   useEffect(() => {
      if (isManual) return;
      run();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return { run, runAsync, ...status };
};

useRequest.propTypes = propTypes;

export default useRequest;
