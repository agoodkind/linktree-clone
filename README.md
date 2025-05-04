# Linktree Clone

Highly optimized static website version

## Setup instructions

1. Fill out your desired links in `data/config.json`
2. Build with `pnpm run build`
3. Upload `dist/client` to your desired hosting services (eg. Github Pages or Cloudflare Pages)

## Instagram Grid instructions

1. Place instagram photos in `public/media`
2. Update photos in desired order in `data/converted_media.json`

Example image entries:

```json
[
    {
        "media_id": "0",
        "timestamp": "2025-04-29T11:12:52-07:00",
        "permalink": "https://example.com",
        "versions": {
            "large": {
                "file_name": "0_1024w_large.webp",
                "width": 1024,
                "height": 683
            },
            "medium": {
                "file_name": "0_768w_medium.webp",
                "width": 768,
                "height": 512
            },
            "small": {
                "file_name": "0_384w_small.webp",
                "width": 384,
                "height": 256
            },
            "thumb": {
                "file_name": "0_256w_thumb.webp",
                "width": 256,
                "height": 171
            }
        }
    }
]
  ```

### Advanced: pull from IG API

1. Create an app <https://developers.facebook.com/>
2. Get an instagram token
3. Use [instagram-recents-go](https://github.com/agoodkind/instagram-recents-go) to fetch your recent media
