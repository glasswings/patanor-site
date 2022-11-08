---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: CC-BY-4.0

date: 2022-11-08
title: 'AGPL Compliance: Serving the Source'
layout: 'layout/main.html'

---
Today's project is updating the site to comply with the AGPL by
default.

---
This isn't something I had to do immediately; I'm currently the
only author of the templates and can do whatever I want with my
work.  But I feel it's important to set a good example: the site
currently doesn't even link to GitHub and that would be the
minimum if someone else mirrors it.

In my opinion the most polite options for source code availability (AGPL
Section 6) for web templates would be

- embedding a tarball of the build scripts and templates in the
  site itself

- linking to a public git server that contains the corresponding
  source

(These are variations of 6d, first party and third party.)

Embedding a tarball is an interesting technical challenge, but
for today my goals are:

- link to my GitHub

- serve a copy of the AGPL on the site

- update the README with instructions on when and how a
  downstream user should link to their own server or tarball

- update my footers to advertise the source
