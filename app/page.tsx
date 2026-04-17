"use client";

import React, { useState } from "react";
// 下面这些是小图标，增加网页的精致感
import { Mail, ArrowRight, CheckCircle2, Globe, Laptop, Rocket, Github, Instagram } from "lucide-react";

export default function MiniPortfolio() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 模拟作品数据，你可以直接在这里改文字
  const myProjects = [
    {
      title: "智能生活 App 设计",
      category: "UI/UX 设计",
      description: "为现代家庭打造的极简智能控制系统，提升居家体验。",
      color: "bg-blue-500"
    },
    {
      title: "电商平台重构",
      category: "前端开发",
      description: "将加载速度提升了 200%，并优化了移动端的购物流程。",
      color: "bg-purple-500"
    },
    {
      title: "品牌视觉升级",
      category: "平面设计",
      description: "为一家初创科技公司打造的全套品牌识别系统。",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* 1. 顶部导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">DESIGNER<span className="text-blue-600">.</span></span>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#projects" className="hover:text-blue-600 transition">项目</a>
            <a href="#contact" className="hover:text-blue-600 transition">联系</a>
          </div>
        </div>
      </nav>

      {/* 2. 欢迎区域 (Hero) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            👋 你好，我是开发者
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
            专注打造 <span className="text-blue-600">有温度</span> 的<br />数字产品体验
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            我是一名跨领域设计师与开发者。我喜欢通过简洁的设计和高效的代码，帮助人们更好地解决日常生活中的问题。
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition shadow-lg">
              查看我的作品集
            </a>
          </div>
        </div>
      </section>

      {/* 3. 作品展示区 (Projects) */}
      <section id="projects" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">精选作品</h2>
              <p className="text-gray-500">这些是我近期投入心血完成的案例。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myProjects.map((p, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`h-48 ${p.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white`}>
                   {i === 0 ? <Laptop size={48} /> : i === 1 ? <Globe size={48} /> : <Rocket size={48} />}
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
                  <button className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    了解更多 <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 联系我 (Contact) */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="bg-blue-600 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-200">
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始新项目了吗？</h2>
              <p className="text-blue-100 mb-10 text-lg">留下你的邮箱，我会尽快回复你并开启我们的对话。</p>
              <form 
                onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input 
                  type="email" 
                  placeholder="你的邮箱地址" 
                  required
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-blue-300 transition"
                />
                <button type="submit" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition active:scale-95">
                  发送给我
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 animate-bounce">
              <CheckCircle2 size={64} className="mx-auto mb-6" />
              <h3 className="text-3xl font-bold">感谢！消息已收到</h3>
              <p className="mt-4 text-blue-100">我会在 24 小时内联系你。</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. 页脚 */}
      <footer className="py-12 border-t border-gray-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">© 2026 你的名字. 保留所有权利.</p>
          <div className="flex gap-6 text-gray-400">
             <Github size={20} className="hover:text-gray-900 cursor-pointer" />
             <Instagram size={20} className="hover:text-gray-900 cursor-pointer" />
             <Mail size={20} className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </footer>

    </div>
  );
}
