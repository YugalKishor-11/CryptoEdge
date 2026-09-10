import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';
import MyAsset from './pages/MyAsset';
import Home from './pages/Home';
import MarketTab from './pages/MarketTab';
import LoginField from './pages/LoginField';
import Trade from './pages/Trade';
import AnalyticsChartCard from './pages/AnalyticsChartCard';
import  Settings  from './pages/Settings';

// Initialize React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents spamming the CoinGecko API when you switch tabs
      staleTime: 60000, // Data stays fresh for 1 minute before refetching
    },
  },
});
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  return isAuth ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginField />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* Default index route */}
            {/* <Route index element={<Dashboard />} /> */}
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/myasset' element={<MyAsset />} />
            <Route path='/trade' element={<Trade/>}/>
            <Route path='/market' element={<MarketTab />} />
            <Route path='/analytic' element={<AnalyticsChartCard/>}/>
            <Route path='/settings' element={<Settings/>}/>
            {/* You will add /asset/:symbol and /portfolio routes here later */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}