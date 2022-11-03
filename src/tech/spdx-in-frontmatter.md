---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: CC-BY-4.0

date: 2022-11-01
title: 'How to Use SPDX Tags in Eleventy Front Matter'
layout: 'layout/main.html'

---
I'm using SPDX tags to mark copyright in my Markdown files.
Here's how to incorporate them in templates.

---
The tags look something like this:

    ---
    SPDX-FileCopyrightText: 2022 Glasswings
    SPDX-License-Identifier: CC-BY-4.0
    title: 'How to Use SPDX Tags in Eleventy Front Matter'

I'd like to stick with the [SPDX][spdx] standard tags because
they can be used to segregate content that comes with different
responsibilities attached.  Using this site as an example, you
can reuse the templates commercially, but it's copyleft and you
have to re-host the source code.  And you can mirror my writing,
but some of it is non-commercial so please don't put ads on it.

[spdx]: https://spdx.dev

But since the tag keys contain hyphens, Nunjucks won't let you
access them.  Saying `{{'{{'}} SPDX-FileCopyrightText }}` doesn't
work.

The quick solution is to add a custom filter.  It's in JavaScript
and it can access kebab-case properties using array syntax.

    eleventyConfig.addNunjucksFilter("getFrontMatterVar", function(name) {
        return this.ctx[name];
    });

That [goes in the .eleventy.js file][11ty-filter].  Then you can say
something like this in your template and you'll get your copyright
notice.

    {% raw %}Copyright {{ 'SPDX-FileCopyrightText' | getVar }}{% endraw %}

[11ty-filter]: https://www.11ty.dev/docs/filters/

Please feel free to use this snippet; you don't even have to
credit me.  Personally I'm sure it's too small to copyright, but
if formalities are needed you may also use it under the
[Unlicense][c0]

[c0]: https://unlicense.org
