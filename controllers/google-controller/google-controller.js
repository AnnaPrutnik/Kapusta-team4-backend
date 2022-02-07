import axios from 'axios';
import queryString from 'query-string';
// import User from '../../models/user-model/user-model';

export const googleAuth = async (req, res) => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });
  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`,
  );
};

export const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });
  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  /* const user = await User.findOne(
    { email: userData.data.email }
    );
  if (!user) {
    await User.create({
      name: userData.data.name,
      email: userData.data.email,
    });
  } */
    // userData.data.email
    // Код для поиска user`а по email в базе данных, если отсутствует, то регистрируем
    // Если пользователь есть, впускаем и даем accessToken 
    // google-redirect - отденьный для возврата на frontend
    // return res.redirect(
    //   `${process.env.FRONTEND_URL}/google-redirect/?accessToken=${accessToken}&refreshToken=${refreshToken}`
    // );
    
  return res.redirect(
    `${process.env.FRONTEND_URL}?email=${userData.data.email}`,
  );
}