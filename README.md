# NextJS Clock

This is a [Next.js](https://nextjs.org/) project built with TailwindCSS and TypeScript.

## Getting Started

First make sure you've got all needed packages:
```bash
npm install
```

You can now run your development server using:
```bash
npm run dev
```

You can also make use of Yarn, make sure to install it first:
```bash
npm install --global yarn
# control installation by checking version
yarn --version
```

Now run your server using:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Contributing

- Ask for an issue assignment
- Fork the repository
- Clone your forked repository
- Checkout to your own branch
- Code!
- Push your changes to your forked repository
- Create a pull request
- Link the PR to your assigned issue


## Localization

This project makes use of [NPM: next-translate](https://www.npmjs.com/package/next-translate) for easy localization.
In order to easily add new translations, the following folderstructure has been added. 

#### main
```bash
.
└── locales
│       ├── en
│       │   └── common.json
│       └── es-AR
│           └── common.json
│
└── i18n.json
```

In order to add new localization options, follow the next steps:

- Open .\i18n.json and add your locale to the list, its best to make use of the [ISO language codes](http://www.lingoes.net/en/translator/langcode.htm)
####.\i18n.json
```bash
{
    "locales": ["es-AR", "en", {**your language**}],
    "defaultLocale": "es-AR",
    "pages": {
      "*": ["common"]
    }
}
```
- Then add a new folder under **.\locales** using the same language code.
- Add a file called **common.json** or copy from an other language.
- Fill the file with your translations or add new translations

You can now use your translation in components by importing **useTranslation from "next-translate/useTranslation"** and using **{t("<your translation key>")}**