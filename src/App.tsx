import { Suspense } from 'react'

import PrivateRoutes from 'Routes/PrivateRoutes'
import PublicRoutes from 'Routes/PublicRoutes'

export const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <PrivateRoutes />
      <PublicRoutes />
    </Suspense>
  )
}

export default App
