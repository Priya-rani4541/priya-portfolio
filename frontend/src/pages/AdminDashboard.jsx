import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Trash2, Calendar, LayoutDashboard, LogOut, Loader2, AlertCircle, MessageSquare, CheckCircle } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteStatus, setDeleteStatus] = useState({ id: null, loading: false });
  
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/admin/login');
      return;
    }

    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setMessages(data);
      } catch (err) {
        setError('Failed to fetch messages. Please try again.');
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate, API_URL]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    setDeleteStatus({ id, loading: true });
    const adminToken = localStorage.getItem('adminToken');

    try {
      await axios.delete(`${API_URL}/api/contact/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (err) {
      alert('Failed to delete message');
    } finally {
      setDeleteStatus({ id: null, loading: false });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a111e] text-white">
      {/* Top Navbar */}
      <nav className="bg-[#111927]/80 backdrop-blur-xl border-b border-gray-800 sticky top-0 z-50 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <LayoutDashboard size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Admin <span className="text-blue-500">Dashboard</span></h1>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 px-5 py-2.5 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 border border-red-500/20"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">Message <span className="text-blue-500">Inbox</span></h2>
              <p className="text-gray-400 font-light">Manage all incoming queries from your portfolio</p>
            </div>
            <div className="bg-[#111927] border border-gray-800 px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-2xl text-blue-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Messages</p>
                <p className="text-2xl font-bold">{messages.length}</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-[#111927] rounded-[3rem] border border-gray-800 shadow-2xl">
              <Loader2 className="animate-spin text-blue-500" size={48} />
              <p className="text-gray-400 font-medium">Loading your messages...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-[#111927] rounded-[3rem] border border-gray-800 shadow-2xl">
              <AlertCircle className="text-red-500" size={48} />
              <p className="text-red-500 font-bold">{error}</p>
              <button onClick={() => window.location.reload()} className="bg-blue-600 px-6 py-3 rounded-xl font-bold">Try Again</button>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-[#111927] rounded-[3rem] border border-gray-800 shadow-2xl">
              <div className="bg-blue-500/10 p-6 rounded-full text-blue-500 mb-4">
                <CheckCircle size={64} />
              </div>
              <h3 className="text-2xl font-bold">No Messages Yet</h3>
              <p className="text-gray-500">Your inbox is completely clear!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={msg._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-[#111927] rounded-[2.5rem] border border-gray-800 shadow-xl overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="p-8 flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <div className="bg-blue-600/10 p-3 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                          <User size={20} />
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <Calendar size={12} />
                          {new Date(msg.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-500 transition-colors truncate">{msg.name}</h4>
                      <p className="text-blue-500 text-sm font-medium mb-6 flex items-center gap-2 truncate">
                        <Mail size={14} /> {msg.email}
                      </p>

                      <div className="bg-[#0d1525] p-5 rounded-2xl border border-gray-800/50 mb-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</p>
                        <p className="text-gray-200 font-semibold line-clamp-1">{msg.subject || 'No Subject'}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message Content</p>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 italic">"{msg.message}"</p>
                      </div>
                    </div>

                    <div className="p-6 bg-[#0d1525]/50 border-t border-gray-800 mt-auto">
                      <button
                        onClick={() => handleDelete(msg._id)}
                        disabled={deleteStatus.id === msg._id && deleteStatus.loading}
                        className="w-full bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        {deleteStatus.id === msg._id && deleteStatus.loading ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <>
                            <Trash2 size={18} className="group-hover/btn:rotate-12 transition-transform" /> 
                            Delete Message
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-gray-600 text-sm border-t border-gray-800 mt-12">
        &copy; 2026 Priya Rani Admin Panel. Built for performance and security.
      </footer>
    </div>
  );
};

export default AdminDashboard;
