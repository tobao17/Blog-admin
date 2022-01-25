import React from 'react';
import AdminLayout from './features/AdminLayout/index';
import SignIn from './features/Authentication/SignIn';

function App() {
  return (
    <div className="App">
      <AdminLayout>
        <>hello</>
      </AdminLayout>
      {/* <SignIn></SignIn> */}
    </div>
  );
}

export default App;
