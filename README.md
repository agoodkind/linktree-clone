# Linktree Clone

## Setup instructions
1. Fill out your desired links in `data/config.json`
2. Build with `pnpm run build`
3. Upload `dist/client` to your desired hosting services (eg. Github Pages or Cloudflare Pages)

## Instagram Grid instructions
1. Place instagram photos in `public/media`
2. Update photos in desired order in `data/converted_media.json`

### Advanced: pull from IG API
1. Create an app https://developers.facebook.com/
2. Get an instagram token
3. Use [instagram-recents-go](https://github.com/agoodkind/instagram-recents-go) to fetch your recent media
