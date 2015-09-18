import Instagram from 'instagram-node';
import config from '../config';

function instagram(req) {
  var ig = Instagram.instagram();
  ig.use({ access_token: config.instagramToken });

  return new Promise((resolve, reject) => {
    ig.user_media_recent('365168422', (err, medias, pagination, remaining, limit) => {
      if(err) {
        reject(err);
      }

      resolve({
        medias,
        pagination,
        remaining,
        limit,
        time: Date.now()
      });
    });
  });
}


export default instagram;
