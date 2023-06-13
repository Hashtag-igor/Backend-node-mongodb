import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


// export default async function ConnectDatabase(){
//    const connectionString = process.env.MONGODB_CONNECTION_STRING
//    await mongoose.connect(connectionString)
// }


export default async function ConnectDatabase() {
  try {
    const connectionString = process.env.MONGODB_CONNECTION_STRING;

    // Opções adicionais de configuração do Mongoose, se necessário
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Outras opções...
    };

    // Conecte-se ao banco de dados usando a string de conexão e as opções do Mongoose
    await mongoose.connect(connectionString, mongooseOptions);

    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados:", error);
    // Lançar o erro para que seja tratado pela chamada da função
    throw error;
  }
}
