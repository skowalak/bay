# bay

[![Version](https://img.shields.io/github/v/release/skowalak/bay)](https://github.com/skowalak/bay/releases/latest/)

Bay is a simple theme for Hugo. [Live Demo][demo]

The Bay Hugo theme is a port of the [Bay Jekyll theme][bay-jekyll] by [Eliott
Vincent][ev].

![screenshot of a webpage with the bay theme installed](/screenshot.png)


## Installation

1. Clone this repo: `git clone https://github.com/skowalak/bay`
2. Install Hugo [(get it here)][hugo]
3. Create a new directory for your new site: `mkdir my_new_site && cd
   my_new_site/`
4. An [example website](#example-site) is included in the `exampleSite`
   directory. For usage info see below. Copy the contents of `exampleSite` to
   your new directory: `cp ~/Downloads/bay/exampleSite/* .`
5. Copy the bay directory to the `themes` directory: `cp ~/Downloads/bay/ themes/`
6. Run the Hugo development server `hugo server -D`

For more information on Hugo visit the [documentation][hugodocs].

### Example Site

An Example Site is included in the `exampleSite` directory.

You can add links to the website header by modifying the `params` section in
`config.yaml`. Note: do not add slashes to the beginning of the slugs.

``` yaml
params:
  menu:
    - name: Home
      slug: 
    - name: Work
      slug: work
    - name: Blog
      slug: blog
    - name: Personal
      slug: posts/personal
```

To add Social Media links or contact links to the footer:

``` yaml
params:
  contact:
    - name: Email
      value: yourmail@domain.com
      link: mailto:yourmail@domain.com
  social:
    - name: Twitter
      link: http://twitter.com/YourTwitterUsername
```

Icons can be placed in `themes/bay/static/img/icons`. They must be a lower-case
version of the `name`.

To modify the home page, edit the `content/index.md` file, to add more blog
posts add more files to `content/blog/`, to add more sections to the work page,
add more files to `content/work/`.

Have fun!



[demo]: https://skowalak.github.io/bay
[bay-jekyll]: https://github.com/eliottvincent/bay
[ev]: https://github.com/eliottvincent
[hugo]: https://gohugo.io
[hugodocs]: https://gohugo.io/documentation/
