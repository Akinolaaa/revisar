import { Routes, Route } from 'react-router-dom';
import Landing from './routes/landing/landing.component';
import Authentication from './routes/authentication/authentication.component';
import AuthorDashboard from './routes/author/dashboard/author-dashboard.component';
import EditorDashboard from './routes/editor/dashboard/editor-dashboard.component';
import ReviewerDashboard from './routes/reviewer/reviewer-dashboard/reviewer-dashboard.component';
import EditorPage2 from './routes/editor/page2/editor-page2.component';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/dash' element={<AuthorDashboard />} />
        <Route path='/editor' >
          <Route index element={<EditorDashboard />}/>
          <Route path='/editor/page2/:id' element={<EditorPage2 />} />
        </Route>
        <Route path='/reviewer'>
          <Route index element={<ReviewerDashboard />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
