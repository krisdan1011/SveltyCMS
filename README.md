<p style="border: none; margin-bottom:0; padding-bottom: 0;" align="center">
      <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/var/www/vhosts/asset-trade.de/svelte.asset-trade.de/SvelteCMS/static/SimpleCMS.svg">
      <img width="250" alt="SimpleCMC logo" src="/var/www/vhosts/asset-trade.de/svelte.asset-trade.de/SvelteCMS/static/SimpleCMS.svg">
    </picture>
 </p>

<h3 align="center">SimpleCMS is powerful Headless CMS</h3>
<p align="center">With Sveltekit its fast, flexible and an easy to use content mangement system</p>

# :star2: SimpleCMS

## is a flexible Content Manage System to provide a headless backend

This CMS provides a backend based on a modern sveltekit framework with a fast MongoDB for document database scalability and flexibility.

New Collections can easily be implemented, due to full typescript support with already many support available widgets.

All fields offer full translations, and customisation as well as access restiction handeled by Lucia auth.

The System langauge uses typesave-i18n for :gb: English and :de: German out of the box, and can easily be extended to suport further languages.

We used tailwindcss and a skeleton UI tookit, so the CMS can be quickly optimised.

Data is provided via yoga graphql, to build extremely fast frontends

## :rocket: Setup

### Install all dependencies

```bash
pnpm i
```

### Environment File

rename the `.env.example` to `.env`.

Enter the access data to connect to your mongodb or mongo atlas

### :lock: Github OAuth (optional)

Create a Github OAuth app and copy-paste client id and secret into `.env`.

## :running: Run the application

```bash
pnpm run dev
```

## :art: Easy Theme Change

If you require a different look, use the skeleton theme generator to modify the `theme.postcss`

## :earth_africa: Extend System Language

To add more language just create a new language folder under `src/lib/i18n`. Best to copy de folder with the index.ts file and translate the available content to your needs.

## :clipboard: Easily create Data Collections

Greate Experience to designing user-friendly and intuitive interfaces for managing content.
Full Typescript support to display all available widgets, options to create fully custom data structures.
High security from granular individual widget access to role-based collection access control

## :question: Need help - Reach out to us if you're struggling with something

[GitHub Discussions](https://github.com/Rar9/SvelteCMS/discussions)

## :heart: Contributing & :euro: Sponsoring

Please read our [Code of Conduct](https://github.com/Rar9/SvelteCMS/blob/main/CODE-OF-CONDUCT.md) before submitting Pull Requests.

## :clap: Thanks to all our contributors without this would never have been possible

## Give us a star :star: if you like what we're doing.
