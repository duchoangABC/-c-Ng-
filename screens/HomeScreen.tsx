import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MessageCircle, PlayCircle, Zap } from 'lucide-react';
import { useUser } from '../context/UserContext';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
        {/* Simple Header */}
        <header className="bg-white p-6 pb-4 sticky top-0 z-10 border-b border-gray-100">
            <h1 className="text-xl font-bold text-gray-900">Chào, {user.name}!</h1>
        </header>
        
        <main className="p-6 space-y-4">
            {/* Action Cards */}
            <div id="home-profile-card" onClick={() => navigate('/profile')} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-primary">
                    <User size={24} />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900">Hồ sơ cá nhân</h2>
                    <p className="text-sm text-gray-500">Xem tiến độ & năng lực</p>
                </div>
            </div>

            <div onClick={() => navigate('/courses')} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-secondary">
                    <PlayCircle size={24} />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900">Tiếp tục học</h2>
                    <p className="text-sm text-gray-500">Bài học đang dang dở</p>
                </div>
            </div>

            <div onClick={() => navigate('/chat')} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <MessageCircle size={24} />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900">Chat với Mentor</h2>
                    <p className="text-sm text-gray-500">Hỗ trợ học tập 24/7</p>
                </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-yellow-500" fill="currentColor" />
                    <h3 className="font-bold text-gray-800">Mẹo học tập</h3>
                </div>
                <p className="text-sm text-gray-600">Hãy dành 15 phút mỗi ngày để ôn tập kiến thức cũ nhé!</p>
            </div>
        </main>
    </div>
  );
};

export default HomeScreen;