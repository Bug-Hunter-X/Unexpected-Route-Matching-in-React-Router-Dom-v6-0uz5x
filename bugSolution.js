import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  const [searchParams] = useSearchParams();
  return (
    <div>About {searchParams.get('extra') ? searchParams.get('extra') : ''}</div>
  );
}

function Home() {
  return <div>Home</div>;
}

export default App;