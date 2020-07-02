# About This Website

Yes, I know there are a lot of site creation tools out there, designed to make appealing portfolio websites.

I'm a programmer, not a graphics designer. I'm much more at home dealing with code than with WYSIWYG editors.

Therefore, this website is written in React. The current web page is written in markdown, and rendered in the page using an open-source markdown renderer `react-markdown`.

Using React and programming the site myself allows me total control over what the site can do, meaning that I don't need to deal with all the extra unwanted functionality provided by a website hosting service, and I'm not bound by any restrictions placed on me by the hosting service. If I want something on my site, I write it in.

## Technology stack

- GitHub

  The source code for this website is available as a [public repository](https://github.com/syy1125/syy-portfolio) on my github.

  This site is hosted on [GitHub Pages](https://pages.github.com/).

  The deployment process is automated with [GitHub Actions](https://github.com/features/actions).

  Whenever I push a new tag to the source repository, GitHub Actions automatically transpiles the source code and deploys it to the GitHub Pages repository.

- [typescript](https://www.typescriptlang.org/)

  Typescript enables static typing in javascript. It helps me catch some common mistakes, and also allows brings out powerful capabilities in the IDE that require static typing to work properly.

- [react](https://reactjs.org/)

  React is the UI library that enables the creation of this site. It utilizes JSX syntax to declaratively render websites.

  The initializatio is done by [create-react-app](https://github.com/facebook/create-react-app)

  The React ecosystem is supported by a multitude of open-source libraries. Major libraries that this website uses are

  - [material-ui](https://material-ui.com/)

  - [react-router](https://reacttraining.com/react-router/)

  - [react-markdown](https://rexxars.github.io/react-markdown/)
