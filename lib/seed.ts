import { sql } from '@vercel/postgres'

export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      image VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `

    const createTableDias = await sql`
    CREATE TABLE IF NOT EXISTS mikuwords (
      id SERIAL PRIMARY KEY, 
      dia INTEGER UNIQUE NOT NULL, 
      palabra VARCHAR(255) NOT NULL, 
      votos INTEGER NOT NULL
    );
    `

  console.log(`Created "users" table`)

  const users = await Promise.all([
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Alberto Rodríguez Cázares', '1234', 'L19550796@chihuahua2.tecnm.mx', 'https://i.ibb.co/HXwPwT6/Alberto.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Nicole Johana Bibiano Ochoa', 'abcd', 'L19550731@chihuahua2.tecnm.mx', 'https://i.ibb.co/Cwj5MfJ/Nicole.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Jesús David Durán Carrillo', 'cisco1234', 'L19540487@chihuahua2.tecnm.mx', 'https://i.ibb.co/XJ2JRx3/Jesus.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, password, email, image)
          VALUES ('Alexis Sebastián Pereira Luján', 'miku', 'L19550833@chihuahua2.tecnm.mx', 'https://i.ibb.co/M6344Mb/Alexis.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
  ])
  console.log(`Seeded ${users.length} users`)


  const dias = await Promise.all([
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('1', 'Piapro', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('2', 'Studio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
        sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('3', 'Editor', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('4', 'VocaListener', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('5', 'Keyboard', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('6', 'Wiki', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('7', 'Concert', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('8', 'Producer', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('9', 'Community', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('10', 'Cosplay', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('11', 'Merchandise', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('12', 'Fanart', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('13', 'Lyrics', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('14', 'Ranking', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('15', 'Database', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('16', 'Album', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('17', 'Live', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('18', 'Collaboration', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('19', 'Voice', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('20', 'Bank', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('21', 'Software', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('22', 'Song', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('23', 'Cover', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('24', 'Duet', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('25', 'Trio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('26', 'Music', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('27', 'Video', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('28', 'Original', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('29', 'Song', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('30', 'Remix', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('31', 'Character', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('32', 'Vocaloid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('33', 'Música', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('34', 'Software', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('35', 'Cantante virtual', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('36', 'Hatsune Miku', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('37', 'Kagamine Rin', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('38', 'Kagamine Len', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('39', 'Megurine Luka', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('40', 'Kaito', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('41', 'Meiko', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('42', 'Gumi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('43', 'IA', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('44', 'Gackpoid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('45', 'Fukase', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('46', 'Flower', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('47', 'Cyber Diva', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('48', 'Dex', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('49', 'Daina', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('50', 'Avanna', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('51', 'Oliver', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('52', 'Yukari', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('53', 'VY1', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('54', 'VY2', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('55', 'Ruby', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('56', 'Tone Rion', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('57', 'Yuzuki Yukari', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('58', 'Nekomura Iroha', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('59', 'SF-A2 Miki', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('60', 'Lily', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('61', 'Gumi Megpoid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('62', 'IA ROCKS', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('63', 'Una', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('64', 'Clara', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('65', 'Bruno', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('66', 'Mew', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('67', 'V Flower', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('68', 'Luo Tianyi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('69', 'Yan He', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('70', 'Xin Hua', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('71', 'Mo Qingxian', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('72', 'Yuezheng Ling', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('73', 'SeeU', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('74', 'CUL', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('75', 'Yohioloid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('76', 'Oliver', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('77', 'Lapis Aoki', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('78', 'Merli', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('79', 'Miki', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('80', 'Piko', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('81', 'Prima', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('82', 'Sonika', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('83', 'Tonio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('84', 'Miriam', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('85', 'LEON', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('86', 'Lola', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('87', 'Kiyoteru', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('88', 'Meika Hime', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('89', 'Meika Mikoto', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('90', 'Macne Nana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('91', 'ZOLA Project', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('92', 'Galaco', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('93', 'Ring Suzune', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('94', 'Arsloid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('95', 'Rana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('96', 'Yumemi Nemu', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('97', 'Kafu Chino', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('98', 'Dex and Daina', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('99', 'Nemu Yumemi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('100', 'Rion', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('101', 'Avanna', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('102', 'YOHIOloid', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('103', 'Miriam Stockley', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('104', 'VOCALOID5', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('105', 'Persona', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('106', 'Shin Megami Tensei', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('107', 'RPG', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('108', 'Videojuego', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('109', 'Protagonista', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('110', 'Personaje', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('111', 'Social Links', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('112', 'Máscara', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('113', 'Arcana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('114', 'Tartarus', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('115', 'Dark Hour', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('116', 'Evocación', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('117', 'Combate', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('118', 'Habilidades', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('119', 'Magia', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('120', 'Ataque físico', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('121', 'Arsene', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('122', 'Velvet Room', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('123', 'Igor', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('124', 'Fusion', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('125', 'Persona 3', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('126', 'Persona 4', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('127', 'Persona 5', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('128', 'The Fool', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('129', 'The Magician', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('130', 'The High Priestess', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('131', 'The Empress', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('132', 'The Emperor', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('133', 'The Hierophant', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('134', 'The Lovers', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('135', 'The Chariot', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('136', 'Justice', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('137', 'The Hermit', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('138', 'Fortune', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('139', 'Strength', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('140', 'The Hanged Man', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('141', 'Death', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('142', 'Temperance', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('143', 'The Devil', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('144', 'The Tower', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('145', 'The Star', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('146', 'The Moon', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('147', 'The Sun', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('148', 'Judgment', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('149', 'Aeon', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('150', 'Social Stats', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('151', 'Academia Gekkoukan', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('152', 'Inaba', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('153', 'Yasogami High School', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('154', 'Shujin Academy', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('155', 'Phantom Thieves', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('156', 'Shadows', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('157', 'Persona Users', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('158', 'Investigation Team', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('159', 'SEES', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('160', 'The Velvet Attendant', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('161', 'The Velvet Twins', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('162', 'Wild Card', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('163', 'All-Out Attack', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('164', 'Shadow Negotiation', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('165', 'Persona Fusion Accidents', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('166', 'Mementos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('167', 'Palaces', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('168', 'Metaverse', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('169', 'Confidants', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('170', 'Morgana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('171', 'Yosuke Hanamura', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('172', 'Chie Satonaka', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('173', 'Yukiko Amagi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('174', 'Rise Kujikawa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('175', 'Kanji Tatsumi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('176', 'Naoto Shirogane', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('177', 'Teddie', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('178', 'Aigis', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('179', 'Mitsuru Kirijo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('180', 'Akihiko Sanada', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('181', 'Fuuka Yamagishi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('182', 'Yukari Takeba', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('183', 'Junpei Iori', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('184', 'Makoto Yuki', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('185', 'Minato Arisato', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('186', 'Yu Narukami', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('187', 'Rise Kujikawa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('188', 'Kanji Tatsumi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('189', 'Teddie', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('190', 'Yukiko Amagi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('191', 'Chie Satonaka', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('192', 'Naoto Shirogane', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('193', 'Futaba Sakura', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('194', 'Makoto Niijima', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('195', 'Haru Okumura', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('196', 'Goro Akechi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('197', 'Morgana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('198', 'Morgana Mobile', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('199', 'Jack Frost', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('200', 'Pixie', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('201', 'Pyro Jack', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('202', 'Mara', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('203', 'Alice', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('204', 'Izanagi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('205', 'Anime', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('206', 'Manga', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('207', 'Otaku', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('208', 'Cosplay', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('209', 'Japón', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('210', 'Animación', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('211', 'Fanáticos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('212', 'Subtitulado', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('213', 'Doblaje', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('214', 'Shonen', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('215', 'Shojo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('216', 'Seinen', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('217', 'Mecha', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('218', 'Magical Girl', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('219', 'Slice of Life', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('220', 'Acción', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('221', 'Aventura', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('222', 'Comedia', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('223', 'Drama', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('224', 'Fantasía', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('225', 'Ciencia ficción', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('226', 'Romance', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('227', 'Misterio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('228', 'Sobrenatural', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('229', 'Harem', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('230', 'Ecchi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('231', 'Yuri', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('232', 'Yaoi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('233', 'Idol', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('234', 'Escuela', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('235', 'Artes marciales', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('236', 'Espada', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('237', 'Superpoderes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('238', 'Viaje en el tiempo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('239', 'Robots', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('240', 'Vampiros', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('241', 'Demonios', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('242', 'Samuráis', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('243', 'Ninjas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('244', 'Magia', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('245', 'Transformación', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('246', 'Amistad', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('247', 'Amor', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('248', 'Lucha', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('249', 'Batallas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('250', 'Aprendizaje', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('251', 'Misterio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('252', 'Sobrenatural', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('253', 'Drama escolar', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('254', 'Comedia romántica', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('255', 'Fantasía épica', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('256', 'Cyberpunk', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('257', 'Realidad virtual', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('258', 'Deportes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('259', 'Videojuegos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('260', 'Aventuras espaciales', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('261', 'Musicales', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('262', 'Androides', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('263', 'Aliens', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('264', 'Género sobrenatural', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('265', 'Cyborgs', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('266', 'Distopía', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('267', 'Mundos alternativos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('268', 'Vida cotidiana', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('269', 'Tragedia', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('270', 'Revolución', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('271', 'Robots gigantes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('272', 'Viajes interdimensionales', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('273', 'Guerras', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('274', 'Investigación', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('275', 'Conspiraciones', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('276', 'Heroísmo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('277', 'Viaje del héroe', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('278', 'Luchas de poder', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('279', 'Amor no correspondido', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('280', 'Destino', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('281', 'Transformaciones físicas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('282', 'Apocalipsis', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('283', 'Venganza', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('284', 'Reencarnación', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('285', 'Compañerismo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('286', 'Aprendizaje', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('287', 'Superación personal', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('288', 'Identidad', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('289', 'Lealtad', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('290', 'Sueños', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('291', 'Revelaciones', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('292', 'Duelos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('293', 'Amistad eterna', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('294', 'Duelo de espadas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('295', 'Romance prohibido', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('296', 'Secretos oscuros', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('297', 'Rivalidad', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('298', 'Hentai', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('299', 'Guerra de clanes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('300', 'Travesías', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('301', 'Conexión emocional', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('302', 'Sacrificio', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('303', 'Época histórica', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('304', 'Netorare', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('305', 'Comida', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('306', 'Delicioso', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('307', 'Sabroso', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('308', 'Cocina', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('309', 'Chef', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('310', 'Restaurante', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('311', 'Ingredientes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('312', 'Sabor', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('313', 'Aroma', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('314', 'Receta', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('315', 'Cocción', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('316', 'Platos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('317', 'Menú', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('318', 'Postre', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('319', 'Bebida', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('320', 'Desayuno', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('321', 'Almuerzo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('322', 'Cena', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('323', 'Bocadillo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('324', 'Buffet', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('325', 'Gastronomía', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('326', 'Gourmet', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('327', 'Especias', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('328', 'Hierbas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('329', 'Salsa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('330', 'Aceite', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('331', 'Mantequilla', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('332', 'Azúcar', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('333', 'Sal', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('334', 'Pimienta', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('335', 'Condimento', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('336', 'Guarnición', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('337', 'Vegetales', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('338', 'Frutas', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('339', 'Carnes', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('340', 'Pescados', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('341', 'Mariscos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('342', 'Pollo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('343', 'Cerdo', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('344', 'Ternera', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('345', 'Cordero', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('346', 'Sushi', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('347', 'Pizza', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('348', 'Pasta', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('349', 'Ensalada', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('350', 'Tacos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('351', 'Burritos', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('352', 'Sándwich', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('353', 'Hamburguesa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('354', 'Curry', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('355', 'Arroz', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('356', 'Noodles', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('357', 'Sopa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('358', 'Guiso', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('359', 'Asado', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('360', 'Parrilla', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('361', 'Barbacoa', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('362', 'Brunch', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('363', 'Helado', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('364', 'Pastelería', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('365', 'Panadería', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
    sql`
          INSERT INTO mikuwords (dia, palabra, votos) 
          VALUES ('366', 'Chocolate', '0') 
          ON CONFLICT (dia) DO NOTHING;
      `,
  ])

  

  return {
    createTable,
    users,
    createTableDias,
    dias,
  }
}
