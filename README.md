# Linktree Clone

Highly optimized static website version

## Setup instructions

1. Fill out your desired links in `data/config.json`
2. Build with `pnpm run build`
3. Upload `dist/client` to your desired hosting services (eg. Github Pages or Cloudflare Pages)

## Configurable Directories

This project supports configurable config and public directories through VS Code launch configurations. You can use different configurations for different environments:

### Available Launch Configurations

1. **Dev** - Uses root-level `data/` and `public/` directories
   - Config dir: `${workspaceFolder}/data`
   - Public dir: `${workspaceFolder}/public`

2. **Dev (Custom Config)** - Uses linktree-clone local directories
   - Config dir: `${workspaceFolder}/linktree-clone/data`
   - Public dir: `${workspaceFolder}/linktree-clone/public`

### Environment Variables

The following environment variables can be set in launch configurations:

- `CONFIG_DIR` - Path to the configuration directory (default: `./data`)
- `PUBLIC_DIR` - Path to the public assets directory (default: `./public`)

### Creating Custom Configurations

You can create your own launch configurations by adding environment variables:

```json
{
  "name": "My Custom Dev",
  "cwd": "${workspaceFolder}/linktree-clone",
  "request": "launch",
  "type": "node-terminal",
  "command": "NO_COLOR=true pnpm run dev",
  "env": {
    "CONFIG_DIR": "/path/to/your/config",
    "PUBLIC_DIR": "/path/to/your/public"
  }
}
```

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
