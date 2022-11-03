---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: CC-BY-4.0

title: 'How to Use SPDX Tags in Eleventy Front Matter'
layout: 'layout/main.html'

---

At the top of my source files I have something that looks like this:

    ---
    SPDX-FileCopyrightText: 2022 Glasswings
    SPDX-License-Identifier: CC-BY-4.0
    title: 'How to Use SPDX Tags in Eleventy Front Matter'

a collection of properties for templates to interpret.
Those first two lines are [SPDX][spdx] standard tags, which help
scripts find copyright notices and thus understand what they're
allowed to do with the content.

[spdx]: https://spdx.dev

{% raw %}The problem is that they contain hypens (i.e. they're
"kebab-case identifiers").  You can put `{{ SPDX-FileCopyrightText }}`
in a Nunjucks template, but it doesn't work.  The hyphen character
isn't recognized in a property name, so you have to use JavaScript to
find it.  You can do that with this filter:{% endraw %}

    eleventyConfig.addNunjucksFilter("getFrontMatterVar", function(name) {
        return this.ctx[name];
    });

which [goes in the .eleventy.js file][11ty-filter].  Then you can say
something like this in your template and you'll get your copyright
notice.

    {% raw %}Copyright {{ 'SPDX-FileCopyrightText' | getVar }}{% endraw %}

[11ty-filter]: https://www.11ty.dev/docs/filters/

I feel that code snippet isn't creative enough to copyright.  Please
feel free to re-use it for anything and without giving me credit.
