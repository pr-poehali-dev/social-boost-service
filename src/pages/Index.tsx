import Icon from "@/components/ui/icon";

const Index = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/",
      color: "hover:bg-blue-500",
      iconColor: "text-blue-500",
    },
    {
      name: "ВКонтакте",
      icon: "Users",
      url: "https://vk.com/",
      color: "hover:bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "https://youtube.com/",
      color: "hover:bg-red-500",
      iconColor: "text-red-500",
    },
    {
      name: "Одноклассники",
      icon: "MessageCircle",
      url: "https://ok.ru/",
      color: "hover:bg-orange-500",
      iconColor: "text-orange-500",
    },
  ];

  const socialStats = [
    { label: "Лайки", value: "2.4K", icon: "Heart", color: "text-red-500" },
    { label: "Репосты", value: "847", icon: "Repeat", color: "text-green-500" },
    { label: "Просмотры", value: "15.2K", icon: "Eye", color: "text-blue-500" },
    {
      label: "Комментарии",
      value: "321",
      icon: "MessageSquare",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header
        className="relative h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.8)), url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=400&fit=crop&auto=format')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            LikeNI
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Социальная платформа нового поколения
          </p>

          {/* Social Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {socialStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <Icon
                    name={stat.icon}
                    size={24}
                    className={`${stat.color} drop-shadow-sm`}
                  />
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Присоединяйтесь к нам
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Следите за нашими обновлениями в социальных сетях
          </p>

          {/* Социальные сети */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md hover:text-white ${social.color}`}
                >
                  <Icon
                    name={social.icon}
                    size={20}
                    className={social.iconColor}
                  />
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
