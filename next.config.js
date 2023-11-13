const { execSync } = require('child_process');

module.exports = {
  // Diğer konfigürasyonlar...

  webpack: (config, { isServer }) => {
    // Sadece sunucu tarafında çalıştırın
    if (isServer) {
      try {
        // Prisma Client'i yeniden oluşturun
        execSync('prisma generate');
      } catch (error) {
        console.error('Prisma Client oluşturulurken bir hata oluştu:', error);
        process.exit(1); // Hata durumunda build işlemini durdurun
      }
    }

    return config;
  },
};
