import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import WalletPortfolio from './pages/WalletPortfolio';

// Initialize React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents spamming the CoinGecko API when you switch tabs
      staleTime: 60000, // Data stays fresh for 1 minute before refetching
    },
  },
});

// Create a temporary placeholder page for testing
// const Dashboard = () => <h2 className="text-2xl text-black mt-4">Market Dashboard Coming Soon</h2>;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout  />}>
            {/* Default index route */}
            {/* <Route index element={<Dashboard />} /> */}
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Wallet' element={<WalletPortfolio/>}/>
            {/* You will add /asset/:symbol and /portfolio routes here later */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}