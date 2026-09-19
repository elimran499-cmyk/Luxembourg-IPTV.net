# luxembourgiptv.net

Luxembourg IPTV — abonnement IPTV 4K UHD au Luxembourg. Vite + React 19 + Tailwind 4,
quatre langues (FR / DE / EN / LB), commande directe par WhatsApp.

## Développement

```bash
npm install --legacy-peer-deps
npm run dev     # http://localhost:3102
npm run build   # dist/
npm run lint    # tsc --noEmit
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : build Vite,
puis publication sur GitHub Pages avec le domaine `luxembourgiptv.net` (fichier `CNAME`).

### DNS à configurer chez le registrar de luxembourgiptv.net

| Type  | Nom   | Valeur                        |
|-------|-------|-------------------------------|
| A     | @     | 185.199.108.153               |
| A     | @     | 185.199.109.153               |
| A     | @     | 185.199.110.153               |
| A     | @     | 185.199.111.153               |
| CNAME | www   | elimran499-cmyk.github.io.    |

Puis, dans le dépôt : **Settings → Pages → Source : GitHub Actions**, et
**Custom domain : luxembourgiptv.net** avec *Enforce HTTPS* activé.

## SEO

- Mot-clé principal : luxembourg iptv
- `robots.txt` + `sitemap.xml` (avec sitemap images) dans `public/`
- Données structurées : Organization, WebSite, Service (offres) et FAQPage
