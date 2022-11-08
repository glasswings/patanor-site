---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: CC-BY-4.0

date: 2022-11-08
title: 'AGPL Compliance: Serving the Source'
layout: 'layout/main.html'

---
Today's project was updating the site to comply with the AGPL by
default.

---
This isn't something I had to do immediately; I'm currently
the only author of the templates and can do whatever I want with
my work.  But I feel it's important to set a good example: the
site didn't even link to GitHub.  If someone else links it,
that's the minimum effort I'd like from them.

In my opinion the most polite options for source code availability (AGPL
Section 6) for web templates would be

- embedding a tarball of the build scripts and templates in the
  site itself

- linking to a public git server that contains the corresponding
  source

Embedding a tarball is an interesting technical challenge, but
for today my goals were:

- link to my GitHub

- serve a copy of the AGPL on the site

- update the README with instructions on when and how a
  downstream user should link to their own server or tarball

- update my footers to advertise the source

This didn'tdoesn't quite finish copyright-related stuff.  I still
need to figure out how I'll show copyright notices for blog
content, which will be a bit different between permalink pages
and ones that combine multiple posts. 

But I've decided that can wait until I create navigation.
