import { Routes, Route } from 'react-router-dom';
import Landing from './routes/landing/landing.component';
import Authentication from './routes/authentication/authentication.component';
import DefaultDashboard from './routes/default/default-dashboard/default-dashboard.component';
import EditorDashboard from './routes/editor/editor-dashboard/editor-dashboard.component';
import ReviewerDashboard from './routes/reviewer/reviewer-dashboard/reviewer-dashboard.component';
import EditorDashboardPage2 from './routes/editor/editor-dashboard-page2/editor-dashboard-page2.component';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/dash' element={<DefaultDashboard />} />
        <Route path='/editor' >
          <Route index element={<EditorDashboard />}/>
          <Route path='/editor/page2/:id' element={<EditorDashboardPage2 />} />
        </Route>
        <Route path='/reviewer'>
          <Route index element={<ReviewerDashboard />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
