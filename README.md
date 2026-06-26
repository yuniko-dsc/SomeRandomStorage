# SomeRandomStorage

Stockage GitHub pour les assets et données du projet.

## Structure

```
assets/
  profiles.json      # Profils communauté (métadonnées)
  rpc.json           # Rich Presence / activités
  themes.json        # Thèmes d'embed
  community/
    profiles/        # Avatars & bannières (un dossier par profil)
  djs-selfbot-v13/   # Snapshot du module djs-selfbot-v13
```

## URLs raw (GitHub)

| Fichier | URL |
|---------|-----|
| Profils | `https://raw.githubusercontent.com/yuniko-dsc/SomeRandomStorage/main/assets/profiles.json` |
| RPC | `https://raw.githubusercontent.com/yuniko-dsc/SomeRandomStorage/main/assets/rpc.json` |
| Thèmes | `https://raw.githubusercontent.com/yuniko-dsc/SomeRandomStorage/main/assets/themes.json` |
| Image profil | `https://raw.githubusercontent.com/yuniko-dsc/SomeRandomStorage/main/assets/community/profiles/{id}/avatar.{ext}` |

Les chemins `avatar` / `banner` dans `profiles.json` sont relatifs à la racine du dépôt (`assets/community/profiles/...`).

## Notes

- Les dossiers `assets/community/profiles/*` sont prêts à recevoir les fichiers média.
- Les anciennes URLs Discord (`avatarUrl` / `bannerUrl`) peuvent expirer ; uploader les images localement dans le dossier correspondant.
