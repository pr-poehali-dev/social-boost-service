import Icon from "@/components/ui/icon";

const Index = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/",
      color: "hover:bg-blue-500",
    },
    {
      name: "ВКонтакте",
      icon: "Users",
      url: "https://vk.com/",
      color: "hover:bg-blue-600",
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "https://youtube.com/",
      color: "hover:bg-red-500",
    },
    {
      name: "Одноклассники",
      icon: "MessageCircle",
      url: "https://ok.ru/",
      color: "hover:bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-black">LikeNI</h1>
        <p className="text-xl text-gray-600 mb-8">
          тут будет отображаться ваш проект
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
                <Icon name={social.icon} size={20} />
                <span className="font-medium text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
