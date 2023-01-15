import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./routers/routes";
import Loading from "./layouts/components/Loading";

function App() {
   return (
      <Suspense fallback={<Loading />}>
         <RouterProvider router={routes} />
      </Suspense>
   );
}

export default App;
