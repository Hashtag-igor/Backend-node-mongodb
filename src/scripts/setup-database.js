// Importe o arquivo de conexão com o banco de dados
import ConnectDatabase from '../database/db.js';

// Chame a função de conexão com o banco de dados
ConnectDatabase()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    // Encerre o processo após a configuração do banco de dados ser concluída
    process.exit();
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
    process.exit(1);
  });
