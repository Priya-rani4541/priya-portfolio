import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Loader2, AlertCircle, LayoutDashboard } from 'lucide-react';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post(`${API_URL}/api/admin/login`, { email, password });
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminInfo', JSON.stringify(data));
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a111e] relative overflow-hidden px-4">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-2xl bg-blue-600/10 text-blue-500 mb-6 shadow-lg shadow-blue-500/10">
            <LayoutDashboard size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-gray-400 font-light">Secure access to your portfolio management</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111927] p-8 md:p-10 rounded-[2.5rem] border border-gray-800 shadow-2xl space-y-6">
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-3 bg-red-500/10 text-red-500 p-4 rounded-xl border border-red-500/20"
              >
                <AlertCircle size={20} />
                <span className="text-sm font-bold">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-4 uppercase tracking-widest">Admin Email</label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@portfolio.com"
                className="w-full pl-14 pr-6 py-4 bg-[#0d1525] border border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white placeholder:text-gray-600"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 ml-4 uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-14 pr-6 py-4 bg-[#0d1525] border border-gray-800 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white placeholder:text-gray-600"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Authenticating...
              </>
            ) : (
              'Login to Dashboard'
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm">
          &copy; 2026 Priya Rani. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
