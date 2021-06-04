# Bagisto Documentation

You can find the online version of the Bagisto documentation at [https://devdocs.bagisto.com](https://devdocs.bagisto.com).

## Contribution guide

For contributing to the docs, you first need to set up the project,

- Fork the repository.

- Clone your fork.

- Follow the [Install Dependencies](#Install-dependencies) section.

Make sure your PR follows all these points,

- Before writing the docs just make sure to check that if that topic is already written or not.

- Make sure your markdown indentation should be proper. You can install `mark-down` lint also. This will help you to follow the markdown conventions.

- If you are creating new files for the docs, then make sure the filename should be `kebab-case`. For e.g. `file-1.md`, `file-2.md`.

## Install dependencies

- Run the following command,

  ~~~sh
  npm install
  ~~~

- Run the docs locally,

  ~~~sh
  npm run docs:dev
  ~~~

- Open your browser and go to [http://localhost:8080](http://localhost:8080).
